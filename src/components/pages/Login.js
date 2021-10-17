import React, { useEffect, useState } from 'react'

import { NavLink, useHistory } from 'react-router-dom'

import "./form.css"

//  const vpassword = (value) => {
//         if (value.length < 6 || value.length > 40) {
//           return (
//             <div className="alert alert-danger" role="alert">
//               The password must be between 6 and 40 characters.
//             </div>
//           );
//         }
//       };

const Login = () => {
    const history = useHistory();


    useEffect(() => {
        if (localStorage.getItem('user-login')) {
            history.push("/services");
        } else history.push("/login");
    }, [history])

    // const [user, setUser] = useState({
    //     email: "",
    //     password: ""
    // })

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    // const handleChange = (e) => {
    //     const { name, value } = e.target

    //     setUser({ ...user, [name]: value });

    // }

    const formSubmit = (e) => {
        e.preventDefault();
        let data = { email, password }
        console.log(data)


        if (!localStorage.getItem('user-info')) {
            alert(
                ` ${email} you are not registered `
            )
            history.push("/register");
        } else {

            localStorage.setItem("user-login", JSON.stringify(data));
            history.push("/services");
        }


    }

    return (
        <>
           
            <div className="main">
                <form className="form " onSubmit={formSubmit}>
                    <h1 style={{ fontSize: 30 }}>Login</h1>
                    <p style={{ fontSize: 20 }}>Enter Your Details </p>

                    <input
                        type="email"
                        // id=""
                        // class=""
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your Email"
                        required
                    />
                    {/* <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange} required /> */}
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Enter Your Password"
                        onChange={(e) => setPassword(e.target.value)}
                        // validations={[vpassword]} *
                        required
                    />


                    <button className="button" type="submit">Log In</button>


                    <div className="container1">
                        <div className="item">
                            <NavLink to="/contact" variant="body2">
                                Forgot password?
                            </NavLink>
                        </div>
                        <div className="item">
                            <NavLink to="/register" style={{ color: "blue" }} >
                                Don't have an account? Register
                            </NavLink>
                        </div>
                    </div>


                </form>
            </div>
        </>
    )
}

export default Login
