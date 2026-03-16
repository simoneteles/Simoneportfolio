export function AboutPage() {
  return (
    <div className="h-full flex p-16 gap-12 relative overflow-hidden">
      {/* Left Side - Profile */}
      <div className="w-1/3 flex flex-col items-center justify-center">
        {/* Profile Image Placeholder */}
        <div className="w-40 h-40 rounded-full bg-gray-100 border border-gray-200 mb-6" />
        
        <div className="text-center">
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="w-6 h-px bg-gray-900" />
            <h2 className="text-2xl text-gray-900">Sobre mim</h2>
            <div className="w-6 h-px bg-gray-900" />
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="flex-1 flex flex-col justify-center space-y-8">
        <div className="border-l-2 border-gray-900 pl-6">
          <h3 className="text-sm mb-3 text-gray-900 tracking-wider uppercase">Formação</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Ensino superior completo em Análise e Desenvolvimento de Sistemas.</p>
        </div>

        <div className="border-l-2 border-gray-900 pl-6">
          <h3 className="text-sm mb-3 text-gray-900 tracking-wider uppercase">Experiência</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Design UI/UX - Layouts para Landing Pages e sites - Criativos para mídia online e redes sociais - Desenvolvimento Front-End.</p>
        </div>

        <div className="border-l-2 border-gray-900 pl-6">
          <h3 className="text-sm mb-3 text-gray-900 tracking-wider uppercase">skills</h3>
          <p className="text-gray-600 text-sm leading-relaxed">FIGMA, Adobe Photoshop, HTML, JavaScript, CSS, UI/UX design</p>
        </div>
      </div>
    </div>
  );
}
