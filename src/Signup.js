import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style.css';
import { Link } from "react-router-dom";


function Signup() {
  return (
    <div class="registration-form">
        Create a donor account
        <div class="row">
            <form action="">
                <div className="input-fields col-12">
                    <div class="row">
                        <div className="form-group col-6">
                            <label for="">First Name</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div class="form-group col-6">
                            <label for="">Last Name</label>
                            <input type="text" class="form-control"/>
                        </div>
                        <div class="form-group col-6">
                            <label for="">Age</label>
                            <input type="text" class="form-control"/>
                        </div>
                        <div class="form-group col-6">
                            <label for="">Phone Number</label>
                            <input type="text" class="form-control"/>
                        </div>
                        <div class="form-group col-6">
                            <label for="">Email Address</label>
                            <input type="text" class="form-control"/>
                        </div>
                        <div class="form-group col-6">
                            <label for="">Password</label>
                            <input type="text" class="form-control"/>
                        </div>
                        <div class="form-check col-6" >
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1" style={{padding:"0px"}}>I accept <span style={{color: "#06DCA9"}}><strong>terms & conditions</strong></span></label>
                        </div>
                        <div class="form-group col-6">
                            <Link class="btn btn-success link-buttons" style={{width: "70%", float:"right"}} to="/products">Proceed</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Signup;
