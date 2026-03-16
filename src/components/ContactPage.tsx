import { Mail, Instagram, Globe, MessageCircle } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="h-full flex flex-col md:flex-row items-center p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">
      {/* Left Side - Title */}
      <div className="flex-1 w-full md:w-auto text-center md:text-left mb-8 md:mb-0">
        <div className="mb-6 md:mb-10">
          
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-6 text-gray-900">Contato</h2>

        <p className="text-gray-500 max-w-md mx-auto md:mx-0">Simone Teles</p>
      </div>

      {/* Right Side - Contact Information */}
      <div className="flex-1 w-full md:w-auto">
        <div className="space-y-3 sm:space-y-4 max-w-md mx-auto md:mx-0">
          <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-gray-200 rounded-sm hover:border-gray-300 transition-colors">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
            <span className="text-gray-700 text-xs sm:text-sm break-all">simonebtfontenele@gmail.com</span>
          </div>

          

          

          <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-gray-200 rounded-sm hover:border-gray-300 transition-colors">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
            <span className="text-gray-700 text-xs sm:text-sm">(61) 99121-6523</span>
          </div>
        </div>

        {/* Footer Message */}
        <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-gray-200 max-w-md mx-auto md:mx-0">
          <p className="text-sm text-gray-500 text-center md:text-left">Obrigada por ver o meu portfólio!</p>
        </div>
      </div>
    </div>
  );
}