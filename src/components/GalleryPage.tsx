interface GalleryPageProps {
  galleryPage?: number;
}

export function GalleryPage({ galleryPage = 1 }: GalleryPageProps) {
  return (
    <div className="h-full flex flex-col p-16">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4">
          <div className="w-8 h-px bg-gray-900" />
          <h2 className="text-2xl text-gray-900">Gallery {galleryPage}</h2>
        </div>
      </div>

      {/* Gallery Grid - Horizontal Layout */}
      <div className="flex-1 grid grid-cols-3 gap-8">
        {/* Three Images Side by Side */}
        <div className="relative group flex flex-col">
          <div className="flex-1 rounded-sm bg-gray-50 border border-gray-200 border-dashed flex flex-col items-center justify-center transition-all hover:border-gray-400">
            <div className="w-12 h-12 border border-gray-300 flex items-center justify-center mb-3">
              <span className="text-xl text-gray-400">+</span>
            </div>
            <p className="text-gray-500 text-xs">작품 이미지 추가</p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-900">[작품 제목]</p>
            <p className="text-xs text-gray-500 mt-1">Size, Medium, Year</p>
          </div>
        </div>

        <div className="relative group flex flex-col">
          <div className="flex-1 rounded-sm bg-gray-50 border border-gray-200 border-dashed flex flex-col items-center justify-center transition-all hover:border-gray-400">
            <div className="w-12 h-12 border border-gray-300 flex items-center justify-center mb-3">
              <span className="text-xl text-gray-400">+</span>
            </div>
            <p className="text-gray-500 text-xs">작품 이미지 추가</p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-900">[작품 제목]</p>
            <p className="text-xs text-gray-500 mt-1">Size, Medium, Year</p>
          </div>
        </div>

        <div className="relative group flex flex-col">
          <div className="flex-1 rounded-sm bg-gray-50 border border-gray-200 border-dashed flex flex-col items-center justify-center transition-all hover:border-gray-400">
            <div className="w-12 h-12 border border-gray-300 flex items-center justify-center mb-3">
              <span className="text-xl text-gray-400">+</span>
            </div>
            <p className="text-gray-500 text-xs">작품 이미지 추가</p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-900">[작품 제목]</p>
            <p className="text-xs text-gray-500 mt-1">Size, Medium, Year</p>
          </div>
        </div>
      </div>
    </div>
  );
}
