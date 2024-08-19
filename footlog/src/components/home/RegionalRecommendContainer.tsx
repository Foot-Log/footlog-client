import React from 'react';
import { regionsData } from '@core/regionsData';

export default function RegionalRecommendContainer() {
  return (
    <section className="flex w-full flex-col">
      <section className="px-24pxr gap-20pxr py-20pxr flex w-full flex-col">
        <h2 className="fonts-recommendTitle">지역별 코스 찾기</h2>
        <section className="gap-8pxr grid grid-cols-3">
          {regionsData.map((region) => (
            <div
              key={region.id}
              className="fonts-regionName h-44pxr w-110pxr flex items-center justify-center rounded border border-gray_2">
              {region.name}
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}
