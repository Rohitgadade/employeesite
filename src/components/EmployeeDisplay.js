import React from "react";

export const EmployeeDisplay = (props) => {
  console.log("props search", props);

  return (
    <div className="container">
      <div className="card  mx-auto text-center w-75 mt-5 border border-dark bg-light">
        <div className="card-body ">
          <div className="row  justify-content-md-center">
            <div className="col-6 col-md-4 mt-2">
              <label>Employee First Name </label>
            </div>
            <div className="col-6 col-md-4 mt-2">{props.data.fname}</div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-6 col-md-4 mt-2">
              <label>Employee Last Name </label>
            </div>
            <div className="col-6 col-md-4 mt-2">{props.data.lname}</div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-6 col-md-4 mt-2">
              <label>Employee Gender</label>
            </div>
            <div className="col-6 col-md-4 mt-2">{props.data.gender}</div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-6 col-md-4 mt-2">
              <label>Employee Marital Status</label>
            </div>
            <div className="col-6 col-md-4 mt-2">{props.data.marital}</div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-6 col-md-4 mt-2">

              <label>Employee Date of Birth</label>
            </div>
            <div className="col-6 col-md-4 mt-2">{props.data.dob}</div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-6 col-md-4 mt-2">
              <label>Employee Email Id</label>
            </div>
            <div className="col-6 col-md-4 mt-2">{props.data.email}</div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-6 col-md-4 mt-2">
              <label>Employee Phone Number</label>
            </div>
            <div className="col-6 col-md-4 mt-2">{props.data.contact}</div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-6 col-md-4 mt-2">
              <label>Employee Address</label>
            </div>
            <div className="col-6 col-md-4 mt-2"> {props.data.address}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDisplay;
