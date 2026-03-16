import { Mail, Instagram, Globe, MessageCircle } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="h-full flex items-center p-16 relative overflow-hidden">
      {/* Left Side - Title */}
      <div className="flex-1">
        <div className="mb-10">
          <div className="inline-block px-5 py-1.5 border border-gray-300 rounded-sm mb-8">
            <span className="text-gray-600 text-xs tracking-[0.2em] uppercase">Get In Touch</span>
          </div>
        </div>

        <h2 className="text-6xl mb-6 text-gray-900">
          Contact
        </h2>

        <p className="text-gray-500 max-w-md">
          작품 문의 및 협업 제안을 환영합니다
        </p>
      </div>

      {/* Right Side - Contact Information */}
      <div className="flex-1">
        <div className="space-y-4 max-w-md">
          <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-sm hover:border-gray-300 transition-colors">
            <Mail className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 text-sm">your.email@example.com</span>
          </div>

          <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-sm hover:border-gray-300 transition-colors">
            <Instagram className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 text-sm">@your_instagram</span>
          </div>

          <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-sm hover:border-gray-300 transition-colors">
            <Globe className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 text-sm">www.yourwebsite.com</span>
          </div>

          <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-sm hover:border-gray-300 transition-colors">
            <MessageCircle className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 text-sm">카카오톡 ID</span>
          </div>
        </div>

        {/* Footer Message */}
        <div className="pt-8 mt-8 border-t border-gray-200 max-w-md">
          <p className="text-sm text-gray-500">
            Thank you for viewing my portfolio
          </p>
        </div>
      </div>
    </div>
  );
}
