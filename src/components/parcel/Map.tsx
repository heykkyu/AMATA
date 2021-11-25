import { useEffect } from 'react';
import styled from 'styled-components'
import MapMarker from "@src/assets/img/map-marker-purple.png";

const ParcelMapWrap = styled.div`
  #map {
    width: 100%;
    height: 150px;
    position: relative;
    margin-bottom: 20px;
  }
`

interface ParcelInfo {
  carrier?: {
    name?: string;
    tracking_no?: string;
    number?: any;
  },
  shop?: {
    name?: string;
    partner?: boolean;
  };
  product?: {
    name?: string;
    price?: string;
    currency?: string;
  };
  delivery?: {
    status: string;
    logs?: any;
  };
}

const ParcelMap = ({carrier, shop, product, delivery}: ParcelInfo) => {
  useEffect(() => {
    if (carrier?.tracking_no) {
      const kakao = (window as any).kakao;
  
      var container = document.getElementById(`map`);
      var options = {
        center: new kakao.maps.LatLng(37.51304564506471, 127.10292945077458),
        level: 5
      };
    
      let map = new kakao.maps.Map(container, options);

      var positions = [
        {
          latlng: new kakao.maps.LatLng(37.465418472431665, 126.44824353517765)
        },
        {
          latlng: new kakao.maps.LatLng(37.45741580532586, 126.71124286050576)
        },
        {
          latlng: new kakao.maps.LatLng(37.508712867154244, 127.06293037484994)
        },
        {
          latlng: new kakao.maps.LatLng(37.513534607203674, 127.10011368342303)
        }
      ];
      var linePath = [
        new kakao.maps.LatLng(37.465418472431665, 126.44824353517765),
        new kakao.maps.LatLng(37.45741580532586, 126.71124286050576),
        new kakao.maps.LatLng(37.508712867154244, 127.06293037484994),
        new kakao.maps.LatLng(37.513534607203674, 127.10011368342303),
    ];
    
    // 지도에 표시할 선을 생성합니다
    var polyline = new kakao.maps.Polyline({
        path: linePath, // 선을 구성하는 좌표배열 입니다
        strokeWeight: 10, // 선의 두께 입니다
        strokeColor: '#5a31f4', // 선의 색깔입니다
        strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'solid' // 선의 스타일입니다
    });
    
    // 지도에 선을 표시합니다 
    polyline.setMap(map);  
    
    
      for (var i = 0; i < positions.length; i ++) {
          
          // 마커 이미지의 이미지 크기 입니다
          var imageSize = new kakao.maps.Size(40, 38); 
          
          // 마커 이미지를 생성합니다    
          var markerImage = new kakao.maps.MarkerImage(MapMarker, imageSize); 
          
          // 마커를 생성합니다
          var marker = new kakao.maps.Marker({
              map: map, // 마커를 표시할 지도
              position: positions[i].latlng, // 마커를 표시할 위치
              image : markerImage // 마커 이미지 
          });
      }
    }
  }, [carrier?.tracking_no])

  return (
    <>
      <ParcelMapWrap>
        <div id="map"></div>
      </ParcelMapWrap>
    </>
  );
}

export default ParcelMap;
 