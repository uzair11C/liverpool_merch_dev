import React, { useState } from "react";
import './App.css';

const LoginForm = ({ Login , error }) =>
{
    const [details , setDetails] = useState({id:0,email: "", password: ""});

    const submitHandler = e =>
    {
        e.preventDefault();
        Login(details);
    }

    return(
        <div className="App">
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {
                    (error !== "")
                    ?
                    (<div className="error">
                        {error }
                    </div>)
                    :
                    ""
                }
                <div className="form-group">
                    <label htmlFor="id" id="id">Admin ID: </label>
                    <input type="number" name="id" id="id" onChange={e => 
                            setDetails(
                                        {
                                            ...details, id : parseInt(e.target.value)
                                        }
                                      )} value={details.id} />
                </div> <br/>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" onChange={e => 
                            setDetails(
                                        {
                                            ...details, email : e.target.value
                                        }
                                      )} value={details.email} />
                </div> <br/>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={e => 
                            setDetails(
                                        {
                                            ...details, password : e.target.value
                                        }
                                      )} value={details.password} />
                </div> <br/>
                <input className="log-tog" type = "submit" value ="LOGIN" />
                <p>Sign-up if you haven't yet!</p> 
            </div>
        </form>
        </div>
    )
}

export default LoginForm