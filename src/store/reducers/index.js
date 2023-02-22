import { ADD_EMP, DELETE_EMP, UPDATE_EMP } from "../constants/action-types";

const initialState = [
  {
    id: 1,
    fname: "ABC",
    lname: "XYZ",
    gender: "M",
    marital: "Married",
    dob: "01-12-1989",
    email: "xyz@gmail.com",
    contact: "123456789",
    address: "Mumbai",
  },
];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMP:
      state = [...state, action.payload];
      return state;
    case DELETE_EMP:
      const deleteEmp = state.filter((emp) =>
        emp.id === action.payload ? null : emp
      );
      state = deleteEmp;
      return state;
    case UPDATE_EMP:
      const updateEmp = state.filter((item) =>
        item.id === action.payload.emp.id
          ? Object.assign(item, action.payload.emp)
          : item
      );
      state = updateEmp;
      return state;
    default:
      return state;
  }
};

export default rootReducer;
