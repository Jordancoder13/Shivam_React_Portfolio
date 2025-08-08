import React from 'react';

const ResponsiveTest = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 py-16 text-white">
      <div className="space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-700 text-center">
          Responsive Design Test
        </h1>
        
        {/* Grid Test */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
            Grid Responsiveness
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-800 p-4 sm:p-6 rounded-lg text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Card {item}</h3>
                <p className="text-sm sm:text-base text-gray-300">
                  This card adapts to different screen sizes
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Typography Test */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
            Typography Scaling
          </h2>
          <div className="space-y-2">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg">
              Extra Small to Large text scaling
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl">
              Small to Extra Large text scaling
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
              Base to 2XL text scaling
            </p>
          </div>
        </div>

        {/* Spacing Test */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
            Responsive Spacing
          </h2>
          <div className="bg-gray-800 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg">
            <p className="text-sm sm:text-base md:text-lg">
              This container has responsive padding that increases on larger screens.
            </p>
          </div>
        </div>

        {/* Button Test */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
            Responsive Buttons
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <button className="bg-red-700 hover:bg-red-800 text-white py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300">
              Responsive Button 1
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300">
              Responsive Button 2
            </button>
          </div>
        </div>

        {/* Breakpoint Indicator */}
        <div className="bg-gray-800 p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-4">Current Breakpoint:</h3>
          <div className="space-y-2">
            <p className="block sm:hidden text-red-400 font-bold">Mobile (&lt; 640px)</p>
            <p className="hidden sm:block md:hidden text-yellow-400 font-bold">Small (640px - 767px)</p>
            <p className="hidden md:block lg:hidden text-green-400 font-bold">Medium (768px - 1023px)</p>
            <p className="hidden lg:block xl:hidden text-blue-400 font-bold">Large (1024px - 1279px)</p>
            <p className="hidden xl:block 2xl:hidden text-purple-400 font-bold">Extra Large (1280px - 1535px)</p>
            <p className="hidden 2xl:block text-pink-400 font-bold">2XL (&gt;= 1536px)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveTest;
