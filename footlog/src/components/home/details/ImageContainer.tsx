import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface ImageContainerProps {
  title: string;
  imgSrc: StaticImageData;
}

export default function ImageContainer(props: ImageContainerProps) {
  const { title, imgSrc } = props;

  return (
    <figure className="h-214pxr relative flex w-full cursor-pointer overflow-hidden">
      <Image
        fill
        src={imgSrc}
        alt={title}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        priority
        className="object-cover"
      />
    </figure>
  );
}
