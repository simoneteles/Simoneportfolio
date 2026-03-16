import image_974daa04811c616672295f097d41ab1646d8203b from 'figma:asset/974daa04811c616672295f097d41ab1646d8203b.png'
import profileImage from 'figma:asset/4b5afed70ab4f4e89c49bdd39e57410da76e23e7.png';

export function CoverPage() {
  return (
    <div className="h-full flex flex-col md:flex-row items-center justify-between px-6 py-20 sm:px-8 sm:py-24 md:p-12 lg:p-16 relative overflow-hidden">
      {/* Subtle Decorative Lines */}
      <div className="hidden md:block absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-20" />
      <div className="hidden md:block absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-20" />

      {/* Left Side - Info */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-0">
        {/* Portfolio Label */}
        <div className="border border-gray-300 px-6 py-2 sm:px-8 sm:py-3 md:px-4 md:py-2 mb-12 sm:mb-16 md:mb-8">
          <span className="text-xs sm:text-sm md:text-xs text-gray-600 tracking-widest uppercase">Portfolio</span>
        </div>
        
        {/* Name */}
        <h1 className="text-6xl sm:text-8xl md:text-6xl lg:text-7xl mb-6 sm:mb-8 md:mb-4 text-gray-900 font-light tracking-tight">
          Simone<br />Teles
        </h1>
        
        {/* Location */}
        <p className="text-base sm:text-xl md:text-sm text-gray-500 mb-16 sm:mb-20 md:mb-12">
          Águas Claras - DF
        </p>
        
        {/* Contact Section */}
        <div className="space-y-3 sm:space-y-4 md:space-y-2">
          <p className="text-xs sm:text-sm md:text-xs text-gray-400 uppercase tracking-widest">Contato</p>
          <p className="text-base sm:text-xl md:text-sm text-gray-900">simonebtfontenele@gmail.com</p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 flex items-center justify-center md:justify-end">
        <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-64 md:h-64 lg:w-72 lg:h-72 border border-gray-200 p-4 sm:p-5 md:p-4 rounded-lg">
          <img 
            src={image_974daa04811c616672295f097d41ab1646d8203b} 
            alt="Simone Teles" 
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}