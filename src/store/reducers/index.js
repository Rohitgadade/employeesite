import { ADD_EMP, DELETE_EMP, UPDATE_EMP } from "../constants/action-types";

const initialState = [
  {
    id: 1,
    fname: "Rohit",
    lname: "Gadade",
    gender: "Male",
    marital: "Married",
    dob: "09-02-1997",
    email: "rohitgadade1997@gmail.com",
    contact: "7020019544",
    address: "Solapur",
  },
  {
    id: 2,
    fname: "Sanjay",
    lname: "Sonage",
    gender: "Male",
    marital: "Married",
    dob: "10-01-1996",
    email: "sanjaysonage@gmail.com",
    contact: "123456789",
    address: "Solapur",
  },
  {
    id: 3,
    fname: "Rinku",
    lname: "banne",
    gender: "Female",
    marital: "Unmarried",
    dob: "10-01-2003",
    email: "rinkubanne@gmail.com",
    contact: "123456789",
    address: "Solapur",
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
