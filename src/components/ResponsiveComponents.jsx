import React from 'react';
import { useResponsive, useResponsiveGrid, useResponsiveText } from '../hooks/useResponsive';

/**
 * Responsive Container Component
 * Automatically adjusts padding and max-width based on screen size
 */
export const ResponsiveContainer = ({ 
  children, 
  className = '', 
  maxWidth = 'max-w-screen-2xl',
  spacing = 'auto' 
}) => {
  const { isMobile, isTablet } = useResponsive();
  
  const getPadding = () => {
    if (spacing === 'auto') {
      if (isMobile) return 'px-4 py-8';
      if (isTablet) return 'px-8 py-12';
      return 'px-20 py-16';
    }
    return spacing;
  };

  return (
    <div className={`${maxWidth} container mx-auto ${getPadding()} ${className}`}>
      {children}
    </div>
  );
};

/**
 * Responsive Grid Component
 * Automatically adjusts grid columns based on screen size
 */
export const ResponsiveGrid = ({ 
  children, 
  className = '', 
  cols = { xs: 1, sm: 2, md: 3, lg: 4 },
  gap = 'gap-6 md:gap-8 lg:gap-10'
}) => {
  const gridCols = useResponsiveGrid(cols);
  
  return (
    <div className={`grid ${gridCols} ${gap} ${className}`}>
      {children}
    </div>
  );
};

/**
 * Responsive Text Component
 * Automatically adjusts font size based on screen size
 */
export const ResponsiveText = ({ 
  children, 
  as: Component = 'p', 
  className = '',
  sizes = { xs: 'text-sm', sm: 'text-base', md: 'text-lg', lg: 'text-xl' }
}) => {
  const textSize = useResponsiveText(sizes);
  
  return (
    <Component className={`${textSize} ${className}`}>
      {children}
    </Component>
  );
};

/**
 * Responsive Heading Component
 * Professional heading with responsive sizing
 */
export const ResponsiveHeading = ({ 
  children, 
  level = 1, 
  className = '',
  gradient = false,
  center = false
}) => {
  const { isMobile } = useResponsive();
  
  const getHeadingClasses = () => {
    const baseClasses = 'font-bold leading-tight';
    const colorClasses = gradient 
      ? 'text-gradient-primary' 
      : 'text-red-700';
    const alignClasses = center 
      ? 'text-center' 
      : isMobile ? 'text-center lg:text-left' : 'text-left';
    
    const sizeClasses = {
      1: 'text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
      2: 'text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
      3: 'text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
      4: 'text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl',
      5: 'text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl',
      6: 'text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl'
    };
    
    return `${baseClasses} ${colorClasses} ${alignClasses} ${sizeClasses[level]}`;
  };

  const HeadingTag = `h${level}`;
  
  return (
    <HeadingTag className={`${getHeadingClasses()} ${className}`}>
      {children}
    </HeadingTag>
  );
};

/**
 * Responsive Card Component
 * Professional card with responsive padding and effects
 */
export const ResponsiveCard = ({ 
  children, 
  className = '',
  hover = true,
  glass = true,
  padding = 'auto'
}) => {
  const { isMobile } = useResponsive();
  
  const getPadding = () => {
    if (padding === 'auto') {
      return isMobile ? 'p-4' : 'p-6 md:p-8 lg:p-10';
    }
    return padding;
  };
  
  const baseClasses = 'rounded-lg xs:rounded-xl sm:rounded-2xl border border-gray-700';
  const backgroundClasses = glass 
    ? 'bg-gray-900/50 backdrop-blur-sm' 
    : 'bg-gray-900';
  const hoverClasses = hover 
    ? 'hover:scale-105 hover:border-red-700/50 hover:shadow-glow-red transition-all duration-300 ease-in-out' 
    : '';
  
  return (
    <div className={`${baseClasses} ${backgroundClasses} ${hoverClasses} ${getPadding()} ${className}`}>
      {children}
    </div>
  );
};

/**
 * Responsive Button Component
 * Professional button with responsive sizing
 */
export const ResponsiveButton = ({ 
  children, 
  onClick,
  variant = 'primary',
  size = 'auto',
  className = '',
  disabled = false,
  ...props
}) => {
  const { isMobile } = useResponsive();
  
  const getSize = () => {
    if (size === 'auto') {
      return isMobile 
        ? 'px-4 py-2 text-sm' 
        : 'px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg';
    }
    return size;
  };
  
  const variants = {
    primary: 'bg-red-700 hover:bg-red-600 text-black font-semibold',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-red-700',
    outline: 'bg-transparent border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-black'
  };
  
  const baseClasses = 'inline-flex items-center justify-center rounded-lg xs:rounded-xl transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';
  
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${getSize()} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * Responsive Image Component
 * Automatically handles responsive images with proper loading
 */
export const ResponsiveImage = ({ 
  src, 
  alt, 
  className = '',
  aspectRatio = 'aspect-video',
  objectFit = 'object-cover',
  lazy = true
}) => {
  const baseClasses = 'w-full h-full';
  const loadingClasses = lazy ? 'loading-lazy' : '';
  
  return (
    <div className={`${aspectRatio} overflow-hidden rounded-lg xs:rounded-xl sm:rounded-2xl ${className}`}>
      <img 
        src={src} 
        alt={alt}
        className={`${baseClasses} ${objectFit} ${loadingClasses}`}
        loading={lazy ? 'lazy' : 'eager'}
        decoding="async"
      />
    </div>
  );
};

/**
 * Responsive Section Component
 * Professional section wrapper with responsive spacing
 */
export const ResponsiveSection = ({ 
  children, 
  className = '',
  id,
  background = 'transparent',
  spacing = 'auto'
}) => {
  const { isMobile } = useResponsive();
  
  const getSpacing = () => {
    if (spacing === 'auto') {
      return isMobile 
        ? 'py-12 px-4' 
        : 'py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-20';
    }
    return spacing;
  };
  
  const backgrounds = {
    transparent: 'bg-transparent',
    dark: 'bg-black',
    darker: 'bg-gray-950',
    glass: 'bg-black/50 backdrop-blur-sm'
  };
  
  return (
    <section 
      id={id}
      className={`max-w-screen-2xl container mx-auto ${backgrounds[background]} ${getSpacing()} ${className}`}
    >
      {children}
    </section>
  );
};

/**
 * Responsive Navigation Link Component
 * Professional nav link with responsive behavior
 */
export const ResponsiveNavLink = ({ 
  children, 
  to,
  active = false,
  onClick,
  className = ''
}) => {
  const { isMobile } = useResponsive();
  
  const baseClasses = 'relative font-medium transition-all duration-300 ease-in-out hover:text-red-400 focus:outline-none focus:text-red-400';
  const sizeClasses = isMobile 
    ? 'px-4 py-3 text-lg' 
    : 'px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-sm sm:text-base md:text-lg';
  const activeClasses = active 
    ? 'text-red-700 after:w-full' 
    : 'text-white after:w-0';
  const underlineClasses = 'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-700 after:transition-all after:duration-300 hover:after:w-full';
  
  return (
    <a 
      href={`#${to}`}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses} ${activeClasses} ${underlineClasses} ${className}`}
    >
      {children}
    </a>
  );
};

/**
 * Responsive Flex Component
 * Automatically adjusts flex direction based on screen size
 */
export const ResponsiveFlex = ({ 
  children, 
  className = '',
  direction = { xs: 'col', md: 'row' },
  align = 'items-center',
  justify = 'justify-between',
  gap = 'gap-4 md:gap-8'
}) => {
  const { isMobile } = useResponsive();
  
  const getDirection = () => {
    if (isMobile) {
      return `flex-${direction.xs || 'col'}`;
    }
    return `flex-${direction.md || 'row'}`;
  };
  
  return (
    <div className={`flex ${getDirection()} ${align} ${justify} ${gap} ${className}`}>
      {children}
    </div>
  );
};

export default {
  ResponsiveContainer,
  ResponsiveGrid,
  ResponsiveText,
  ResponsiveHeading,
  ResponsiveCard,
  ResponsiveButton,
  ResponsiveImage,
  ResponsiveSection,
  ResponsiveNavLink,
  ResponsiveFlex
};
