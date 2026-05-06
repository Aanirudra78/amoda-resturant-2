import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  icon?: React.ReactNode;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  icon,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-inter font-medium tracking-[0.15em] transition-all duration-500 ease-out rounded-button';
  
  const variantStyles = {
    primary: 'bg-forest-green text-warm-white hover:bg-forest-green/90 hover:shadow-xl hover:shadow-forest-green/20 active:scale-[0.98]',
    secondary: 'bg-soft-gold text-charcoal hover:bg-soft-gold/90 hover:shadow-xl hover:shadow-soft-gold/30 active:scale-[0.98]',
    outline: 'border-2 border-cream/80 text-cream backdrop-blur-sm hover:bg-cream hover:text-forest-green hover:border-cream active:scale-[0.98]',
  };
  
  const sizeStyles = {
    sm: 'px-5 py-2.5 text-xs uppercase',
    md: 'px-7 py-3.5 text-xs uppercase',
    lg: 'px-9 py-4.5 text-xs uppercase',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}
