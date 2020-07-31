import React, { Component } from 'react';

class Form extends Component{
    render(){
    return(
        
    <body className="signin">
       <form>
         <div class="input-form">
            Sign in to your account
            <div class="input-fields">
             <label for="email"><b>Email</b></label>
              <input type="text" name="email" id="email" required />
                
              <label for="psw"><b>Password</b></label>
              <input type="password" name="psw" id="psw" required />
               

              <div class="checkbox">
                <label>
                    <input type="checkbox" checked="checked" name="remember" />
                  </label>
            </div>
                <div class="buttons">
                    <input type="button" value="SIGN IN" />
                </div>
                </div>
                </div>
                
       </form>
       <a href="signup.html">Don't have an account? Sign up</a>
    </body>
    
        )
    }
}
export default Form;