export default function Footer() {
  return (
    <footer className="w-full py-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white max-w-[490px]">
      <div className="px-4">
        <div className="flex justify-center mb-6">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">
              프로톡에 대해 궁금하다면?
            </h3>
            <div className="flex gap-3 justify-center mt-4">
              <button className="bg-white text-blue-600 px-5 py-2 rounded-full font-medium text-sm">
                프로톡 시작하기
              </button>
              <button className="bg-transparent border border-white text-white px-5 py-2 rounded-full font-medium text-sm">
                회원가입 하기
              </button>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-white/70 mt-8">
          © {new Date().getFullYear()} ProTalk. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
