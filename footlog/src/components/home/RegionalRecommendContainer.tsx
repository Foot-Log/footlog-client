import React from 'react';
import { regionsData } from '@core/regionsData';
import { RightArrowIcon } from '@public/icon';

export default function RegionalRecommendContainer() {
  return (
    <section className="flex w-full flex-col">
      <section className="flex w-full flex-col gap-20pxr px-24pxr py-20pxr">
        <h2 className="fonts-recommendTitle">지역별 코스 찾기</h2>
        <section className="grid grid-cols-3 gap-8pxr">
          {regionsData.map((region) => (
            <div
              key={region.id}
              className="fonts-regionName flex h-44pxr w-110pxr items-center justify-center gap-7pxr rounded border border-gray_2">
              {region.name}
              {region.name === '전체' && <RightArrowIcon />} {/* '전체'일 경우 RightArrowIcon 추가 */}
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}
