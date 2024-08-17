import React from 'react';
import { regionsData } from '@core/regionsData';

export default function RegionalRecommendContainer() {
  return (
    <section className="flex w-full flex-col">
      <section className="flex h-72 w-full flex-col gap-5 py-5 pl-6">
        <h2 className="fonts-recommendTitle">지역별 코스 찾기</h2>
        <section className="grid grid-cols-3 gap-4">
          {regionsData.map((region) => (
            <div key={region.id} className="rounded border p-4 shadow">
              {region.name}
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}
