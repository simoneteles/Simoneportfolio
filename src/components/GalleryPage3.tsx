import image_1e9380a1b0dfbdd88ded9b25086fc0ec5c006488 from 'figma:asset/1e9380a1b0dfbdd88ded9b25086fc0ec5c006488.png'
import image_79fb3a14bf581568837453bbe12e3bfcaa2347d6 from 'figma:asset/79fb3a14bf581568837453bbe12e3bfcaa2347d6.png'
import image_5fc588b7938a979780bbb9a217bc37f34c4605cf from 'figma:asset/5fc588b7938a979780bbb9a217bc37f34c4605cf.png'
import image_5e6fce6108cf5817f56b4a8c9e54c442bbd8049d from 'figma:asset/5e6fce6108cf5817f56b4a8c9e54c442bbd8049d.png'
import { ImageWithFallback } from './figma/ImageWithFallback';

export function GalleryPage3() {
  return (
    <div className="h-full flex flex-col px-6 py-16 sm:px-8 sm:py-20 md:p-12 lg:p-16 pb-24 sm:pb-28 md:pb-16">
      {/* Header */}
      <div className="mb-8 sm:mb-10 md:mb-6 lg:mb-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-6 sm:w-8 h-px bg-gray-900" />
          <h2 className="text-2xl sm:text-3xl md:text-xl lg:text-2xl text-gray-900">Galeria 3</h2>
        </div>
      </div>

      {/* Gallery Grid - Horizontal Layout */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-6 lg:gap-8">
        {/* Image 1 */}
        <div className="relative group flex flex-col">
          <div className="aspect-[3/4] md:h-80 lg:h-96 md:aspect-auto rounded-sm bg-gray-50 border border-gray-200 border-dashed flex flex-col items-center justify-center transition-all hover:border-gray-400">
            <ImageWithFallback 
              src={image_5e6fce6108cf5817f56b4a8c9e54c442bbd8049d}
              alt="Projeto 7"
              className="w-full h-full object-cover object-top rounded-sm"
            />
          </div>
          <div className="mt-4 sm:mt-5 md:mt-3 lg:mt-4">
            <p className="text-base sm:text-lg md:text-sm text-gray-900">REDE SOCIAL</p>
            <p className="text-sm sm:text-base md:text-xs text-gray-500 mt-1">Corrida NA FAIXA - Lógica Esportes</p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative group flex flex-col">
          <div className="aspect-[3/4] md:h-80 lg:h-96 md:aspect-auto rounded-sm bg-gray-50 border border-gray-200 border-dashed flex flex-col items-center justify-center transition-all hover:border-gray-400">
            <ImageWithFallback 
              src={image_1e9380a1b0dfbdd88ded9b25086fc0ec5c006488}
              alt="Projeto 8"
              className="w-full h-full object-cover object-top rounded-sm"
              style={{ objectPosition: '70% top' }}
            />
          </div>
          <div className="mt-4 sm:mt-5 md:mt-3 lg:mt-4">
            <p className="text-base sm:text-lg md:text-sm text-gray-900">ANA'S CLEANING SERVICES</p>
            <p className="text-sm sm:text-base md:text-xs text-gray-500 mt-1">Layout e programação do site</p>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative group flex flex-col">
          <div className="aspect-[3/4] md:h-80 lg:h-96 md:aspect-auto rounded-sm bg-gray-50 border border-gray-200 border-dashed flex flex-col items-center justify-center transition-all hover:border-gray-400">
            <ImageWithFallback 
              src={image_5fc588b7938a979780bbb9a217bc37f34c4605cf}
              alt="Projeto 9"
              className="w-full h-full object-cover object-top rounded-sm"
            />
          </div>
          <div className="mt-4 sm:mt-5 md:mt-3 lg:mt-4">
            <p className="text-base sm:text-lg md:text-sm text-gray-900">DEPYL ACTION</p>
            <p className="text-sm sm:text-base md:text-xs text-gray-500 mt-1">Layout de landing page</p>
          </div>
        </div>
      </div>
    </div>
  );
}