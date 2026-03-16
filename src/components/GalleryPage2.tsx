import image_92b3ee86e8048a70e3b93369f32568d2f43ebee0 from 'figma:asset/92b3ee86e8048a70e3b93369f32568d2f43ebee0.png'
import image_9053ea1ee8ac6524116f11a486ad0c42269ebfea from 'figma:asset/9053ea1ee8ac6524116f11a486ad0c42269ebfea.png'
import image_cf40db2122f28ad4b1b1aeb5e359b3805ac55cd6 from 'figma:asset/cf40db2122f28ad4b1b1aeb5e359b3805ac55cd6.png'
import image_70baefe9d289d352e4ff05e4f9aace13f469d7de from 'figma:asset/70baefe9d289d352e4ff05e4f9aace13f469d7de.png'
import image_5e2834e9a4bed352057eaef6161985e4f4d843d3 from 'figma:asset/5e2834e9a4bed352057eaef6161985e4f4d843d3.png'
import image_6a4c633fc515dd883839a18506e5f761c6a2e6f5 from 'figma:asset/6a4c633fc515dd883839a18506e5f761c6a2e6f5.png'
import { ImageWithFallback } from './figma/ImageWithFallback';

export function GalleryPage2() {
  return (
    <div className="h-full flex flex-col p-6 sm:p-8 md:p-12 lg:p-16">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-4">
          <div className="w-8 h-px bg-gray-900" />
          <h2 className="text-xl sm:text-2xl text-gray-900">Galeria 2</h2>
        </div>
      </div>

      {/* Gallery Grid - Horizontal Layout */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {/* Image 1 */}
        <div className="relative group flex flex-col">
          <div className="h-64 sm:h-80 md:h-96 lg:h-[480px] rounded-sm bg-gray-50 border border-gray-200 border-dashed flex flex-col items-center justify-center transition-all hover:border-gray-400">
            <ImageWithFallback 
              src={image_92b3ee86e8048a70e3b93369f32568d2f43ebee0}
              alt="Projeto 4"
              className="w-full h-full object-cover object-top rounded-sm"
            />
          </div>
          <div className="mt-3 sm:mt-4">
            <p className="text-sm text-gray-900">DESENVOLVIMENTO FRONT END - COFECON</p>
            <p className="text-xs text-gray-500 mt-1"></p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative group flex flex-col">
          <div className="h-64 sm:h-80 md:h-96 lg:h-[480px] rounded-sm bg-gray-50 border border-gray-200 border-dashed flex flex-col items-center justify-center transition-all hover:border-gray-400">
            <ImageWithFallback 
              src={image_5e2834e9a4bed352057eaef6161985e4f4d843d3}
              alt="Projeto 5"
              className="w-full h-full object-cover object-top rounded-sm"
            />
          </div>
          <div className="mt-3 sm:mt-4">
            <p className="text-sm text-gray-900">REDE SOCIAL - CORRIDA POUPEX</p>
            <p className="text-xs text-gray-500 mt-1"></p>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative group flex flex-col">
          <div className="h-64 sm:h-80 md:h-96 lg:h-[480px] rounded-sm bg-gray-50 border border-gray-200 border-dashed flex flex-col items-center justify-center transition-all hover:border-gray-400">
            <ImageWithFallback 
              src={image_9053ea1ee8ac6524116f11a486ad0c42269ebfea}
              alt="Projeto 6"
              className="w-full h-full object-cover rounded-sm"
              style={{ objectPosition: '10% 10%' }}
            />
          </div>
          <div className="mt-3 sm:mt-4">
            <p className="text-sm text-gray-900">LANDING PAGE - IANARA PINHO</p>
            <p className="text-xs text-gray-500 mt-1"></p>
          </div>
        </div>
      </div>
    </div>
  );
}