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

  return (
    <section className="px-24pxrflex w-full">
      <p className="fonts-detailDescription"></p>
      <section className="gap-12pxr flex">
        <LocationIcon />
        <p className="fonts-detail"></p>
      </section>
      <section className="gap-12pxr flex">
        <PriceIcon />
        <p className="fonts-detail"></p>
      </section>
      <section className="gap-12pxr flex">
        <ClockIcon />
        <p className="fonts-detail"></p>
      </section>
      <section className="gap-12pxr flex">
        <CallIcon />
        <p className="fonts-detail"></p>
      </section>
      <section className="gap-12pxr flex">
        <SiteIcon />
        <p className="fonts-detail"></p>
      </section>
    </section>
  );
}
