import React from "react";
import { addEmp } from "../store/actions";
import { useHistory } from "react-router-dom";
import "../styles/home.css";
import { connect } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

const Home = ({ emp, addEmp }) => {
  // const [employee,setEmployeeData]=useState({fname:' ', lname:' ',gender:' ',maritals:' '});
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  // const [gender, setGender] = useState("");
  // const [marital, setMarital] = useState("");
  // const [dob, setDob] = useState("");
  // const [email, setEmail] = useState("");
  // const [contact, setContact] = useState("");
  // const [address, setAddress] = useState("");

  const history = useHistory();

  // const formadata = (e) => {
  //   e.preventDefault();
  //   addEmp({
  //     id: emp.length > 0 ? emp[emp.length - 1].id + 1 : 0,
  //     fname: fname,
  //     lname: lname,
  //     gender: gender,
  //     marital: marital,
  //     dob: dob,
  //     email: email,
  //     contact: contact,
  //     address: address,
  //   });
  //   history.push("/display");
  // };

  const validationSchema = Yup.object({
    fname: Yup.string().required("Required"),
    lname: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    marital: Yup.string().required("Required"),
    dob: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    contact: Yup.string().required("Required"),
    address: Yup.string().required("Required")
  });

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      gender: "",
      marital: "",
      dob: "",
      email: "",
      contact: "",
      address: "",
    },
    validationSchema,
    onSubmit(value) {
      console.log("values ---->", value);
      addEmp({
        id: emp.length > 0 ? emp[emp.length - 1].id + 1 : 0,
        fname: values.fname,
        lname: values.lname,
        gender: values.gender,
        marital: values.marital,
        dob: values.dob,
        email: values.email,
        contact: values.contact,
        address: values.address,
      })
      alert("Succefully record inserted")
    },
  });

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="border border-dark bg-light text-dark"
      >
        <div className="row">
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
              name="fname"
              value={values.fname}
              onChange={handleChange}
            // onChange={(e) => setFname(e.target.value)}
            />
            {errors.fname && touched.fname && errors.fname}
            <br />
            <label htmlFor="lname">Last name </label>
            <br />
            <input
              type="text"
              name="lname"
              value={values.lname}
              onChange={handleChange}
            // onChange={(e) => setLname(e.target.value)}
            />
            {/* {errors.lname ? errors.lname : null} */}
            {errors.lname && touched.lname && errors.lname}
            <br />
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-4 ">
            <label htmlFor="gender">Gender</label>
          </div>
          {errors.gender && touched.gender && errors.gender}
          <div className="col-6 col-md-4 mb-1">
            <div className="custom-control custom-radio custom-control-inline ">
              <input
                type="radio"
                id="customRadioInline1"
                name="gender"
                className="custom-control-input"
                // value={values.gender.male}
                value="Male"
                // onChange={(e) => setGender(e.target.value)}
                onChange={handleChange}
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
                name="gender"
                className="custom-control-input"
                // value={values.gender.female}
                value="Female"
                // onChange={(e) => setGender(e.target.value)}
                onChange={handleChange}
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
              value={values.marital}
              onChange={handleChange}
            // onChange={(e) => setMarital(e.target.value)}
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
          {errors.marital && touched.marital && errors.marital}
        </div>

        <div className="row">
          <div className="col-6 col-md-4 ">
            <label htmlFor="dob">Date of birth</label>
          </div>
          <div className="col-6 col-md-4 ">
            <input
              type="date"
              name="dob"
              value={values.dob}
              // onChange={(e) => setDob(e.target.value)}
              onChange={handleChange}
            />
            <br />
            <br />
          </div>
          {errors.dob && touched.dob && errors.dob}
        </div>

        <div className="row">
          <div className="col-6 col-md-4 ">
            <label htmlFor="email">Email </label>
          </div>
          <div className="col-6 col-md-4 ">
            <input
              type="email"
              name="email"
              value={values.email}
              // onChange={(e) => setEmail(e.target.value)}
              onChange={handleChange}
            />
            <br />
            <br />
          </div>
          {errors.email && touched.email && errors.email}
        </div>

        <div className="row">
          <div className="col-6 col-md-4 ">
            <label htmlFor="phone">Phone number </label>
          </div>
          <div className="col-6 col-md-4 ">
            <input
              type="tel"
              name="contact"
              value={values.contact}
              onChange={handleChange}
            // onChange={(e) => setContact(e.target.value)}
            />
            <br />
            <br />
          </div>
          {errors.contact && touched.contact && errors.contact}
        </div>

        <div className="row">
          <div className="col-6 col-md-4 ">
            <label htmlFor="address">Address</label>
          </div>
          <div className="col-6 col-md-4 ">
            <input
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
            // onChange={(e) => setAddress(e.target.value)}
            />
            <br />
            <br />
          </div>
          {errors.address && touched.address && errors.address}
        </div>
        <div className="row ">
          <div className="col-6 col-md-4"></div>
          <div className="col-6 col-md-4 ">
            <div className="row justify-content-between">
              <div className="col">
                <button
                  type="submit"
                  className="btn btn-primary"
                // onClick={() =>
                //   addEmp({
                //     id: emp.length > 0 ? emp[emp.length - 1].id + 1 : 0,
                //     fname: values.fname,
                //     lname: values.lname,
                //     gender: values.gender,
                //     marital: values.marital,
                //     dob: values.dob,
                //     email: values.email,
                //     contact: values.contact,
                //     address: values.address,
                //   })
                // }
                >
                  Register
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-primary "
                  onClick={() => history.push("/display", { from: "Home" })}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { emp: state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addEmp: (emp) => dispatch(addEmp(emp)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Form;
// export default Home;
