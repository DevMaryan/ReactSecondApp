import React from 'react';
import '../css/style.css';

export function Table(){
    return(
        <div id = "table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody id = "tbody">
                    
                </tbody>
            </table>

        </div>
        )
}
