import { Link } from 'react-router-dom';
import style from '../components/Form.module.css';
import style2 from '..//App.module.css';
import style3 from '..//components/Buttons.module.css';
import style4 from '..//pages/Welcome.module.css';

import { useState, useEffect } from 'react';


export function CreateAccount() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) || []);
    
    function updateName(e) {
        setName(e.target.value);
    }

    function updateEmail(e) {
        setEmail(e.target.value);
    }

    function updatePassword(e) {
        setPassword(e.target.value);
    }

    function registerUser(e) {
        const minNameLength = 2;
        const maxNameLength = 20;
        const minEmailLength = 6;
        const maxEmailLength = 30;
        const minPasswordLength = 8;
        const maxPasswordLength = 30;
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        e.preventDefault();

    const newErrors = [];
        if (name.length < minNameLength || name.length > maxNameLength) {
            newErrors.push('Invalid name');
        }

        if (email.length < minEmailLength || email.length > maxEmailLength) {
            newErrors.push('Invalid email');
        } else if (!emailRegex.test(email)) {
            newErrors.push('Invalid email format');
        }

        if (password.length < minPasswordLength || password.length > maxPasswordLength) {
            newErrors.push('Invalid password');
        } else if (!passwordRegex.test(password)) {
            newErrors.push('Password must contain at least one letter and one number');
        }

        if (users.some((user) => user.email === email)) {
            newErrors.push('Error with password or email');
        }

        setErrors(newErrors);

        if (newErrors.length === 0) {
            const newUser = { name, email, password };
            setUsers((prev) => [...prev, newUser]);
            localStorage.setItem('users', JSON.stringify([...users, newUser]));
        }
    }

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);


    return (
         <>
            <h1 className={style4.title}>Welcome to local!</h1>
            <p>Firstly, tell us a bit about yorself.</p>
                <div className={`${style2.error} ${errors.length ? style2.show : ''}`}>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                </div>
            <form className={style.form}>
                <div>
                    <input onChange={updateName} value={name} placeholder="Name" id='name' type="text" required />
                </div>
                <div>
                    <input onChange={updateEmail} value={email} placeholder="Surname" id='email' type="text" required />
                    </div>
                <div>
                    <input onChange={updatePassword} value={password} placeholder="Passvord" id='password' type="password" required />
                </div>
            </form>
            <Link className={style3.btn} to='/'>Continue</Link>  
        </>
    );
}