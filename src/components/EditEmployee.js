import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateEmp } from "../store/actions";
import { useHistory, useParams } from "react-router-dom";

export const EditEmployee = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [marital, setMarital] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

  const empData = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();

  const history = useHistory();

  const currentEmp = empData.find((current) => current.id === parseInt(id));

  useEffect(() => {
    if (currentEmp) {
      setFname(currentEmp.fname);
      setLname(currentEmp.lname);
      setGender(currentEmp.gender);
      setMarital(currentEmp.marital);
      setDob(currentEmp.dob);
      setEmail(currentEmp.email);
      setContact(currentEmp.contact);
      setAddress(currentEmp.address);
    }
  }, [currentEmp]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateEmp({
        id: parseInt(id),
        fname,
        lname,
        gender,
        marital,
        dob,
        email,
        contact,
        address,
      })
    );
    history.push("/");
  };

  return (
    <div className="container">
      {currentEmp ? (
        <form
          onSubmit={handleSubmit}
          className="border border-dark bg-light text-dark"
        >
          <div className="row mt-2">
            <h3>
              <strong>Employee Registration Form</strong>
            </h3>
            <div className="col-6 col-md-4 mt-2">
              <label>Employee name </label>
            </div>
            <div className="col-6 col-md-4 mt-2 ">
              <label htmlFor="fname">First name </label>
              <br />
              <input
                className="mb-2"
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
              <br />
              <label htmlFor="lname">Last name </label>
              <br />
              <input
                type="text"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
              <br />
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-4 ">
              <label htmlFor="gender">Gender</label>
            </div>

            <div className="col-6 col-md-4 mb-1">
              <div className="custom-control custom-radio custom-control-inline ">
                <input
                  type="radio"
                  id="customRadioInline1"
                  className="custom-control-input"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label
                  className="custom-control-label p-2"
                  htmlFor="customRadioInline1"
                >
                  Male
                </label>
                <input
                  type="radio"
                  id="customRadioInline2"
                  className="custom-control-input"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label
                  className="custom-control-label p-2"
                  htmlFor="customRadioInline2"
                >
                  Female
                </label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6 col-md-4 ">
              <label htmlFor="marital">Marital status</label>
            </div>
            <div className="col-6 col-md-4 ">
              <select
                id="marital"
                value={marital}
                onChange={(e) => setMarital(e.target.value)}
              >
                <option>--Please select--</option>
                <option value="Married">Married</option>
                <option value="Unmarried">Unmarried</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </select>
              <br />
              <br />
            </div>
          </div>

          <div className="row">
            <div className="col-6 col-md-4 ">
              <label htmlFor="dob">Date of birth</label>
            </div>
            <div className="col-6 col-md-4 ">
              <input
                type="cal"
                name="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <br />
              <br />
            </div>
          </div>

          <div className="row">
            <div className="col-6 col-md-4 ">
              <label htmlFor="email">Email </label>
            </div>
            <div className="col-6 col-md-4 ">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
            </div>
          </div>

          <div className="row">
            <div className="col-6 col-md-4 ">
              <label htmlFor="phone">Phone number </label>
            </div>
            <div className="col-6 col-md-4 ">
              <input
                type="tel"
                name="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <br />
              <br />
            </div>
          </div>

          <div className="row">
            <div className="col-6 col-md-4 ">
              <label htmlFor="address">Address</label>
            </div>
            <div className="col-6 col-md-4 ">
              <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <br />
              <br />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
          <br />
          <br />
        </form>
      ) : (
        <h1 className="text-center">No Employees Found</h1>
      )}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return { emp: state };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateEmp: (emp, id) => {
//       dispatch(updateEmp(emp, id));
//     },
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);

export default EditEmployee;
