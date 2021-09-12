import React from 'react';
import '../css/style.css';


export function Header(){

    function showForm(){
        let x = document.getElementById('form');
        if(x.style.display === "flex"){
            x.style.display = "none";
        }else{
            x.style.display = "flex";
        }
    }

    return(
        <div id = "header">
            <div className = "logo">
                <h3>Homework 3</h3>
            </div>
            <div className = "add-btn">
                <button id = "show-form" onClick={() => showForm()}>Sign Up</button>
            </div>
        </div>    
    )
}
