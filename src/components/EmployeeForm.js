import React from "react";
import { connect } from "react-redux";
import { deleteEmp } from "../store/actions";
import { Link } from "react-router-dom";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmployeeForm = ({ emp, deleteEmp }) => {
  // console.log("props", props.emp);

  return (
    <div className="container">
      <div className="mt-2">
        <h1>Employee Details List</h1>

        <div className="mt-2">
          <table className="table table-responsive table-striped  d-table-cell align-middle">
            <thead className="table-dark">
              <tr>
                <th scope="col">Emp id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Marital Status</th>
                <th scope="col">Date of Birth</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
                <th scope="col">Address</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {emp.length > 0 ? (
                emp.map((el, id) => {
                  return (
                    <tr key={id}>
                      <td>{el.id}</td>
                      <td>{el.fname}</td>
                      <td>{el.lname}</td>
                      <td>{el.gender}</td>
                      <td>{el.marital}</td>
                      <td>{el.dob}</td>
                      <td>{el.email}</td>
                      <td>{el.contact}</td>
                      <td>{el.address}</td>
                      <td>
                        <div>
                          <Link to={`/edit/${el.id}`}>
                            <FontAwesomeIcon icon={faEdit} />
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div onClick={() => deleteEmp(el.id)}>
                          <FontAwesomeIcon icon={faTrash} />
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { emp: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEmp: (emp) => dispatch(deleteEmp(emp)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);
// export default List;
