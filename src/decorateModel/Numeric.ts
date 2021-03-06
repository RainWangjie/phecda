import numeral from 'numeral'

import { INumericField, IFieldExcludeKind } from './types'
import { Value } from './Value'

export class Numeric extends Value<number> {
  public numeral: Numeral
  public decimals: number
  public isPercent?: boolean

  protected get defaultFormatString(): string {
    const formatString = this.formatStringWithDecimals()

    if (this.isPercent) {
      return `${formatString}%`
    }

    return formatString
  }

  public get presentation() {
    return this.format()
  }

  public get value(): number {
    return this.numeral.value()
  }

  public set value(newValue: number) {
    this.numeral = numeral(newValue)
  }

  public get fuzzyValue(): number {
    return numeral(numeral(this.presentation).format(this.formatStringWithDecimals(
      this.isPercent ? this.decimals + 2 : this.decimals
    ))).value()
  }

  public get kind() {
    return Numeric
  }

  constructor(value: number, numericField: IFieldExcludeKind<INumericField>) {
    super(value, numericField)

    this.numeral = numeral(value)
    this.decimals = numericField.decimals
    this.isPercent = numericField.isPercent
  }

  public calcTrend = (compare?: number) => {
    if (compare == undefined || compare === 0 || Number.isNaN(compare)) {
      return undefined
    }

    return numeral(this.value)
      .subtract(compare)
      .divide(compare)
      .value()
  }

  public format = (formatString?: string) => {
    return this.numeral.format(formatString || this.defaultFormatString)
  }

  public clone = (value?: number) => {
    return new Numeric(value || this.value, {
      decimals: this.decimals,
      displayName: this.field.displayName,
      isPercent: this.isPercent,
    })
  }

  protected formatStringWithDecimals(decimals = this.decimals): string {
    let formatString = '0,0'

    if (decimals > 0) {
      formatString += `.${'0'.repeat(decimals)}`
    }

    return formatString
  }
}
