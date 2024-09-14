import { StaticImageData } from 'next/image';

export interface CourseDetailsDataTypes {
  id: number;
  title: string;
  isSaved: boolean;
  imgSrc: StaticImageData;
  description: string;
  address: string;
  price: string;
  time: string;
  call: string;
  site: string;
  isComplete: boolean;
}

export interface RequestPathVariable {
  course_id: number;
}
