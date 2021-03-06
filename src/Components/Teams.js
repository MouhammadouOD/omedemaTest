import React, { useEffect, useState } from "react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import ViewTeam from "./ViewTeam";

function Teams() {
  //declare my hooks
  const [teams, setTeams] = useState([]);

  // collect data from api and store it in the Hook
  useEffect(() => {
    fetch("https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/")
      .then((response) => response.json())
      .then((result) => setTeams(result));
  }, []);

  //Nested route to acces to ViewTeam
  const { path, url } = useRouteMatch();
  console.log(url);
  const table = teams.map((team) => {
    return (
      <tr>
        <td>
          <Link to={`${url}/${team.id}`}>{team.id}</Link>
        </td>
        <td>
          <Link to={`${url}/${team.id}`}>{team.name}</Link>
        </td>
      </tr>
    );
  });

  //filter teams by id and save it into idteams
  var idteams = [...teams];
  idteams.sort(function compare(a, b) {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  });

  //filter teams by name and save it into nameteams
  var nameteams = [...teams];
  nameteams.sort(function compare(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  //functions to update teams hook
  const filterById = () => {
    setTeams(idteams);
  };

  const filterByName = () => {
    setTeams(nameteams);
  };

  //filter the teams at input changes
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
            <th scope="col">TEAM</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>

      <Switch>
        <Route
          path={`${path}/:productId`}
          render={(props) => <ViewTeam teams={teams} {...props} />}
        />
      </Switch>
    </div>
  );
}

export default Teams;
