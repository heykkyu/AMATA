import styled from 'styled-components'
import ParcelBox from "@src/components/parcel/ParcelBox"
import Map from "@src/components/parcel/Map"
import { parcle_list }from "@src/assets/data/DummyList"
import { useParams } from 'react-router'

const ParcelDetail = () => {
  let { tracking_no } = useParams();

  return (
    <>
      {parcle_list.map((data, i) => {
        return (
          i < 1 && (
            <div key={data.carrier.tracking_no}>
              <ParcelBox 
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
    </>
  );
}

export default ParcelDetail;
 