export default function Home() {
  return (
    <div>
      {/* 히어로 섹션 */}
      <section className="relative pt-16 pb-24 bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-4">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold leading-tight mb-4">
            직접 만나기 어려운
            <br />
            전문가, 프로톡에서
            <br />
            쉽게 만나세요!
          </h1>
          <p className="text-white/80 text-sm mb-8">
            지금 바로 원하는 전문가를 찾아보고 상담해 보세요.
            <br />첫 상담부터 여러 분야의 전문 상담까지.
          </p>

          <div className="mb-8">
            <div className="inline-block p-2 bg-white/10 rounded-lg">
              <div className="w-20 h-20 bg-white/30 rounded flex items-center justify-center text-xs">
                QR 코드
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 w-36">
          <div className="w-full h-64 bg-white/20 rounded-lg flex items-center justify-center">
            <div className="w-32 h-56 bg-white/30 rounded-lg flex items-center justify-center text-xs">
              모바일 앱 화면
            </div>
          </div>
        </div>

        {/* 원형 장식 요소 */}
        <div className="absolute left-4 top-16 w-20 h-20 rounded-full bg-pink-200/20"></div>
        <div className="absolute right-20 top-10 w-16 h-16 rounded-full bg-blue-300/20"></div>
      </section>

      {/* 서비스 소개 섹션 */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-2xl font-bold text-center mb-10">
          프로톡 서비스 소개
        </h2>

        <div className="grid grid-cols-1 gap-8">
          <div>
            <h3 className="font-bold mb-3 text-gray-900">프로톡이란?</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              프로톡은 다양한 분야의 전문가들을 쉽게 만날 수 있는 플랫폼입니다.
              경력이 풍부한 전문가들이 여러분의 질문에 답변하고 상담을
              제공합니다. 빠르고 정확한 답변으로 여러분의 문제 해결을
              도와드립니다.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-gray-900">
              프로톡은 어떤 사람인가요?
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              프로톡은 각자의 분야에서 오랜 경험과 전문 지식을 가진 분들입니다.
              까다로운 심사 과정을 통과한 검증된 전문가들만이 프로톡으로
              활동합니다. 여러분의 질문에 언제든지 친절하게 답변해 드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* 1:1 상담 섹션 */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="flex flex-col items-start gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-3">
              언제 어디서든,
              <br />
              1:1 상담 가능합니다.
            </h2>
            <p className="text-sm text-gray-600">
              24시간 언제든지 상담을 요청하고
              <br />
              전문가의 답변을 받아보세요.
            </p>
          </div>

          <div className="w-full mt-4">
            <div className="w-full h-56 bg-blue-100 rounded-lg flex items-center justify-center">
              <div className="w-32 h-52 bg-white rounded-lg mx-4 flex items-center justify-center text-xs p-2 text-center">
                전문가와의 채팅 화면
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
