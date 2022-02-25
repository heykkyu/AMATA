import ParcelBox from "@src/components/parcel/ParcelBox"
import Map from "@src/components/parcel/Map"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadTrackingList } from '@src/modules/trackinglist';
import { RootState } from '../modules';

const ParcelList = () => {
  const dispatch = useDispatch();
  const parcelList = useSelector((state: RootState) => state.trackinglist);
  console.log()
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadTrackingList());
  }, [])

  return (
    <>
        {parcelList?.map((data) => {
          return (
            <div key={data.carrier?.tracking_no}>
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
            </div>
          )
        })}
    </>
  );
}

export default ParcelList;
 