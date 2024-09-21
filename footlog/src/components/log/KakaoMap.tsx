import React, { useEffect, useState } from 'react';
import 'react-kakao-maps-sdk';
import MarkerModal from './MarkerModal';
import useGetCompletedList from '@hooks/log/useGetCompletedList';
import useGetLogDetails from '@hooks/log/useGetLogDetails';
import useUpdateLog from '@hooks/log/useUpdateLog';

const KakaoMap = () => {
  const [selectLocation, setSelectLocation] = useState<string | null>(null);

  const { data: locations } = useGetCompletedList();
  console.log('locations', locations);

  const [logId, setLogId] = useState<number | null>(null);
  console.log('lodId', logId);

  // logId가 있을 때만 useGetLogDetails를 호출
  const { data: details, refetch: refetchLogDetails } = useGetLogDetails(logId ?? 0, {
    enabled: !!logId, // logId가 있을 때만 API를 호출하도록 설정
  });
  console.log('details', details?.data);

  const updateLogMutation = useUpdateLog(logId ?? 0);

  const handleSubmit = (text: string, images: (string | File)[]) => {
    const logContent = text || details?.data?.logContent || ''; // 기존 로그 내용을 유지
    const existingUrls = images.filter((image) => typeof image === 'string') as string[]; // 기존 이미지 URL
    const newImages = images.filter((image) => image instanceof File) as File[]; // 새로 업로드한 이미지 파일

    const updateData = {
      logContent,
      existingUrls,
      newImages,
    };

    // useUpdateLog의 mutation 함수 호출
    updateLogMutation.mutate(updateData, {
      onSuccess: (response) => {
        console.log('Log updated successfully', response);
        refetchLogDetails();
      },
      onError: (error) => {
        console.error('Error updating log:', error);
      },
    });
  };

  useEffect(() => {
    if (window.kakao) {
      window.kakao.maps.load(() => {
        // id가 'map'인 요소에 지도를 생성
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(36.4156641569371, 127.9394202592609),
          level: 12,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        // 주소-좌표 변환 객체 생성
        const geocoder = new window.kakao.maps.services.Geocoder();

        locations?.data.forEach((location: any) => {
          geocoder.addressSearch(location.address, function (result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
              const latitude = Number(result[0].y);
              const longitude = Number(result[0].x);
              const coords = new window.kakao.maps.LatLng(latitude, longitude);

              // 마커 이미지 생성
              const imageSrc = '/icon/log/logFlag.png';
              const imageSize = new window.kakao.maps.Size(36, 42); // 이미지 크기 설정
              const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

              // 마커 생성 및 지도에 추가
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
                image: markerImage,
              });

              const customOverlay = new window.kakao.maps.CustomOverlay({
                position: coords,
                content: `<div class="fonts-logLocations">${location.name}</div>`,
                yAnchor: 1, // 위치 조정 (마커 위에 텍스트를 표시하도록)
              });

              customOverlay.setMap(map);

              window.kakao.maps.event.addListener(marker, 'click', function () {
                setSelectLocation(location.name);
                setLogId(location.logId);
              });
            }
          });
        });
      });
    }
  }, [locations]);

  return (
    <div>
      <div id="map" className="mt-68pxr h-688pxr w-full" />
      {selectLocation && logId && details?.data && (
        <MarkerModal
          location={selectLocation}
          onClose={() => setSelectLocation(null)}
          onSubmit={handleSubmit}
          initialText={details?.data.logContent || ''}
          initialImages={details?.data.photos || []}
        />
      )}
    </div>
  );
};

export default KakaoMap;
