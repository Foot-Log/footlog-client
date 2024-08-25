import React, { useEffect } from 'react';
import 'react-kakao-maps-sdk';
import { LogFlag } from '@public/icon';

const KakaoMap = ({ locations }: { locations: string[] }) => {
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

        locations.forEach((location) => {
          geocoder.addressSearch(location, function (result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
              const latitude = Number(result[0].y);
              const longitude = Number(result[0].x);
              const coords = new window.kakao.maps.LatLng(latitude, longitude);

              // 마커 이미지 생성
              const imageSrc = '/icon/log/logFlag.svg'; // LogFlag 컴포넌트를 사용하여 이미지 경로 설정
              const imageSize = new window.kakao.maps.Size(36, 42); // 이미지 크기 설정
              const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

              // 마커 생성 및 지도에 추가
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
                image: markerImage,
              });

              // 인포윈도우 생성
              const infowindow = new window.kakao.maps.InfoWindow({
                content: `<div style="width:150px;text-align:center;padding:6px 0;">${location}</div>`,
              });

              // 마커에 클릭 이벤트를 등록하여 인포윈도우를 토글
              let infowindowVisible = false; // 인포윈도우의 초기 상태는 숨김

              window.kakao.maps.event.addListener(marker, 'click', function () {
                if (infowindowVisible) {
                  infowindow.close();
                } else {
                  infowindow.open(map, marker);
                }
                infowindowVisible = !infowindowVisible; // 토글 상태 변경
              });
            }
          });
        });
      });
    }
  }, [locations]);

  return (
    // id가 'map'인 div 출력, width와 heigth를 설정해줘야 정상 출력됨

    <div id="map" className="mt-68pxr h-680pxr w-full" />
  );
};

export default KakaoMap;
