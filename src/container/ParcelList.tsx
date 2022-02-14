import styled from 'styled-components'
import ParcelBox from "@src/components/parcel/ParcelBox"
import Map from "@src/components/parcel/Map"
import { Link } from "react-router-dom";
import { parcle_list }from "@src/assets/data/DummyList"
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const ParcelList = () => {
  const parcelList = useSelector
  const navigate = useNavigate();

  return (
    <>
        {parcle_list.map((data) => {
          return (
            <div 
              key={data.carrier.tracking_no}
              onClick={() => navigate(`/detail/${data.carrier.tracking_no}`)}
            >
              <ParcelBox 
                carrier={data.carrier}
                shop={data.shop}
                product={data.product}
                delivery={data.delivery}
              />
              {
                data.delivery.status !== "배송완료" && (
                  <Map 
                    from="list"
                    carrier={data.carrier}
                    delivery={data.delivery}
                  />
                )
              }
            </div>
          )
        })}
    </>
  );
}

export default ParcelList;
 