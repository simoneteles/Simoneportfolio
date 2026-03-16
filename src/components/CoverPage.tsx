import profileImage from 'figma:asset/974daa04811c616672295f097d41ab1646d8203b.png';

export function CoverPage() {
  return (
    <div className="h-full flex flex-col md:flex-row items-center p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">
      {/* Subtle Decorative Lines */}
      <div className="hidden md:block absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-20" />
      <div className="hidden md:block absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-20" />

      {/* Main Content - Left Aligned */}
      <div className="flex-1 relative z-10 w-full md:w-auto text-center md:text-left">
        <div className="mb-8 md:mb-12">
          <div className="inline-block px-5 py-1.5 border border-gray-300 rounded-sm mb-6 md:mb-8"><span className="text-gray-600 text-xs tracking-[0.2em] uppercase">Portfolio</span></div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 md:mb-8 text-gray-900 tracking-tight leading-tight">Simone<br />Teles</h1>

        <p className="text-gray-500 mb-8 md:mb-12">Águas Claras - DF</p>

        {/* Artist Name Placeholder */}
        <div className="mt-12 md:mt-20 pt-6 md:pt-8 border-t border-gray-200 max-w-md mx-auto md:mx-0">
          <p className="text-xs text-gray-400 mb-3 tracking-wider uppercase">CONTATO</p>
          <p className="text-lg md:text-xl text-gray-800 break-all">simonebtfontenele@gmail.com</p>
        </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="flex-1 flex items-center justify-center mt-8 md:mt-0 w-full md:w-auto">
        <div className="w-48 sm:w-56 md:w-64 overflow-hidden rounded-sm border border-gray-200">
          <img 
            src={profileImage} 
            alt="Simone Teles" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}