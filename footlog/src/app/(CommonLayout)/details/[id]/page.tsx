'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LogoIcon } from '@public/icon';
import { TeamTextIcon } from '@public/icon';

interface DetailsPageProps {
  params: { id: string };
}

export default function page(props: DetailsPageProps) {
  const { params } = props;

  return <main className="relative flex h-full w-full flex-col"></main>;
}
