import ParcelBox from "@src/components/parcel/ParcelBox"
import Map from "@src/components/parcel/Map"
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadTrackingList } from '@src/modules/trackinglist';
import { RootState } from '@src/modules';
import { getList } from "@src/api/list"
import { parcle_list }from "@src/utils/DummyList"


const ParcelList = () => {
  const parcelList = useSelector((state: RootState) => state.trackinglist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchApi = async () => {
    
    try {
      let saved_storage = JSON.parse(localStorage.getItem('parcel_list') || '[]');
      if (saved_storage.length === 0) {
        await getList();
        dispatch(loadTrackingList(parcle_list));
        localStorage.setItem("parcel_list", JSON.stringify(parcle_list))
      } else {
        dispatch(loadTrackingList(saved_storage));
      }
    } catch (e) {

    }
  }

  useEffect(() => {
    fetchApi();
  }, [])

  return (
    <>
      {/* TBA: Array 타입 선언 및 정리 */}
        {parcelList?.data.map((data: any) => {
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
                  data.delivery.logs?.length > 0 && data.delivery.status !== '배송완료'  && (
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
 