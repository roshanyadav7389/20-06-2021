/** @format */

import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Registration.css";
import { toast } from "react-toastify";

toast.configure();

// import OtpInput from "react-otp-input";

//import Navbar from "./Navbar";
const Registeration = () => {
  const History = useHistory("");
  const [updateValue, currentState] = useState({firstName: "",lastName: "",fatherFirstName: "",mobileNumber: "",schoolStream: "",villageName: "",townName: "",otp: "",
  });

  const [button, setButton] = useState("");

  const inputEvent = (event) => {
    const { value, name } = event.target;

    currentState((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const Register = async (event) => {
    event.preventDefault();
    console.log(updateValue);
    const {firstName,lastName,fatherFirstName,mobileNumber,schoolStream,villageName,townName,otp,} = updateValue;
    const reqOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({firstName,lastName,fatherFirstName,mobileNumber,schoolStream,villageName,townName,otp,}),
    };

    const res = await fetch("/register", reqOption);

    console.log(res);
    if (res.status === 201 || res.status === 200) {
      toast.success("Wellcome To SSISM", {
        position: toast.POSITION.TOP_CENTER,
      });
      History.push("/login");
    } else if (res.status === 400) {
      toast.error("Please enter correct OTP", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (res.status === 500) {
      toast.error("Internal server error", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error("Internal server error", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const getOtp = async (event) => {
    event.preventDefault();
    if (updateValue.mobileNumber.length === 10) {
      console.log(updateValue.mobileNumber);
      // alert("Sending otp");
      event.preventDefault();
      const reqOption = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mobileNumber: updateValue.mobileNumber,
        }),
      };

      const res = await fetch("/getotp", reqOption);

      console.log(res);

      if (res.status === 200) {
        toast("enter otp", { position: toast.POSITION.TOP_CENTER });
        //   window.alert("enter otp");
        //   console.log('otp send ');

        setButton(
          <>
            <div className=' mt form-element'>
              <div className='form-group position-relative'>
                <label className=' lab input-label' htmlFor='otp'>
                  OTP
                </label>
                <input
                  type='text'
                  name='otp'
                  className='form-control form-control-lg'
                  id='name'
                  placeholder='Please enter OTP'
                  minLength='6'
                  maxLength='6'
                  onChange={inputEvent}
                  // value={updateValue.otp}
                  required
                />
              </div>
            </div>
            <div className='text-center pt-3'>
              <button type='submit' className='button btn btn-lg'>
                Register
              </button>
            </div>
          </>
        );
      } else if (res.status === 208) {
        toast.error("user already register !", {
          position: toast.POSITION.TOP_CENTER,
        });
        toast.error("Please login !", {
          position: toast.POSITION.TOP_CENTER,
        });
        History.push("/login");
      } else if (res.status === 500) {
        toast.error("Internal server error !", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error("Something error !", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } else {
      toast.error("Please fill mobile number !", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div>
      <section id='reg'>
        <div className='box container h-100'>
          <div className=' row h-100'>
            <div className=' start col-lg-6 offset-lg-3 valign-center'>
              <div className='w-100'>
                <div className='  start1 login p-5 text-center'>
                  <h1 className='heading  medium-heading'>Register now!</h1>

                  <p className=' para pt-2'></p>
                  <form
                    className='form-horizontal pt-5'
                    role='form'
                    onSubmit={Register}>
                    <div className='form-element'>
                      <div className='form-group position-relative'>
                        <label className=' lab input-label' htmlFor='name'>
                          first Name
                        </label>
                        <input
                          type='text'
                          name='firstName'
                          className='form-control form-control-lg'
                          id='name'
                          placeholder=''
                          required
                          onChange={inputEvent}
                          value={updateValue.firstName}
                        />
                      </div>
                    </div>
                    <div className='mt form-element'>
                      <div className='form-group position-relative'>
                        <label className=' lab input-label' htmlFor='name'>
                          Last Name
                        </label>
                        <input
                          type='text'
                          name='lastName'
                          className='form-control form-control-lg'
                          id='name'
                          placeholder=''
                          required
                          onChange={inputEvent}
                          value={updateValue.lastName}
                        />
                      </div>
                    </div>

                    <div className=' mt form-element'>
                      <div className=' nob form-group position-relative'>
                        <label className=' lab input-label' htmlFor='name'>
                          Father's Name
                        </label>
                        <input
                          type='text'
                          name='fatherFirstName'
                          className='form-control form-control-lg'
                          id='name'
                          placeholder=''
                          required
                          onChange={inputEvent}
                          value={updateValue.fatherFirstName}
                        />
                      </div>
                    </div>
                    <div className=' mt form-element'>
                      <div className='form-group position-relative '>
                        <label className=' lab input-label' htmlFor='name'>
                          Stream
                        </label>
                        <select
                          className='form-control form-control-lg'
                          id='name'
                          type='text'
                          name='schoolStream'
                          placeholder=''
                          required
                          onChange={inputEvent}
                          value={updateValue.schoolStream}>
                          <option></option>
                          <option>Maths</option>
                          <option>Science</option>
                          <option>Arts</option>
                          <option>Commerce</option>
                        </select>
                      </div>
                    </div>
                    <div className=' mt form-element'>
                      <div className='form-group position-relative'>
                        <label className=' lab input-label' htmlFor='name'>
                          Village
                        </label>
                        <input
                          type='text'
                          name='villageName'
                          className='form-control form-control-lg'
                          id='name'
                          placeholder=''
                          required
                          onChange={inputEvent}
                          value={updateValue.villageName}
                        />
                      </div>
                    </div>
                    <div className=' mt form-element'>
                      <div className='form-group position-relative'>
                        <label className=' lab input-label' htmlFor='name'>
                          Town Name
                        </label>
                        <input
                          type='text'
                          name='townName'
                          className='form-control form-control-lg'
                          id='name'
                          placeholder=''
                          required
                          onChange={inputEvent}
                          value={updateValue.townName}
                        />
                      </div>
                    </div>

                    <div className=' mt form-element'>
                      <div className='form-group position-relative'>
                        <div className='d-flex '>
                          <label className=' lab input-label' htmlFor='Phoneno'>
                            Phone Number
                          </label>

                          <input
                            type='tel'
                            // type="number"
                            name='mobileNumber'
                            className='form-control form-control-lg'
                            id='Phoneno'
                            placeholder=''
                            minLength='10'
                            maxLength='10'
                            required
                            onChange={inputEvent}
                            value={updateValue.mobileNumber}
                          />
                          <span>
                            {""}
                            <button
                              id='otpbtn'
                              type='button'
                              className='btn btn-success p-3'
                              onClick={getOtp}>
                              Get Otp
                            </button>{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                    {button}
                  </form>
                </div>
                <div className=' last pt-1'>
                  Already have an account? <NavLink to='/Login'>Login</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registeration;
