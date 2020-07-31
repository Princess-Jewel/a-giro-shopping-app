import React from 'react';

import { Link } from "react-router-dom";

function Signin() {
  return (
    // <Router>
    <div>
    <form>
        <div className="input-form">
            Sign in to your account
            <div className="input-fields">
                <label for="">Email</label>
                <input type="text" name="" id=""/>
                <label for="">Password</label>
                <input type="password" name="" id=""/>
                <div className="checkbox">
                    <input type="checkbox" name="" id=""/>
                </div>
                <div className="buttons">
                    <input type="button" value="SIGN IN"/>
                </div>
                
            </div>
        </div>
    </form>
    <Link to="/signup">Don't have an account? Sign up</Link>
    </div>
    // </Router>
  );
}

export default Signin;
