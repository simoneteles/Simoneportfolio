import profileImage from 'figma:asset/974daa04811c616672295f097d41ab1646d8203b.png';

export function AboutPage() {
  return (
    <div className="h-full flex flex-col px-6 py-20 sm:px-8 sm:py-24 md:p-12 lg:p-16 md:flex-row gap-12 sm:gap-16 md:gap-8 lg:gap-12 relative overflow-hidden pb-24 sm:pb-28 md:pb-16">
      {/* Left Side - Profile */}
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
        {/* Profile Image Placeholder */}
        <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-40 md:h-40 rounded-full bg-gray-100 border border-gray-200 mb-8 sm:mb-10 md:mb-6 overflow-hidden">
          <img 
            src={profileImage} 
            alt="Simone Teles" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        
        <div className="text-center">
          <div className="flex items-center gap-4 sm:gap-5 md:gap-3 justify-center mb-6 sm:mb-8 md:mb-4">
            <div className="w-8 sm:w-10 md:w-6 h-px bg-gray-900" />
            <h2 className="text-3xl sm:text-4xl md:text-2xl text-gray-900">Sobre mim</h2>
            <div className="w-8 sm:w-10 md:w-6 h-px bg-gray-900" />
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="flex-1 flex flex-col justify-center space-y-8 sm:space-y-10 md:space-y-6">
        <div>
          <h3 className="text-xl sm:text-2xl md:text-lg text-gray-900 mb-4 sm:mb-6 md:mb-3 uppercase tracking-wide border-l-4 border-gray-900 pl-4 sm:pl-5 md:pl-3">Formação</h3>
          <p className="text-lg sm:text-2xl md:text-base text-gray-700 leading-relaxed">
            Ensino superior completo em Análise e Desenvolvimento de Sistemas.
          </p>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl md:text-lg text-gray-900 mb-4 sm:mb-6 md:mb-3 uppercase tracking-wide border-l-4 border-gray-900 pl-4 sm:pl-5 md:pl-3">Experiência</h3>
          <p className="text-lg sm:text-2xl md:text-base text-gray-700 leading-relaxed">
            Design UI/UX - Layouts para Landing Pages, sites e aplicativos - Desenvolvimento de páginas web - Criativos para mídia online e redes sociais - Edição de imagens - Front End Developer.
          </p>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl md:text-lg text-gray-900 mb-4 sm:mb-6 md:mb-3 uppercase tracking-wide border-l-4 border-gray-900 pl-4 sm:pl-5 md:pl-3">Skills</h3>
          <p className="text-lg sm:text-2xl md:text-base text-gray-700 leading-relaxed">FIGMA, Adobe Photoshop, HTML, JavaScript, CSS, UI/UX design, Design responsivo, Design System.</p>
        </div>
      </div>
    </div>
  );
}