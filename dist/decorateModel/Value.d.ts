import { IFieldExcludeKind, IField } from './types';
import { Field } from './Field';
export declare abstract class Value<P> {
    value: P;
    field: Field;
    abstract readonly presentation: string;
    abstract readonly kind: any;
    constructor(value: P, field: IFieldExcludeKind<IField>);
    abstract clone(value: P): Value<P>;
}
