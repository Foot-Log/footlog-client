import { useState } from 'react';
import { LocationIcon, PriceIcon, ClockIcon, CallIcon, SiteIcon } from '@public/icon';

interface InfoContainerProps {
  description: string;
  address: string;
  price: string;
  time: string;
  call: string;
  site: string;
}

export default function InfoContainer(props: InfoContainerProps) {
  const { description, address, price, time, call, site } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const infoItems = [
    { icon: <LocationIcon />, text: address },
    { icon: <PriceIcon />, text: price },
    { icon: <ClockIcon />, text: time },
    { icon: <CallIcon />, text: call },
    { icon: <SiteIcon />, text: site },
  ];

  const toggleDescription = () => {
    setIsExpanded(!isExpanded); // 펼침 상태 토글
  };

  return (
    <section className="flex w-full flex-col px-24pxr pt-20pxr">
      <p className={`fonts-detailDescription text-gray-8 ${!isExpanded ? 'line-clamp-5' : ''}`}>
        {isExpanded ? description : `${description.slice(0, 173)}`}
        {!isExpanded && (
          <span className="fonts-detailDescription cursor-pointer text-gray-4" onClick={toggleDescription}>
            {' ...더보기'}
          </span>
        )}

        {isExpanded && (
          <span className="fonts-detailDescription cursor-pointer text-gray-4" onClick={toggleDescription}>
            {' ...접기'}
          </span>
        )}
      </p>
      <section className="mb-25pxr mt-20pxr flex flex-col gap-12pxr">
        {infoItems.map((item, index) => (
          <section key={index} className="flex gap-12pxr">
            {item.icon}
            <p className="fonts-detail">{item.text}</p>
          </section>
        ))}
      </section>
    </section>
  );
}
