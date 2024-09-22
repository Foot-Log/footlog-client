'use client';
import { RightArrowIcon } from '@public/icon';
import Link from 'next/link';
import { AreaCodeDtoDataTypes } from '@api/home/getRegions';

export interface RegionalRecommendContainerProps {
  regions: AreaCodeDtoDataTypes[];
}

export default function RegionalRecommendContainer(props: RegionalRecommendContainerProps) {
  const { regions } = props;

  return (
    <section className="flex w-full flex-col">
      <section className="flex w-full flex-col gap-20pxr px-24pxr py-20pxr">
        <h2 className="fonts-recommendTitle">지역별 코스 찾기</h2>
        <section className="grid grid-cols-3 gap-8pxr">
          {regions.map((region: AreaCodeDtoDataTypes) => (
            <Link key={region.areaCode} href={`home/list/big/${region.areaCode}`} passHref>
              <div className="fonts-regionName border-gray_2 flex h-44pxr w-110pxr cursor-pointer items-center justify-center gap-7pxr rounded border text-gray-8">
                {region.areaName}
                {region.areaName === '전체' && <RightArrowIcon />} {/* '전체'일 경우 RightArrowIcon 추가 */}
              </div>
            </Link>
          ))}
        </section>
      </section>
    </section>
  );
}
