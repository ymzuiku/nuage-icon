import * as React from 'react';
export interface IIcon extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    dot?: boolean;
    dotSize?: number;
    dotColor?: string;
    dotBorder?: string;
    font?: string;
    symbol?: string;
}
export declare const Icon: React.FC<IIcon>;
