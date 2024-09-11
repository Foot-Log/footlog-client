import Image from 'next/image';

interface ImageContainerProps {
  title: string;
  imgSrc: string;
}

export default function ImageContainer(props: ImageContainerProps) {
  const { title, imgSrc } = props;

  return (
    <figure className="relative flex h-214pxr w-full cursor-pointer overflow-hidden">
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
