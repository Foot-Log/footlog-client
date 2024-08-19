import { LocationIcon, PriceIcon, ClockIcon, CallIcon, SiteIcon } from '@public/icon';

interface InfoContainerProps {
  description: string;
  location: string;
  price: string;
  time: string;
  call: string;
  site: string;
}

export default function InfoContainer(props: InfoContainerProps) {
  const { description, location, price, time, call, site } = props;

  const infoItems = [
    { icon: <LocationIcon />, text: location },
    { icon: <PriceIcon />, text: price },
    { icon: <ClockIcon />, text: time },
    { icon: <CallIcon />, text: call },
    { icon: <SiteIcon />, text: site },
  ];

  return (
    <section className="pt-20pxr px-24pxr flex w-full">
      <p className="fonts-detailDescription line-clamp">{description}</p>
      <section className="mt-20pxr mb-25pxr gap-12pxr flex flex-col">
        {infoItems.map((item, index) => (
          <section key={index} className="gap-12pxr flex">
            {item.icon}
            <p className="fonts-detail">{item.text}</p>
          </section>
        ))}
      </section>
    </section>
  );
}
