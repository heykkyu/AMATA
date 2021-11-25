import styled from 'styled-components'
import Box from "@src/components/parcel/Box"
import Map from "@src/components/parcel/Map"
import { parcle_list }from "@src/assets/data/DummyList"

const ParcelListWrap = styled.div`

`


const ParcelList = () => {
  return (
    <>
      <ParcelListWrap>
        {parcle_list.map((data) => {
          return (
            <div key={data.carrier.tracking_no}>
              <Box 
                carrier={data.carrier}
                shop={data.shop}
                product={data.product}
                delivery={data.delivery}
              />
              {
                data.delivery.status !== "배송완료" && (
                  <Map 
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
 