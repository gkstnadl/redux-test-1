import { ADD, SUB } from "./actions";

// 초기 상태값
const initialState = {
  value: 0,
};


// 리듀서
const calculator = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state, value: state.value + action.payload
      };
    case SUB:
      return {
        ...state, value: state.value - action.payload
      }
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default calculator;
