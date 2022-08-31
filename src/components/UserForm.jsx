import React, { useState } from 'react';
import styles from './UserForm.module.css';


const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
    };

    return (
        <div>
            <form onSubmit={createUser}>
            <div>
                <fieldset className = {styles.inputField}>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                </fieldset>
            </div>
            <div>
                <fieldset className = {styles.inputField}>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} />
                </fieldset>
            </div>
            <div>
                <fieldset className = {styles.inputField}>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </fieldset>
            </div>
            <div>
                <fieldset className = {styles.inputField}>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </fieldset>
            </div>
            <div>
                <fieldset className = {styles.inputField}>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </fieldset>
            </div>
            <input type="submit" value="Create User" />
        </form>
        <h4>Your form data</h4>
        <div>
            first Name : {firstName}
        </div>
        <div>
            lastName : {lastName}
        </div>
        <div>
            email : {email}
        </div>
        <div>
            password : password
        </div>
        <div>
            password : password
        </div>
        </div>
    );
};

export default UserForm;