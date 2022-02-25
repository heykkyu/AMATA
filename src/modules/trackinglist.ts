import { parcle_list }from "@src/utils/DummyList"
import axios from "axios";

const LOAD_TRACKING_LIST = 'parcel/LOAD_TRACKING_LIST' as const;

export const loadTrackingList = () => ({
  type: LOAD_TRACKING_LIST,
});

type ListAction =
  | ReturnType<typeof loadTrackingList>

export type List = {
  carrier: {
    name: string,
    tracking_no: string,
  },
  shop: {},
  product: {},
  delivery: {
    status: string
  }
};
type ListState = List[];

const initialState: ListState = [];

export default function trackinglist(state: ListState = initialState, action: ListAction): ListState {
  switch (action.type) {
    case LOAD_TRACKING_LIST:
      getParcelList();
      return parcle_list;
   
    default:
      return state;
  }
}

const getParcelList = async() => {
  await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      alert(err);
      return;
    })
}

