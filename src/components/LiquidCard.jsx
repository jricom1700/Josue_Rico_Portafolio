import React from 'react';

export function LiquidCard({
  children,
  className = '',
  as: Component = 'div',
  ...props
}) {
  return (
    <Component
      className={`liquid-glass rounded-3xl overflow-hidden ${className}`}
      {...props}
    >
      <div className="liquid-rim" aria-hidden="true" />
      <div className="relative z-10 h-full">{children}</div>
    </Component>
  );
}
