import image_c67a3fe5b215b1af6cc23e0c1daf0c585893e926 from 'figma:asset/c67a3fe5b215b1af6cc23e0c1daf0c585893e926.png'
import image_5554a3498cd5d6c37019666b202e409459412408 from 'figma:asset/5554a3498cd5d6c37019666b202e409459412408.png'
import image_fb099ceea9e78ed0993c03ca67c3ac485bf65aae from 'figma:asset/fb099ceea9e78ed0993c03ca67c3ac485bf65aae.png'
import { ImageWithFallback } from './figma/ImageWithFallback';

export function GalleryPage1() {
  return (
    <div className="h-full flex flex-col p-16">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4">
          <div className="w-8 h-px bg-gray-900" />
          <h2 className="text-2xl text-gray-900">Galeria 1</h2>
        </div>
      </div>

      {/* Gallery Grid - Horizontal Layout */}
      <div className="flex-1 grid grid-cols-3 gap-8">
        {/* Image 1 */}
        <div className="relative group flex flex-col">
          <div className="h-[480px] rounded-sm bg-gray-50 border border-gray-200 border-dashed flex flex-col items-center justify-center transition-all hover:border-gray-400">
            <ImageWithFallback 
              src={image_fb099ceea9e78ed0993c03ca67c3ac485bf65aae}
              alt="ESCOLA LITTLE KIDS"
              className="w-full h-full object-cover object-top rounded-sm"
            />
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-900">ESCOLA LITTLE KIDS</p>
            <p className="text-xs text-gray-500 mt-1">Layout de site one page</p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative group flex flex-col">
          <div className="h-[480px] rounded-sm bg-gray-50 border border-gray-200 border-dashed flex flex-col items-center justify-center transition-all hover:border-gray-400">
            <ImageWithFallback 
              src={image_5554a3498cd5d6c37019666b202e409459412408}
              alt="CPSI LIFE"
              className="w-full h-full object-cover object-top rounded-sm"
            />
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-900">CPSI LIFE</p>
            <p className="text-xs text-gray-500 mt-1">Layout de landing page</p>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative group flex flex-col">
          <div className="h-[480px] rounded-sm bg-gray-50 border border-gray-200 border-dashed flex flex-col items-center justify-center transition-all hover:border-gray-400">
            <ImageWithFallback 
              src={image_c67a3fe5b215b1af6cc23e0c1daf0c585893e926}
              alt="REDESIGN STRANGER THINGS"
              className="w-full h-full object-cover object-top rounded-sm"
            />
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-900">REDESIGN STRANGER THINGS</p>
            <p className="text-xs text-gray-500 mt-1">Redesign feito em workshop com animações</p>
          </div>
        </div>
      </div>
    </div>
  );
}
