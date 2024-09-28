import { useState } from 'react';
import { LocationIcon, PriceIcon, ClockIcon, CallIcon, SiteIcon } from '@public/icon';

interface InfoContainerProps {
  summary: string;
  address: string;
  charge: string;
  time: string;
  tel: string;
  homepage: string;
}

interface InfoContainerProps {
  summary: string;
  address: string;
  charge: string;
  time: string;
  tel: string;
  homepage: string;
}

export default function InfoContainer(props: InfoContainerProps) {
  const { summary, address, charge, time, tel, homepage } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const infoItems = [
    { icon: <LocationIcon />, text: address },
    { icon: <PriceIcon />, text: charge },
    { icon: <ClockIcon />, text: time },
    { icon: <CallIcon />, text: tel },
    { icon: <SiteIcon />, text: homepage },
  ];

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  // 150자를 기준으로 표시할 내용을 결정
  const isDescriptionLong = summary.length > 150;
  const displayedSummary = isExpanded ? summary : summary.slice(0, 150);

  return (
    <section className="flex w-full flex-col px-24pxr pt-20pxr">
      <p className={`fonts-detailDescription text-gray-8 ${!isExpanded ? 'line-clamp-5' : ''}`}>
        {displayedSummary}
        {isDescriptionLong && !isExpanded && (
          <span className="fonts-detailDescription cursor-pointer text-gray-4" onClick={toggleDescription}>
            {' ...더보기'}
          </span>
        )}
        {isExpanded && (
          <span className="fonts-detailDescription cursor-pointer text-gray-4" onClick={toggleDescription}>
            {' 간단히 보기'}
          </span>
        )}
      </p>
      <section className="mb-25pxr mt-20pxr flex flex-col gap-12pxr">
        {infoItems.map((item, index) => (
          <section key={index} className="flex items-center gap-12pxr">
            <div className="flex">{item.icon}</div>
            <p className="fonts-detail">{item.text}</p>
          </section>
        ))}
      </section>
    </section>
  );
}
