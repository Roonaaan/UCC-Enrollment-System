import React from 'react'

//Assets
import './Login.css';
import UCC from '../assets/UCC.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  return (
    <>
      <div className="loginContainer">
        <div className="loginInner">
          {/* Navbar */}
          <div className="loginHeaderContainer">
            <div className="loginHeaderInner">
              <div className="loginLogoContainer">
                <img src={UCC} alt="ucclogo" />
                <h1>University of Caloocan City</h1>
              </div>
            </div>
          </div>

          {/* Main Login Container */}
          <div className="loginFormContainer">
            <div className="loginFormInner">
              <div className="studentContainer">
                <div className="studentInner">
                  <div className="studentInputInner">
                    <div className="studentInput">
                      <input
                        type="text"
                        placeholder=''
                      />
                      <label htmlFor="text">Student Number</label>
                    </div>
                    <div className="studentInput">
                      <input
                        type="password"
                        placeholder=''
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="loginFooterContainer">
            <div className="loginFooterInner">
              <div className="loginFooterTitle">
                <h1> Created by: John Ronan Ramos</h1>
                <div className="loginFooterTitleContact">
                  <a href="https://www.linkedin.com/in/johnronanramos/">
                    <FontAwesomeIcon icon={faLinkedin} className='linkedin' />
                  </a>
                  <a href="https://github.com/Roonaaan">
                    <FontAwesomeIcon icon={faGithub} className='github' />
                  </a>
                  <a href="ronan-ramos.vercel.app">
                    <FontAwesomeIcon icon={faEarthAsia} className='website' />
                  </a>
                </div>
              </div>
              <p> Disclaimer: This is a Project and not officially used by the University of Caloocan City</p>
              <div className="loginUnderline" />
              <div className="loginCopyright">
                <p>Copyright &#169; 2024 UCC Enrollment System. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login
