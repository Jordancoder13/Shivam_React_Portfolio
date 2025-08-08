// Professional responsive breakpoints and utilities for modern web design
export const breakpoints = {
  xs: '475px',   // Extra small devices
  sm: '640px',   // Small devices (landscape phones)
  md: '768px',   // Medium devices (tablets)
  lg: '1024px',  // Large devices (laptops)
  xl: '1280px',  // Extra large devices (desktops)
  '2xl': '1536px', // 2X large devices (large desktops)
  '3xl': '1600px'  // 3X large devices (ultra-wide)
};

// Professional spacing system
export const spacing = {
  // Container spacing
  container: 'max-w-screen-2xl container mx-auto',
  sectionPadding: 'px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24',
  sectionMargin: 'py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32',
  
  // Card and component spacing
  cardPadding: 'p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12',
  cardPaddingSmall: 'p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8',
  
  // Layout spacing
  containerSpacing: 'space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16 xl:space-y-20',
  componentSpacing: 'space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10',
  
  // Gaps
  gridGap: 'gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12',
  flexGap: 'space-x-3 xs:space-x-4 sm:space-x-5 md:space-x-6 lg:space-x-8'
};

// Professional typography scale
export const typography = {
  // Display text (hero sections)
  display: 'text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl',
  
  // Headings
  heading1: 'text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
  heading2: 'text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
  heading3: 'text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl',
  heading4: 'text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl',
  heading5: 'text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl',
  heading6: 'text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl',
  
  // Body text
  bodyLarge: 'text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl',
  body: 'text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl',
  bodySmall: 'text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl',
  
  // Utility text
  caption: 'text-xs xs:text-sm sm:text-base md:text-lg',
  label: 'text-xs xs:text-sm sm:text-base',
  
  // Line heights
  leadingTight: 'leading-tight xs:leading-snug sm:leading-normal',
  leadingRelaxed: 'leading-relaxed xs:leading-loose sm:leading-relaxed'
};

// Advanced grid systems
export const grid = {
  // Basic responsive grids
  responsive1to2: 'grid-cols-1 md:grid-cols-2',
  responsive1to3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  responsive1to4: 'grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  responsive1to6: 'grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6',
  
  // Project/card grids
  projectGrid: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
  cardGrid: 'grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6',
  
  // Technology/skill grids
  techGrid: 'grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7',
  skillGrid: 'grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8',
  
  // Contact/feature grids
  featureGrid: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  contactGrid: 'grid-cols-1 xs:grid-cols-2 lg:grid-cols-4',
  
  // Auto-fit grids
  autoFitSmall: 'grid-cols-[repeat(auto-fit,minmax(200px,1fr))]',
  autoFitMedium: 'grid-cols-[repeat(auto-fit,minmax(300px,1fr))]',
  autoFitLarge: 'grid-cols-[repeat(auto-fit,minmax(400px,1fr))]'
};

// Professional component classes
export const components = {
  // Buttons
  buttonPrimary: 'py-2 px-4 xs:py-3 xs:px-5 sm:py-3 sm:px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 text-sm xs:text-base sm:text-lg md:text-xl',
  buttonSecondary: 'py-1.5 px-3 xs:py-2 xs:px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 text-xs xs:text-sm sm:text-base md:text-lg',
  buttonSmall: 'py-1 px-2 xs:py-1.5 xs:px-3 sm:py-2 sm:px-4 text-xs xs:text-sm sm:text-base',
  
  // Cards
  cardBasic: 'rounded-lg xs:rounded-xl sm:rounded-2xl shadow-md xs:shadow-lg sm:shadow-xl md:shadow-2xl',
  cardInteractive: 'rounded-lg xs:rounded-xl sm:rounded-2xl shadow-md xs:shadow-lg sm:shadow-xl md:shadow-2xl hover:shadow-2xl xs:hover:shadow-3xl transition-all duration-300',
  cardGlass: 'backdrop-blur-sm xs:backdrop-blur-md bg-white/10 xs:bg-white/20 border border-white/20 xs:border-white/30',
  
  // Form elements
  input: 'py-2 px-3 xs:py-2.5 xs:px-4 sm:py-3 sm:px-4 md:py-4 md:px-5 text-sm xs:text-base sm:text-lg rounded-md xs:rounded-lg sm:rounded-xl',
  textarea: 'py-3 px-4 xs:py-4 xs:px-5 sm:py-5 sm:px-6 text-sm xs:text-base sm:text-lg rounded-md xs:rounded-lg sm:rounded-xl min-h-[100px] xs:min-h-[120px] sm:min-h-[150px]',
  
  // Images
  imageResponsive: 'w-full h-auto object-cover',
  avatarSmall: 'w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16',
  avatarMedium: 'w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-32 md:h-32',
  avatarLarge: 'w-24 h-24 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56',
  
  // Icons
  iconSmall: 'w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6',
  iconMedium: 'w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10',
  iconLarge: 'w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20'
};

// Professional animations and transitions
export const animations = {
  // Hover effects
  hoverScale: 'hover:scale-105 xs:hover:scale-110 transition-transform duration-300 ease-out',
  hoverScaleSmall: 'hover:scale-102 xs:hover:scale-105 transition-transform duration-200 ease-out',
  hoverLift: 'hover:-translate-y-1 xs:hover:-translate-y-2 sm:hover:-translate-y-3 transition-transform duration-300 ease-out',
  
  // Fade animations
  fadeIn: 'opacity-0 animate-fadeInUp',
  fadeInDelay: 'opacity-0 animate-fadeInUp animation-delay-300',
  
  // Slide animations
  slideUp: 'translate-y-4 xs:translate-y-6 sm:translate-y-8 opacity-0 transition-all duration-500 ease-out',
  slideInLeft: 'translate-x-[-20px] xs:translate-x-[-30px] sm:translate-x-[-40px] opacity-0 animate-slideInLeft',
  slideInRight: 'translate-x-[20px] xs:translate-x-[30px] sm:translate-x-[40px] opacity-0 animate-slideInRight',
  
  // Loading and interaction
  pulse: 'animate-pulse',
  bounce: 'animate-bounce-slow',
  spin: 'animate-spin',
  
  // Complex transitions
  smoothTransition: 'transition-all duration-300 ease-in-out',
  fastTransition: 'transition-all duration-200 ease-in-out',
  slowTransition: 'transition-all duration-500 ease-in-out'
};

// Layout utilities
export const layout = {
  // Flexbox utilities
  flexCenter: 'flex items-center justify-center',
  flexBetween: 'flex items-center justify-between',
  flexStart: 'flex items-center justify-start',
  flexEnd: 'flex items-center justify-end',
  flexCol: 'flex flex-col',
  flexColCenter: 'flex flex-col items-center justify-center',
  
  // Responsive flex directions
  flexResponsive: 'flex flex-col sm:flex-row',
  flexResponsiveReverse: 'flex flex-col-reverse sm:flex-row',
  
  // Grid utilities
  gridCenter: 'grid place-items-center',
  
  // Positioning
  absolute: 'absolute inset-0',
  fixed: 'fixed inset-0',
  sticky: 'sticky top-0',
  
  // Overflow
  overflowHidden: 'overflow-hidden',
  overflowScroll: 'overflow-auto',
  
  // Z-index
  zIndex: {
    dropdown: 'z-10',
    sticky: 'z-20',
    fixed: 'z-30',
    modal: 'z-40',
    popover: 'z-50',
    tooltip: 'z-60'
  }
};

// Color and theme utilities
export const theme = {
  // Background patterns
  gradients: {
    primary: 'bg-gradient-to-r from-red-600 to-red-800',
    secondary: 'bg-gradient-to-r from-gray-800 to-gray-900',
    accent: 'bg-gradient-to-r from-red-500/20 to-red-700/30',
    glass: 'bg-gradient-to-r from-black/20 to-black/40 backdrop-blur-sm'
  },
  
  // Shadows
  shadows: {
    soft: 'shadow-lg xs:shadow-xl sm:shadow-2xl',
    colored: 'shadow-lg xs:shadow-xl sm:shadow-2xl shadow-red-500/20 xs:shadow-red-500/30',
    glow: 'shadow-2xl shadow-red-500/50 xs:shadow-red-500/60'
  },
  
  // Borders
  borders: {
    subtle: 'border border-gray-700 xs:border-gray-600',
    accent: 'border border-red-700/50 xs:border-red-700/70',
    gradient: 'border border-transparent bg-gradient-to-r from-red-500 to-red-700 bg-clip-border'
  }
};

// Export default object with all utilities
export default {
  breakpoints,
  spacing,
  typography,
  grid,
  components,
  animations,
  layout,
  theme
};

// Helper functions for responsive design
export const getResponsiveClass = (base, responsive) => {
  return `${base} ${responsive}`;
};

export const combineClasses = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Responsive image loading helper
export const getResponsiveImageProps = (src, alt, sizes = "100vw") => {
  return {
    src,
    alt,
    sizes,
    loading: "lazy",
    decoding: "async"
  };
};

// Viewport detection utilities (for use with React hooks)
export const viewportBreakpoints = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1600
};
