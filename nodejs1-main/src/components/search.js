import React from "react";


const Search = () => {
  const emptyRows = Array.from({ length: 10 });

  return (
    <div className="d-flex justify-content-center align-items-center">
      <table className="table table-striped table-primary">
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Mother's Name</th>
            <th>Father's Name</th>
            <th>Gender</th>
            <th>State</th>
            <th>City</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {emptyRows.map((row, index) => (
            <tr key={index}>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="email" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
