import { parcle_list }from "@src/utils/DummyList"
import axios from "axios";

const LOAD_TRACKING_LIST = 'parcel/LOAD_TRACKING_LIST' as const;
const ADD_TRACKING = 'parcel/ADD_TRACKING' as const;

export const loadTrackingList = () => ({
  type: LOAD_TRACKING_LIST,
});

export const addTracking = (carrier: string, tracking_no: string) => ({
  type: ADD_TRACKING,
  payload: {
    carrier,
    tracking_no,
  }
});

type ListAction =
  | ReturnType<typeof loadTrackingList>
  | ReturnType<typeof addTracking>

export type List = {
  carrier: {
    name: string,
    tracking_no: string,
  },
  shop: {},
  product: {},
  delivery: {
    status: string,
    logs: string[]
  }
};
type ListState = List[];

const initialState: ListState = [];

export default function trackinglist(state: ListState = initialState, action: ListAction): ListState {
  switch (action.type) {
    case LOAD_TRACKING_LIST:
      const list = localStorage.getItem("parcel_list") || "";
      if (list && list.length > 0) {
        return JSON.parse(list);
      } else {
        let result:ListState = [];
        getParcelList().then(res => result = res);
        return result;
      }

    case ADD_TRACKING: 
      const newObj = {
        carrier: {
          name: action.payload.carrier || "테스트",
          tracking_no: action.payload.tracking_no
        },
        shop: {},
        product: {},
        delivery: {
          status: "배송 접수 전",
          logs: []
        }
      }

      const newState = [...state];
      newState.unshift(newObj);
      localStorage.setItem("parcel_list", JSON.stringify(newState))
      console.log("parcel_list", localStorage.getItem("parcel_list"))
      return newState;
    default:
      return state;
  }
}


const getParcelList = async () => {
  try {
    const res = await axios.get<any[]>('https://jsonplaceholder.typicode.com/posts/1');
    localStorage.setItem("parcel_list", JSON.stringify(parcle_list))
    return res.data;
  } catch (e) {
    alert(e)
    return [];
  }
}
