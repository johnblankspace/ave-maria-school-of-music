import { twMerge } from "tailwind-merge";

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  disabled = false,
  type = 'button',
  onClick,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-blue focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variantStyles = {
    primary: 'bg-royal-navy text-white hover:bg-steel-blue active:bg-deep-navy shadow-sm',
    secondary: 'bg-steel-blue text-white hover:bg-royal-navy active:bg-deep-navy shadow-sm',
    outline: 'border-2 border-royal-navy text-royal-navy hover:bg-royal-navy hover:text-white',
    ghost: 'text-royal-navy hover:bg-mist-grey',
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#20ba59] active:bg-[#1da850] shadow-sm',
  };

  const sizeStyles = {
    sm: 'text-sm px-3.5 py-2 min-h-[38px]',
    md: 'text-base px-5 py-2.5 min-h-[44px]',
    lg: 'text-lg px-6 py-3 min-h-[48px]',
  };

  const combinedStyles = twMerge(
    baseStyles,
    variantStyles[variant] || variantStyles.primary,
    sizeStyles[size] || sizeStyles.md,
    className
  );

  if (href) {
    return (
      <a
        href={href} className={combinedStyles}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        onClick={disabled ? (event) => event.preventDefault() : onClick}
        {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedStyles}
      {...props}
    >
      {children}
    </button>
  );
}

