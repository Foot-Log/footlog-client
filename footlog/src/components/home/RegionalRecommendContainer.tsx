import { regionsData } from '@core/regionsData';
import { RightArrowIcon } from '@public/icon';
import Link from 'next/link';

export default function RegionalRecommendContainer() {
  return (
    <section className="flex w-full flex-col">
      <section className="flex w-full flex-col gap-20pxr px-24pxr py-20pxr">
        <h2 className="fonts-recommendTitle">지역별 코스 찾기</h2>
        <section className="grid grid-cols-3 gap-8pxr">
          {regionsData.map((region) => (
            <Link key={region.id} href={`home/list/${region.name}`} passHref>
              <div className="fonts-regionName border-gray_2 flex h-44pxr w-110pxr cursor-pointer items-center justify-center gap-7pxr rounded border text-gray-8">
                {region.name}
                {region.name === '전체' && <RightArrowIcon />} {/* '전체'일 경우 RightArrowIcon 추가 */}
              </div>
            </Link>
          ))}
        </section>
      </section>
    </section>
  );
}
