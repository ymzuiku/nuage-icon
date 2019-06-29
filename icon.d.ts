import * as React from 'react';
export interface IIcon {
    dot?: boolean;
    dotSize?: number;
    dotColor?: string;
    dotBorder?: string;
    font?: string;
    symbol?: string;
    className?: string;
}
export declare const Icon: React.FC<IIcon>;
