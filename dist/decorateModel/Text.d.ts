import { IFieldExcludeKind, IPresentationField } from './types';
import { Value } from './Value';
export declare class Text extends Value<string> {
    valueMapper?: IPresentationField['valueMapper'];
    readonly presentation: string;
    readonly kind: typeof Text;
    readonly valueDisplayName: string;
    constructor(value: string, presentationField: IFieldExcludeKind<IPresentationField>);
    clone: (value?: string | undefined) => Text;
}
