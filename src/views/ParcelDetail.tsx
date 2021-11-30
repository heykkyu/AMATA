import styled from 'styled-components'
import Box from "@src/components/parcel/Box"
import Map from "@src/components/parcel/Map"
import { parcle_list }from "@src/assets/data/DummyList"

const ParcelDetailWrap = styled.div`

`

const ParcelDetail = () => {
  return (
    <>
      <ParcelDetailWrap>
        {parcle_list.map((data, i) => {
          return (
            i < 1 && (
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
                      from="detail"
                      carrier={data.carrier}
                      delivery={data.delivery}
                    />
                  )
                }
              </div>
            )
          )
        })}

      </ParcelDetailWrap>
    </>
  );
}

export default ParcelDetail;
 