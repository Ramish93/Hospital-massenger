import React,{useState} from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'

import signinImage from '../assets/signup.jpg'

const Auth = () => {

    const [isSignup, setIsSignup] = useState(true)

    const handleChange = () =>{

    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup); 
    }

  return (
    <div className='auth__form-container'>
        <div className='auth__form-container_fields'>
            <div className='auth__form-container_fields-content'>
                <p>{isSignup ? 'Sign up' : 'Sign In'}</p>
                <form onSubmit={() => {}}>
                    {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='fullName'>Full Name</label>
                            <input type="text" name='fullName' placeholder='Full Name' onChange={handleChange} required />
                        </div>
                    )}
                    <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='username'>User Name</label>
                            <input type="text" name='username' placeholder='User Name' onChange={handleChange} required />
                        </div>
                    {isSignup && (
                    <div className='auth__form-container_fields-content_input'>
                        <label htmlFor='phoneNumber'>Phone Number</label>
                        <input type="text" name='phoneNumber' placeholder='Phone Number' onChange={handleChange} required />
                    </div>
                    )}
                    {isSignup && (
                    <div className='auth__form-container_fields-content_input'>
                        <label htmlFor='avatarURL'>Avatar URL</label>
                        <input type="text" name='avatarUrl' placeholder='Avatar URL' onChange={handleChange} required />
                    </div>
                    )}
                    <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='password'>Password</label>
                            <input type="password" name='password' placeholder='Type Password' onChange={handleChange} required />
                        </div>
                        {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='confirmPassword'>Confirm Password</label>
                            <input type="password" name='confirmPassword' placeholder='Confirm Password' onChange={handleChange} required />
                        </div>
                        )}
                </form>
                <div className='auth__form-container_fields-account'>
                    <p >{isSignup ?
                    "Already have an account: "
                    :"Don't have an account yet: "
                    }
                    <span onClick={switchMode}>{isSignup ? "Sign In": "Sign Up!"}</span>
                    </p>
                </div>
            </div>
        </div>
        <div className='auth__form-container_image'>
            <img src={signinImage} alt="sign in image" />
        </div>
    </div>
  )
}

export default Auth