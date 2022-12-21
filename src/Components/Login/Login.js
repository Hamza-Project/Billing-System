import React, { useState } from 'react';
const Login = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [userIdClass, setUserIdClass] = useState("");
    const [passwordClass, setPasswordClass] = useState("");
    const [userPlaceholder, setUserPlaceholder] = useState("User ID");
    const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password");
    const submitForm = (e) => {
        e.preventDefault();
        if (userId == "" && password == "") {
            setUserPlaceholder("This Field Cannot be Empty!");
            setPasswordPlaceholder("This Field Cannot be Empty!");
            setUserIdClass("wrongPassword");
            setPasswordClass("wrongPassword");
            setTimeout(() => {
                setUserPlaceholder("User ID");
                setPasswordPlaceholder("Password");
                setUserIdClass("");
                setPasswordClass("");
            }, 2000);
        } else if (userId == "") {
            setUserPlaceholder("This Field Cannot be Empty!");
            setUserIdClass("wrongPassword");
            setTimeout(() => {
                setUserPlaceholder("User ID");
                setUserIdClass("");
            }, 2000);
        } else if (password == "") {
            setPasswordPlaceholder("This Field Cannot be Empty!");
            setPasswordClass("wrongPassword");
            setTimeout(() => {
                setPasswordPlaceholder("Password");
                setPasswordClass("");
            }, 2000);
        } else {
            if (userId == "admin" && password == "admin") {
                window.open("/main", "_self");
            } else {
                setUserIdClass("wrongPassword");
                setPasswordClass("wrongPassword");
                setTimeout(() => {
                    setUserIdClass("");
                    setPasswordClass("");
                }, 2000);
            }
        }
    }

    return (
        <>
            <div className='bgImg'>
                <h1 className='position'>BILLING SYSTEM</h1>
                <div className='mainBody'>
                    <h1>LOGIN</h1>
                    <input type={"text"} className={userIdClass} autoComplete='off' value={userId} onChange={e => setUserId(e.target.value)} placeholder={userPlaceholder} /><br />
                    <input type={"password"} className={passwordClass} autoComplete='off' value={password} onChange={e => setPassword(e.target.value)} placeholder={passwordPlaceholder} />
                    <div className='btnDiv'>
                        <button className='btnhover'>Cancel</button>
                        <button onClick={submitForm} className='btnhover'>Login</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login
