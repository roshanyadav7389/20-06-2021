/** @format */

import React, { useState } from "react";
import "./Login.css";
import { NavLink, useHistory } from "react-router-dom";
// import axios from 'axios';
import { toast } from "react-toastify";
toast.configure();

const Login = () => {
  const History = useHistory("");
  const [currentValue, setValue] = useState({ mobileNumber: "", otp: "" });
  const [actOtp, setOtp] = useState("Get OTP");
  const [addForm, showForm] = useState(false);

  //   const settoken = (props)=>{
  //     console.log("token"+ props.token)
  //     localStorage.setItem("token" , props.token);
  //     const tokenData = localStorage.getItem("token");
  //     // console.log(localStorage.getItem("token"));
  // console.log(tokenData);
  //     return tokenData;

  //   }

  const inputEvent = (event) => {
    const { value, name } = event.target;
    setValue((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const signUp = async (event) => {
    event.preventDefault();
    event.preventDefault();
    // console.log(email , password);
    const reqOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mobileNumber: currentValue.mobileNumber,
        otp: currentValue.otp,
      }),
    };

    const res = await fetch("/login", reqOption);

    console.log(res);

    if (res.status === 200) {
      const resData = await res.json();
      console.log(resData.token);
      let token = resData.token;
      console.log(token);
      toast.success("user login succefully", {
        position: toast.POSITION.TOP_CENTER,
      });
      localStorage.setItem("token", token);

      console.log(localStorage.getItem("token"));
    } else if (res.status === 406) {
      toast.error("Please enter correct OTP ", {
        position: toast.POSITION.TOP_CENTER,
      });
      // window.alert("Please enter correct OTP ");
    } else {
      toast.error("Internal server error !", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const getOtp = async (event) => {
    event.preventDefault();
    // alert("Sending otp");

    console.log(currentValue.mobileNumber);
    console.log(currentValue.otp);

    // kuldeep sending otp
    event.preventDefault();
    // console.log(email , password);
    const reqOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mobileNumber: currentValue.mobileNumber,
      }),
    };

    const res = await fetch("/getloginotp", reqOption);

    console.log(res);

    if (res.status === 200) {
      toast.warning("Enter OTP !", {
        position: toast.POSITION.TOP_CENTER,
      });
      // window.alert("enter otp");
      // console.log('otp send ');

      setOtp("Login");

      showForm(true);
      // History.push('/');
    } else if (res.status === 500) {
      toast.warning("Internal server error!", {
        position: toast.POSITION.TOP_CENTER,
      });
      // window.alert("OTP not send");
    } else if (res.status === 404) {
      toast.error("User are not registered Please register !", {
        position: toast.POSITION.TOP_CENTER,
      });
      // window.alert("User are not registered Please register !");
      History.push("/registration");
    }
  };

  return (
    <>
      <section id='login'>
        <div className=' box container h-100'>
          <div className='row h-100'>
            <div className=' borderline col-lg-6 offset-lg-3 valign-center'>
              <div className='w-100'>
                <div className=' start login p-5 text-center'>
                  <h1 className=' loginname medium-heading wow fadeInDown'>
                    login
                  </h1>

                  <form
                    className='form-horizontal pt-5 contactus-form'
                    role='form'
                    onSubmit={getOtp}>
                    <div className=' mt form-element'>
                      <div className='form-group position-relative'>
                        <label
                          className=' lab input-label'
                          htmlFor='mobileNumber'>
                          Phone Number
                        </label>
                        <input
                          type='tel'
                          className='form-control form-control-lg'
                          name='mobileNumber'
                          minLength='10'
                          maxLength='10'
                          // pattern='[789][0-9]{9}'
                          onChange={inputEvent}
                          value={currentValue.mobileNumber}
                          required
                        />
                      </div>
                    </div>

                    {/* condition for showing button  if they false then initiate else part*/}
                    {addForm ? null : (
                      <>
                        <br />
                        <button type='submit' className='button btn btn-lg'>
                          {actOtp}
                        </button>
                      </>
                    )}
                  </form>
                  <div className=' last pt-1'>
                    Don't have any account?{" "}
                    <NavLink to='/Registration'>Sign in</NavLink>
                  </div>

                  {/* condition for showing form  if first form is successfully */}
                  {addForm ? (
                    <>
                      <form
                        className='form-horizontal pt-5 contactus-form'
                        onSubmit={signUp}>
                        <div className=' mt form-element'>
                          <div className='form-group position-relative'>
                            <label className=' lab input-label' htmlFor='otp'>
                              Enter OTP
                            </label>
                            <input
                              type='tel'
                              name='otp'
                              className='form-control form-control-lg'
                              onChange={inputEvent}
                              value={currentValue.otp}
                              minLength='6'
                              maxLength='6'
                              required
                            />
                          </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        {/* Here actOtp is nothing but changing the value of button value */}
                        <button type='submit' className='button btn btn-lg'>
                          {actOtp}
                        </button>
                      </form>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
