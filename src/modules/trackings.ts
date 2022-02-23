import axios from "axios";

// 액션 타입 선언
const ADD_TRACKING = 'parcel/ADD_TRACKING' as const;
const REMOVE_TRACKING = 'parcel/REMOVE_TRACKING' as const;

// 액션 생성 함수
export const addTracking = (tracking: string) => ({
  type: ADD_TRACKING,
  payload: 
    tracking
});

export const removeTracking = (tracking: string) => ({
  type: REMOVE_TRACKING,
  payload: tracking
});

type TrackingAction =
  | ReturnType<typeof addTracking>
  | ReturnType<typeof removeTracking>

// 항목 데이터 타입 정의
export type Trackings = {
  tracking: string;
  status: number;
};

export type TrackingList = [];

export type TrackingState = Trackings[];

// 초기상태
const initialState: TrackingState = [];

// 리듀서
function trackings(
  state: TrackingState = initialState,
  action: TrackingAction
): TrackingState {
  switch (action.type) {
    case ADD_TRACKING:
      console.log(action.payload)
      putNewParcel();
      return state;
  
    case REMOVE_TRACKING:
      // payload 가 number 인 것이 유추됩니다.
      return state.filter(parcel => parcel.tracking !== action.payload);
    default:
      return state;
  }
}

const getParceList = async() => {
  const TrackingList = await axios.get('https://jsonplaceholder.typicode.com/posts')
  console.log("TrackingList", TrackingList);
  return {
    TrackingList
  }
}

const putNewParcel = async() => {
  const TrackingsDummy = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
  const Trackings = {
    tracking: '12314124124',
    status: 0
  }
  console.log("🔹putNewParcel", Trackings);
  return {
    Trackings
  }
}


export default trackings;