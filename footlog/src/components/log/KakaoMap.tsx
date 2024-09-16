import React, { useEffect, useState } from 'react';
import 'react-kakao-maps-sdk';
import MarkerModal from './MarkerModal';
import useGetCompletedList from '@hooks/log/useGetCompletedList';

const KakaoMap = () => {
  const [selectLocation, setSelectLocation] = useState<string | null>(null);

  const { data: locations } = useGetCompletedList();
  console.log('locations', locations);

  const handleSubmit = (text: String, images: (string | File)[]) => {
    console.log('text', text);
    console.log('images', images);
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
                setSelectLocation(location.address);
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
      {selectLocation && (
        <MarkerModal
          location={selectLocation}
          onClose={() => setSelectLocation(null)}
          onSubmit={handleSubmit}
          initialText="대구 풋!로그~"
          initialImages={['https://cdn.crowdpic.net/detail-thumb/thumb_d_AE044C445F1F75281B4E7F996004555A.jpg']}
        />
      )}
    </div>
  );
};

export default KakaoMap;
