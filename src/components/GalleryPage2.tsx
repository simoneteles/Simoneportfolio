import image_92b3ee86e8048a70e3b93369f32568d2f43ebee0 from 'figma:asset/92b3ee86e8048a70e3b93369f32568d2f43ebee0.png'
import image_9053ea1ee8ac6524116f11a486ad0c42269ebfea from 'figma:asset/9053ea1ee8ac6524116f11a486ad0c42269ebfea.png'
import image_cf40db2122f28ad4b1b1aeb5e359b3805ac55cd6 from 'figma:asset/cf40db2122f28ad4b1b1aeb5e359b3805ac55cd6.png'
import image_70baefe9d289d352e4ff05e4f9aace13f469d7de from 'figma:asset/70baefe9d289d352e4ff05e4f9aace13f469d7de.png'
import image_5e2834e9a4bed352057eaef6161985e4f4d843d3 from 'figma:asset/5e2834e9a4bed352057eaef6161985e4f4d843d3.png'
import image_6a4c633fc515dd883839a18506e5f761c6a2e6f5 from 'figma:asset/6a4c633fc515dd883839a18506e5f761c6a2e6f5.png'
import { ImageWithFallback } from './figma/ImageWithFallback';

export function GalleryPage2() {
  return (
    <div className="h-full flex flex-col px-6 py-16 sm:px-8 sm:py-20 md:p-12 lg:p-16 pb-24 sm:pb-28 md:pb-16">
      {/* Header */}
      <div className="mb-8 sm:mb-10 md:mb-6 lg:mb-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-6 sm:w-8 h-px bg-gray-900" />
          <h2 className="text-2xl sm:text-3xl md:text-xl lg:text-2xl text-gray-900">Galeria 2</h2>
        </div>
      </div>

      {/* Gallery Grid - Horizontal Layout */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-6 lg:gap-8">
        {/* Image 1 */}
        <div className="relative group flex flex-col">
          <div className="aspect-[3/4] md:h-80 lg:h-96 md:aspect-auto rounded-sm bg-gray-50 border border-gray-200 border-dashed flex flex-col items-center justify-center transition-all hover:border-gray-400">
            <ImageWithFallback 
              src={image_92b3ee86e8048a70e3b93369f32568d2f43ebee0}
              alt="Projeto 4"
              className="w-full h-full object-cover object-top rounded-sm"
            />
          </div>
          <div className="mt-4 sm:mt-5 md:mt-3 lg:mt-4">
            <p className="text-base sm:text-lg md:text-sm text-gray-900">DESENVOLVIMENTO FRONT END - COFECON</p>
            <p className="text-sm sm:text-base md:text-xs text-gray-500 mt-1"></p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative group flex flex-col">
          <div className="aspect-[3/4] md:h-80 lg:h-96 md:aspect-auto rounded-sm bg-gray-50 border border-gray-200 border-dashed flex flex-col items-center justify-center transition-all hover:border-gray-400">
            <ImageWithFallback 
              src={image_5e2834e9a4bed352057eaef6161985e4f4d843d3}
              alt="Projeto 5"
              className="w-full h-full object-cover object-top rounded-sm"
            />
          </div>
          <div className="mt-4 sm:mt-5 md:mt-3 lg:mt-4">
            <p className="text-base sm:text-lg md:text-sm text-gray-900">REDE SOCIAL - CORRIDA POUPEX</p>
            <p className="text-sm sm:text-base md:text-xs text-gray-500 mt-1"></p>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative group flex flex-col">
          <div className="aspect-[3/4] md:h-80 lg:h-96 md:aspect-auto rounded-sm bg-gray-50 border border-gray-200 border-dashed flex flex-col items-center justify-center transition-all hover:border-gray-400">
            <ImageWithFallback 
              src={image_9053ea1ee8ac6524116f11a486ad0c42269ebfea}
              alt="Projeto 6"
              className="w-full h-full object-cover rounded-sm"
              style={{ objectPosition: '10% 10%' }}
            />
          </div>
          <div className="mt-4 sm:mt-5 md:mt-3 lg:mt-4">
            <p className="text-base sm:text-lg md:text-sm text-gray-900">LANDING PAGE - IANARA PINHO</p>
            <p className="text-sm sm:text-base md:text-xs text-gray-500 mt-1"></p>
          </div>
        </div>
      </div>
    </div>
  );
}