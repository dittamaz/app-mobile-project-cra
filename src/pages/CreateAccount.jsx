import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from '../components/Form.module.css';
import style3 from '..//components/Buttons.module.css';
import style4 from '..//pages/Welcome.module.css';

export function CreateAccount() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');   
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('Name cannot be empty');
    const [emailError, setEmailError] = useState('Email cannot be empty');
    const [passwordError, setPasswordError] = useState('Password cannot be empty');
    const [nameDirty,setNameDirty] = useState(false);
    const [emailDirty,setEmailDirty] = useState(false);
    const [passwordDirty,setPasswordDirty] = useState(false);
    const [formValid, setFormValid] = useState(false);

    useEffect( () => {
        if(nameError || emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid (true)
        }
    }, [nameError, emailError, passwordError])

    const nameHandler = e => {
        setName(e.target.value)
        if (e.target.value.length < 2 || e.target.value.length > 20) {
            setNameError('wrong length')
            if(!e.target.value) {
                setNameError('Name cannot be empty')
            }
        } else { 
            setNameError('')    
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Invalid email')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = e => {
        setPassword(e.target.value)
        if (e.target.value.length < 8 || e.target.value.length > 30) {
            setPasswordError('wrong length')
            if(!e.target.value) {
                setPasswordError('Name cannot be empty')
            }
        } else { 
            setPasswordError('')    
        }   
    }
    
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break;
            case 'email':
                setEmailDirty(true)
                break;
            case 'password':
                setPasswordDirty(true)
                break;
                default:
                    break;
        }
    }
    
    return (
        <>
            <h1 className={style4.title}>Welcome to local!</h1>
            <p>Firstly, tell us a bit about yorself.</p>
            <form className={style.form}>
                {(nameDirty && nameError) && <div style={{color:'#D3455B'}}>{nameError}</div>}
                <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} name='name' type='text' placeholder='Name'/>
                
                {(emailDirty && emailError) && <div style={{color:'#D3455B'}}>{emailError}</div>}
                <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type='text' placeholder='Email'/>
               
                {(passwordDirty && passwordError) && <div style={{color:'#D3455B'}}>{passwordError}</div>}
                <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type='password' placeholder='Password'/>
                
                <button disabled={!formValid} className={style3.btn} to='/profile' type='submit'>Register</button>
                <p>or</p>
                <Link to='/login'className={style3.btn} >Login</Link>  
            </form>
        </>
    );
};

