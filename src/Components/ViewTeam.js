import React from 'react'
import { useParams } from 'react-router-dom';
import Team from './Team';

function ViewTeam({match , teams}) {

    const id = useParams();
    console.log(id);

    const teamViewed = teams.find( (team) => team.id === id);
    var table;
    console.log(teamViewed)

    if(teamViewed){
        table = teamViewed.map((team) => {
            return(
                <Team id={team.id} name={team.name}/>
            )
            })
    }
    else{
        table = <h3>No team for this User</h3>
    }


    return (
        <div className='container'>
            <select class="form-select w-25 mt-3 border border-dark" aria-label="Filter by">
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
                <tbody>
                    {table}
                </tbody>
            </table>
        </div>
    )
}

export default ViewTeam
