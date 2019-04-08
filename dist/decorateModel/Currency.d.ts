import { Numeric } from './Numeric';
export declare class Currency extends Numeric {
    readonly presentation: string;
    readonly yuan: number;
    readonly kind: typeof Currency;
    static isCurrency<P>(model: P): boolean;
    format: (formatString?: string | undefined) => string;
    clone: (value?: number | undefined) => Currency;
}
