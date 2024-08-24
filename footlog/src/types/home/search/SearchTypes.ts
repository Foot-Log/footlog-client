import { StaticImageData } from 'next/image';

export interface LocationDataTypes {
  id: number;
  name: string;
  location: string;
  imgSrc: StaticImageData;
}
