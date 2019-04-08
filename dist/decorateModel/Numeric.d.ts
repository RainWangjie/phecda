/// <reference types="numeral" />
import { INumericField, IFieldExcludeKind } from './types';
import { Value } from './Value';
export declare class Numeric extends Value<number> {
    numeral: Numeral;
    decimals: number;
    isPercent?: boolean;
    protected readonly defaultFormatString: string;
    readonly presentation: string;
    value: number;
    readonly fuzzyValue: number;
    readonly kind: typeof Numeric;
    constructor(value: number, numericField: IFieldExcludeKind<INumericField>);
    calcTrend: (compare?: number | undefined) => number | undefined;
    format: (formatString?: string | undefined) => string;
    clone: (value?: number | undefined) => Numeric;
}
