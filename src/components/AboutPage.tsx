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
          <h3 className="text-sm mb-3 text-gray-900 tracking-wider uppercase">작품 스타일</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            [작품 스타일과 특징을 설명해주세요. 주로 사용하는 재료, 기법, 영감을 받는 대상 등을 작성하면 좋습니다.]
          </p>
        </div>

        <div className="border-l-2 border-gray-900 pl-6">
          <h3 className="text-sm mb-3 text-gray-900 tracking-wider uppercase">경력 & 학력</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            [학력, 전시 경험, 수상 경력 등을 작성해주세요.]
          </p>
        </div>

        <div className="border-l-2 border-gray-900 pl-6">
          <h3 className="text-sm mb-3 text-gray-900 tracking-wider uppercase">예술 철학</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            [작품 활동을 통해 전달하고 싶은 메시지나 예술적 가치관을 작성해주세요.]
          </p>
        </div>
      </div>
    </div>
  );
}
