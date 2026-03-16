import { Mail, Instagram, Globe, MessageCircle } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="h-full flex items-center p-16 relative overflow-hidden">
      {/* Left Side - Title */}
      <div className="flex-1">
        <div className="mb-10">
          
        </div>

        <h2 className="text-6xl mb-6 text-gray-900">Contato</h2>

        <p className="text-gray-500 max-w-md">Simone Teles</p>
      </div>

      {/* Right Side - Contact Information */}
      <div className="flex-1">
        <div className="space-y-4 max-w-md">
          <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-sm hover:border-gray-300 transition-colors">
            <Mail className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 text-sm">simonebtfontenele@gmail.com</span>
          </div>

          

          

          <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-sm hover:border-gray-300 transition-colors">
            <MessageCircle className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 text-sm">(61) 99121-6523</span>
          </div>
        </div>

        {/* Footer Message */}
        <div className="pt-8 mt-8 border-t border-gray-200 max-w-md">
          <p className="text-sm text-gray-500">Obrigada por ver o meu portfólio!</p>
        </div>
      </div>
    </div>
  );
}
