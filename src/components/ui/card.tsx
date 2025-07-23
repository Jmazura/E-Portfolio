import React from 'react';

interface CardProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export default function Card({
  title,
  subtitle,
  imageSrc,
  children,
  footer,
  className = '',
}: CardProps) {
  return (
    <div className={`w-full max-w-md bg-azura-surface text-azura-text border border-azura-border rounded-xl p-5 shadow-lg ${className}`}>
      <div className="flex items-center gap-4 mb-4">
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Card image"
            className="w-12 h-12 rounded-full border border-azura-border"
          />
        )}
        <div>
          {title && <p className="text-lg font-bold">{title}</p>}
          {subtitle && <p className="text-sm text-azura-muted">{subtitle}</p>}
        </div>
      </div>

      {children && <div className="text-sm space-y-2">{children}</div>}

      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
}
