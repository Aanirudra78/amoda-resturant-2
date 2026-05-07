import { ReactNode, forwardRef, CSSProperties } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', hover = true, onClick, style }, ref) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        style={style}
        className={`
          bg-warm-white rounded-card shadow-card p-10
          border border-stone-gray/10
          ${hover ? 'card-hover cursor-pointer' : ''}
          ${className}
        `}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
