import React from 'react';
import { regionsData } from '@core/regionsData';

export default function RegionalRecommendContainer() {
  return (
    <section className="flex w-full flex-col">
      <section className="flex w-full flex-col gap-5 px-6 py-5">
        <h2 className="fonts-recommendTitle">지역별 코스 찾기</h2>
        <section className="grid grid-cols-3 gap-2">
          {regionsData.map((region) => (
            <div
              key={region.id}
              className="border-gray_2 fonts-regionName flex h-11 w-[110px] items-center justify-center rounded border">
              {region.name}
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}
