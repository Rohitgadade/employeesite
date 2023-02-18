import React, { useState } from "react";
import { useSelector } from "react-redux";
import EmployeeDisplay from "./EmployeeDisplay";

export const SearchEmployee = () => {
  const emp = useSelector((state) => state);
  const [search, setSearch] = useState("");
  const currentEmp = emp.find((current) => current.id === parseInt(search));
  console.log("search", currentEmp);

  return (
    <div className="container">
      <h1 className="mt-4">Search Employee Information</h1>
      <form>
        <input
          type="text"
          name="search"
          className="mt-3"
          placeholder="Enter Employee ID only"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        {emp
          .filter((searchID) => searchID.id === parseInt(search))
          .map((el, id) => {
            return (
              <div key={id}>
                <EmployeeDisplay data={el} />
              </div>
            );
          })}
        {/* {
          currentEmp ?
            <EmployeeDisplay data={currentEmp} /> :
            <div className="m-2">No record found</div>
        } */}

      </ul>
    </div>
  );
};

export default SearchEmployee;
