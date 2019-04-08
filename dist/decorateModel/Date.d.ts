import { Moment } from 'moment';
import { IDateField, IFieldExcludeKind } from './types';
import { Value } from './Value';
export declare class Date extends Value<string> {
    moment: Moment;
    readonly presentation: string;
    readonly kind: typeof Date;
    constructor(value: string, field: IFieldExcludeKind<IDateField>);
    format: (formatString?: string) => string;
    clone: (value?: string | undefined) => Date;
}
