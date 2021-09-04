import React from 'react'
import Team from './Team'

function Teams(){
    
    
    return(
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
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                    </tr>
                    <tr>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>

            <Team />


        </div>
        
    )
}

export default Teams 