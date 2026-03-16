import { Mail, Phone } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="h-full flex flex-col px-6 py-20 sm:px-8 sm:py-24 md:p-12 lg:p-16 pb-24 sm:pb-28 md:pb-16 justify-center md:flex-row md:items-center md:justify-between gap-12 sm:gap-16 md:gap-16 lg:gap-24">
      {/* Left Side - Title */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-5xl sm:text-6xl md:text-4xl lg:text-5xl text-gray-900 mb-3 sm:mb-4 md:mb-2">Contato</h1>
        <p className="text-lg sm:text-xl md:text-base text-gray-500">Simone Teles</p>
      </div>

      {/* Right Side - Contact Info */}
      <div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-4">
        {/* Email */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-3 p-4 sm:p-6 md:p-4 bg-white border border-gray-200 rounded-lg">
          <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 text-gray-400 flex-shrink-0" />
          <span className="text-base sm:text-lg md:text-sm text-gray-600 break-all">simonebtfontenele@gmail.com</span>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-3 p-4 sm:p-6 md:p-4 bg-white border border-gray-200 rounded-lg">
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-5 md:h-5 text-gray-400 flex-shrink-0" />
          <span className="text-base sm:text-lg md:text-sm text-gray-600">
            (61) 99121-6523
          </span>
        </div>

        {/* Thank you message */}
        <p className="text-center text-sm sm:text-base md:text-xs text-gray-400 mt-6 sm:mt-8 md:mt-6">
          Obrigada por ver o meu portfólio!
        </p>
      </div>
    </div>
  );
}