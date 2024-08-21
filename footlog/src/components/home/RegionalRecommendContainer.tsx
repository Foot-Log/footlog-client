import React from 'react';
import { regionsData } from '@core/regionsData';

export default function RegionalRecommendContainer() {
  return (
    <section className="flex w-full flex-col">
      <section className="flex w-full flex-col gap-20pxr px-24pxr py-20pxr">
        <h2 className="fonts-recommendTitle">지역별 코스 찾기</h2>
        <section className="grid grid-cols-3 gap-8pxr">
          {regionsData.map((region) => (
            <div
              key={region.id}
              className="fonts-regionName flex h-44pxr w-110pxr items-center justify-center rounded border border-gray-2">
              {region.name}
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}
