import * as React from 'react';

export interface IIcon extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /* 右上角的角标 */
  dot?: boolean;
  /* 角标比例，默认1 */
  dotSize?: number;
  /* 角标颜色 */
  dotColor?: string;
  /* 角标边 */
  dotBorder?: string;
  /* font-icon 尺寸 */
  font?: string;
  /* symbol 尺寸 */
  symbol?: string;
  /* 兼容移动端和pc端的点击 */
  fastClick?(event:any):any;
}

export const Icon:React.FC<IIcon> = ({
  dot,
  dotSize = 12,
  dotColor = '#f33',
  dotBorder = '1px solid #fff',
  font,
  symbol,
  className = '',
  onTouchEnd,
  fastClick,
  onMouseUp,
  ...props
}) => {
  let icon = null;

  const click = (event: any) => {
    if (fastClick) {
      fastClick(event);
    }
    if (onTouchEnd) {
      onTouchEnd(event);
    }
    if (onMouseUp) {
      onMouseUp(event);
    }
  }

  if (font) {
    icon = <i className={`iconfont ${font} ${className}`} {...props} />;
  } else if (symbol) {
    icon = (
      <svg onMouseUpCapture={click} onTouchEndCapture={click} className={`icon ${className}`} aria-hidden="true" {...props as any}>
        <use xlinkHref={`#${symbol}`} />
      </svg>
    );
  }
  if (dot) {
    return (
      <div onMouseUpCapture={click} onTouchEndCapture={click} style={{ position: 'relative' }}>
        {icon}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: dotSize,
            height: dotSize,
            background: dotColor,
            borderRadius: dotSize / 2,
            border: dotBorder,
          }}
        />
      </div>
    );
  }

  return icon;
};
