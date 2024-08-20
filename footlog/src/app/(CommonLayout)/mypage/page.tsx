import MypageContainer from '@components/mypage/MypageContainer';
import { recommendCoursesData } from '@core/recommendCoursesData';

export default function page() {
  return (
    <div className="mt-16pxr flex flex-col overflow-y-auto">
      <section className="h-174pxr ml-24pxr">
        <div className="font-mypageTitle">마이 페이지</div>

        <div className="mt-27pxr flex">
          <div className="mt-5pxr">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle opacity="0.5" cx="40" cy="40" r="40" fill="#D9D9D9" />
            </svg>
          </div>

          <div className="ml-24pxr">
            <div className="font-mypageNickname">닉네임</div>
            <div className="mt-8pxr flex">
              <div className="font-mypageLevel font-medium text-gray_4">레벨 1</div>
              <div className="font-mypageLevel ml-2pxr font-bold text-main-green">새싹 플로거</div>
            </div>
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="42" viewBox="0 0 38 42" fill="none">
                <g filter="url(#filter0_d_1_3631)">
                  <path
                    d="M29 17.9221V7.48174C29 6.77728 28.285 6.27328 27.6041 6.4541C25.6207 6.98087 21.9052 7.60959 19 6.01587C15.6682 4.18816 11.2708 5.28341 9.6423 5.79572C9.24979 5.9192 9 6.28658 9 6.69806V17.084C9 17.7984 9.73571 18.305 10.4233 18.1109C12.4134 17.5492 16.1081 16.8907 19 18.5873C22.3459 20.5502 26.7665 19.3606 28.3783 18.8158C28.76 18.6868 29 18.3251 29 17.9221Z"
                    fill="#05CBBE"
                    stroke="#D9D9D9"
                    stroke-width="2"
                  />
                  <path d="M9 5L9 29" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_3631"
                    x="0"
                    y="0"
                    width="38"
                    height="42"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0196078 0 0 0 0 0.796078 0 0 0 0 0.745098 0 0 0 0.16 0"
                    />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3631" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3631" result="shape" />
                  </filter>
                </defs>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 22 26" fill="none">
                <path
                  d="M21 13.9221V3.48174C21 2.77728 20.285 2.27328 19.6041 2.4541C17.6207 2.98087 13.9052 3.60959 11 2.01587C7.66824 0.188164 3.27081 1.28341 1.6423 1.79572C1.24979 1.9192 1 2.28658 1 2.69806V13.084C1 13.7984 1.73571 14.305 2.42329 14.1109C4.41339 13.5492 8.10812 12.8907 11 14.5873C14.3459 16.5502 18.7665 15.3606 20.3783 14.8158C20.76 14.6868 21 14.3251 21 13.9221Z"
                  fill="white"
                  stroke="#D9D9D9"
                  stroke-width="2"
                />
                <path d="M1 1L1 25" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <div className="w-393pxr h-8pxr bg-gray_1" />

      <section className="ml-24pxr">
        <MypageContainer title="저장 목록" courses={recommendCoursesData} />
        <MypageContainer title="최근 확인한 코스" courses={recommendCoursesData} />
      </section>

      <div className="w-393pxr h-8pxr bg-gray_1" />

      <div className="ml-24pxr">
        <div className="font-mypageDetail mt-20pxr text-gray_8">선호도 재설정</div>
        <div className="font-mypageDetai mt-20pxr text-gray_4">로그아웃</div>
      </div>
    </div>
  );
}
