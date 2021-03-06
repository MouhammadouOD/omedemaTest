import React, { useEffect, useState } from "react";
import User from "./User";
//import {useSelector , useDispatch} from 'react-redux';

function Users(props) {
  // declare hooks
  const [users, setUsers] = useState([]);

  // collect data from api and store it in the Hook
  useEffect(() => {
    fetch("https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users/")
      .then((response) => response.json())
      .then((result) => setUsers(result));
  }, []);

  const table = users.map((user) => {
    return <User id={user.id} name={user.displayName} />;
  });

  //filter users by id and save it into idusers
  var idusers = [...users];
  idusers.sort(function compare(a, b) {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  });

  //filter users by name and save it into nameusers
  var nameusers = [...users];
  nameusers.sort(function compare(a, b) {
    if (a.displayName < b.displayName) return -1;
    if (a.displayName > b.displayName) return 1;
    return 0;
  });

  //functions to update users hook
  const filterById = () => {
    setUsers(idusers);
  };

  const filterByName = () => {
    setUsers(nameusers);
  };

  //filter the users at input changes
  const filter = (e) => {
    const value = e.target.value;

    value === "id" ? filterById() : filterByName();
  };

  return (
    <div className="container">
      <select
        onChange={(e) => filter(e)}
        class="form-select w-25 mt-3 border border-dark"
        aria-label="Filter by"
      >
        <option selected>Filter by</option>
        <option value="id">Id</option>
        <option value="name">Name</option>
      </select>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">DisplayName</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    </div>
  );
}

export default Users;
