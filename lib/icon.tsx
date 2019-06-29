import * as React from 'react';

export interface IIcon {
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
  /* 样式 */
  className?: string;
}

export const Icon:React.FC<IIcon> = ({
  dot,
  dotSize = 12,
  dotColor = '#f33',
  dotBorder = '1px solid #fff',
  font,
  symbol,
  className = '',
  ...props
}) => {
  let icon = null;

  if (font) {
    icon = <i className={`iconfont ${font} ${className}`} {...props} />;
  } else if (symbol) {
    icon = (
      <svg className={`icon ${className}`} aria-hidden="true" {...props}>
        <use xlinkHref={`#${symbol}`} />
      </svg>
    );
  }
  if (dot) {
    return (
      <div style={{ position: 'relative' }}>
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
