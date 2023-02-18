import { ADD_EMP, DELETE_EMP, UPDATE_EMP } from "../constants/action-types";

export const addEmp = (emp) => ({ type: ADD_EMP, payload: emp });
export const deleteEmp = (id) => ({ type: DELETE_EMP, payload: id });
export const updateEmp = (emp, id) => ({
  type: UPDATE_EMP,
  payload: { emp, id },
});
