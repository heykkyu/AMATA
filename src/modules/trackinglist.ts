
const LOAD_TRACKING_LIST = 'parcel/LOAD_TRACKING_LIST' as const;
const ADD_TRACKING = 'parcel/ADD_TRACKING' as const;

export const loadTrackingList = (data: object[]) => ({
  type: LOAD_TRACKING_LIST,
  payload: {
    data
  }
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

type ListState = {
  // carrier: {
  //   name: string,
  //   tracking_no: string,
  // },
  // shop: {},
  // product: {},
  // delivery: {
  //   status: string,
  //   logs: string[]
  // }
  loading: boolean,
  error: boolean,
  data: Array<object>
};
// type  = List[];

const initialState: ListState = {
  loading: false,
  error: false,
  data: []
};

export default function trackinglist(state: ListState = initialState, action: ListAction): ListState {
  switch (action.type) {
    case LOAD_TRACKING_LIST:

      return {
        ...state,
        loading: false,
        data: action.payload.data || []
      }
    case ADD_TRACKING: 
      const newObj = {
        carrier: {
          name: action.payload.carrier || "Box",
          tracking_no: action.payload.tracking_no
        },
        shop: {},
        product: {},
        delivery: {
          status: "배송 접수 전",
          logs: []
        }
      }

      const newState = [...state.data];
      newState.unshift(newObj);
      localStorage.setItem("parcel_list", JSON.stringify(newState))
      return {
        ...state,
        data: newState
      };
      
    default:
      return state;
  }
}


const getParcelList = async () => {
  // try {
  //   const res = await getList();
  //   alert()
  //   // const res = await axios.get<any[]>('https://jsonplaceholder.typicode.com/posts/1');
  //   localStorage.setItem("parcel_list", JSON.stringify(parcle_list))
  //   return res.data;
  // } catch (e) {
  //   alert(e)
  //   return [];
  // }
}
