import { useEffect } from 'react';
import styled, { css } from 'styled-components'
import MapMarker from "@src/assets/img/map-marker-purple.png";

const ParcelMapWrap = styled.div<Props>`
  ${props =>
    props.from && props.from === 'list' &&
    css`
      margin-top: -10px;
      width: calc(100% - 20px);
      margin-left: 10px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: -20px;
        background-color: white;
        height: 20px;
        width: 100%;
        left: 0;
        z-index: 0;
      }
    `}
  };
  .kakao-map {
    width: 100%;
    height: 200px;
    margin-bottom: 20px;
  }

`

interface Props {
  from: String,
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

const ParcelMap = ({carrier, shop, product, delivery, from}: Props) => {
  useEffect(() => {
    if (carrier?.tracking_no) {
      const kakao = (window as any).kakao;
  
      var container = document.getElementById(`map-${carrier?.tracking_no}`);
      var options = {
        center: new kakao.maps.LatLng(37.51304564506471, 127.10292945077458),
        level: 5
      };
    
      let map = new kakao.maps.Map(container, options);
      if (from === 'list') {
        map.setZoomable(false);  
      }
      map.relayout();

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
    
      var polyline = new kakao.maps.Polyline({
        path: linePath, // 선을 구성하는 좌표배열 입니다
        strokeWeight: 10, // 선의 두께 입니다
        strokeColor: '#5a31f4', // 선의 색깔입니다
        strokeOpacity: 0.9, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'solid' // 선의 스타일입니다
      });
    
      polyline.setMap(map);  
      for (var i = 0; i < positions.length; i ++) {
        var imageSize = new kakao.maps.Size(40, 38); 
        var markerImage = new kakao.maps.MarkerImage(MapMarker, imageSize); 
        var marker = new kakao.maps.Marker({
            map: map, 
            position: positions[i].latlng,
            image : markerImage 
        });
      }
    }
  }, [carrier?.tracking_no])

  return (
    <>
      <ParcelMapWrap from={from}>
        <div className="kakao-map" id={`map-${carrier?.tracking_no}`}></div>
      </ParcelMapWrap>
    </>
  );
}

export default ParcelMap;
 