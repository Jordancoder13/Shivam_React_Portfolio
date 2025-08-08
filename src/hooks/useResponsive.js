import { useState, useEffect } from 'react';

// Breakpoint values (should match Tailwind config)
const breakpoints = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1600
};

/**
 * Custom hook for responsive behavior
 * Returns the current breakpoint and utility functions
 */
export const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  const [currentBreakpoint, setCurrentBreakpoint] = useState('xs');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setWindowSize({ width, height });

      // Determine current breakpoint
      if (width >= breakpoints['3xl']) {
        setCurrentBreakpoint('3xl');
      } else if (width >= breakpoints['2xl']) {
        setCurrentBreakpoint('2xl');
      } else if (width >= breakpoints.xl) {
        setCurrentBreakpoint('xl');
      } else if (width >= breakpoints.lg) {
        setCurrentBreakpoint('lg');
      } else if (width >= breakpoints.md) {
        setCurrentBreakpoint('md');
      } else if (width >= breakpoints.sm) {
        setCurrentBreakpoint('sm');
      } else if (width >= breakpoints.xs) {
        setCurrentBreakpoint('xs');
      } else {
        setCurrentBreakpoint('xs');
      }
    };

    // Initial call
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Utility functions
  const isMobile = windowSize.width < breakpoints.md;
  const isTablet = windowSize.width >= breakpoints.md && windowSize.width < breakpoints.lg;
  const isDesktop = windowSize.width >= breakpoints.lg;
  const isLarge = windowSize.width >= breakpoints.xl;
  const isExtraLarge = windowSize.width >= breakpoints['2xl'];

  // Breakpoint check functions
  const isAbove = (breakpoint) => windowSize.width >= breakpoints[breakpoint];
  const isBelow = (breakpoint) => windowSize.width < breakpoints[breakpoint];
  const isBetween = (min, max) => 
    windowSize.width >= breakpoints[min] && windowSize.width < breakpoints[max];

  return {
    windowSize,
    currentBreakpoint,
    isMobile,
    isTablet,
    isDesktop,
    isLarge,
    isExtraLarge,
    isAbove,
    isBelow,
    isBetween,
    breakpoints
  };
};

/**
 * Hook for responsive values
 * Returns different values based on current breakpoint
 */
export const useResponsiveValue = (values) => {
  const { currentBreakpoint } = useResponsive();
  
  // Default order: xs, sm, md, lg, xl, 2xl, 3xl
  const breakpointOrder = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'];
  const currentIndex = breakpointOrder.indexOf(currentBreakpoint);
  
  // Find the appropriate value for current breakpoint
  for (let i = currentIndex; i >= 0; i--) {
    const bp = breakpointOrder[i];
    if (values[bp] !== undefined) {
      return values[bp];
    }
  }
  
  // Fallback to the smallest defined value
  for (const bp of breakpointOrder) {
    if (values[bp] !== undefined) {
      return values[bp];
    }
  }
  
  return null;
};

/**
 * Hook for responsive grid columns
 * Returns appropriate grid column classes
 */
export const useResponsiveGrid = (config) => {
  const { isMobile, isTablet, isDesktop, isLarge } = useResponsive();
  
  if (isLarge && config.xl) return config.xl;
  if (isDesktop && config.lg) return config.lg;
  if (isTablet && config.md) return config.md;
  if (isMobile && config.sm) return config.sm;
  
  return config.xs || config.default || 'grid-cols-1';
};

/**
 * Hook for responsive spacing
 * Returns appropriate spacing classes
 */
export const useResponsiveSpacing = (config) => {
  const { currentBreakpoint } = useResponsive();
  
  const spacingMap = {
    xs: config.xs || config.default || 'p-4',
    sm: config.sm || config.xs || config.default || 'p-6',
    md: config.md || config.sm || config.xs || config.default || 'p-8',
    lg: config.lg || config.md || config.sm || config.xs || config.default || 'p-10',
    xl: config.xl || config.lg || config.md || config.sm || config.xs || config.default || 'p-12',
    '2xl': config['2xl'] || config.xl || config.lg || config.md || config.sm || config.xs || config.default || 'p-16',
    '3xl': config['3xl'] || config['2xl'] || config.xl || config.lg || config.md || config.sm || config.xs || config.default || 'p-20'
  };
  
  return spacingMap[currentBreakpoint];
};

/**
 * Hook for responsive font sizes
 * Returns appropriate text size classes
 */
export const useResponsiveText = (config) => {
  const { currentBreakpoint } = useResponsive();
  
  const textMap = {
    xs: config.xs || config.default || 'text-sm',
    sm: config.sm || config.xs || config.default || 'text-base',
    md: config.md || config.sm || config.xs || config.default || 'text-lg',
    lg: config.lg || config.md || config.sm || config.xs || config.default || 'text-xl',
    xl: config.xl || config.lg || config.md || config.sm || config.xs || config.default || 'text-2xl',
    '2xl': config['2xl'] || config.xl || config.lg || config.md || config.sm || config.xs || config.default || 'text-3xl',
    '3xl': config['3xl'] || config['2xl'] || config.xl || config.lg || config.md || config.sm || config.xs || config.default || 'text-4xl'
  };
  
  return textMap[currentBreakpoint];
};

/**
 * Hook for responsive image sizes
 * Returns appropriate image dimension classes
 */
export const useResponsiveImage = (config) => {
  const { currentBreakpoint } = useResponsive();
  
  const imageMap = {
    xs: config.xs || config.default || 'w-full h-auto',
    sm: config.sm || config.xs || config.default || 'w-full h-auto',
    md: config.md || config.sm || config.xs || config.default || 'w-full h-auto',
    lg: config.lg || config.md || config.sm || config.xs || config.default || 'w-full h-auto',
    xl: config.xl || config.lg || config.md || config.sm || config.xs || config.default || 'w-full h-auto',
    '2xl': config['2xl'] || config.xl || config.lg || config.md || config.sm || config.xs || config.default || 'w-full h-auto',
    '3xl': config['3xl'] || config['2xl'] || config.xl || config.lg || config.md || config.sm || config.xs || config.default || 'w-full h-auto'
  };
  
  return imageMap[currentBreakpoint];
};

export default useResponsive;
