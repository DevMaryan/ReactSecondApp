import React from 'react';
import '../css/style.css';

export function Form(){

    // let users = [];

    // function User(name, surname, age, email, password){
    //     this.name = name;
    //     this.surname = surname,
    //     this.age = age,
    //     this.email = email,
    //     this.password = password
    // }

    function CreateElements(thename, thesurname, theage, theemail, thepwd){
        let tbody = document.getElementById("tbody");
        let tr = document.createElement("tr");
        let name = document.createElement('td');
        name.innerHTML = thename;
        let surname = document.createElement('td');
        surname.innerHTML = thesurname;
        let age = document.createElement('td');
        age.innerHTML = theage;
        let email = document.createElement('td');
        email.innerHTML = theemail;
        let pwd = document.createElement('td');
        pwd.innerHTML = thepwd;

        tbody.appendChild(tr);
        tr.appendChild(name);
        tr.appendChild(surname);
        tr.appendChild(age);
        tr.appendChild(email);
        tr.appendChild(pwd);
    }
    function formValues(){
        document.getElementById("table").style.display = "block";
        let name = document.getElementById("name").value;
        let surname = document.getElementById("surname").value;
        let age = document.getElementById("age").value;
        let email = document.getElementById("email").value;
        let pwd = document.getElementById("password").value;
        CreateElements(name,surname,age,email,pwd);
    }


    return(
        <div id = "form">
            <h2>Sign up today, for free!</h2>
            <input type="text" id = "name" placeholder = "Name" required/>
            <input type="text" id = "surname" placeholder = "Surname" required/>
            <input type="number" id = "age" placeholder = "Age" required />
            <input type="email" id = "email" placeholder = "Email" required/>
            <input type="password" id = "password" placeholder = "Password" required/>
            <button id = "sign-up" onClick={() => formValues()}>Sign Up</button>
        </div>
    )
}
