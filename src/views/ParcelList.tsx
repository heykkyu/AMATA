import styled from 'styled-components'
import Box from "@src/components/parcel/Box"
import Map from "@src/components/parcel/Map"
import { Link } from "react-router-dom";
import { parcle_list }from "@src/assets/data/DummyList"
import { useNavigate } from 'react-router';

const ParcelListWrap = styled.div`

`


const ParcelList = () => {
  const navigate = useNavigate();

  return (
    <>
      <ParcelListWrap>
        {parcle_list.map((data) => {
          return (
            <div 
              key={data.carrier.tracking_no}
              onClick={() => navigate(`/detail/${data.carrier.tracking_no}`)}
            >
              <Box 
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

      </ParcelListWrap>
    </>
  );
}

export default ParcelList;
 