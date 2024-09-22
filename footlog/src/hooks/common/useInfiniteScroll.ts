import { useEffect, useRef, useState } from 'react';

export const useInfiniteScroll = (dataLength: number, loadMore: () => void) => {
  const [visibleCount, setVisibleCount] = useState(10);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    const loadMoreHandler = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((prevCount) => Math.min(prevCount + 10, dataLength));
        loadMore(); // 데이터 로드 함수 호출
      }
    };

    observer.current = new IntersectionObserver(loadMoreHandler, {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 1.0, // 100% 가시화
    });

    const target = document.querySelector('#load-more');
    if (target) {
      observer.current.observe(target);
    }

    return () => {
      if (observer.current && target) {
        observer.current.unobserve(target);
      }
    };
  }, [dataLength, loadMore]);

  return { visibleCount };
};
