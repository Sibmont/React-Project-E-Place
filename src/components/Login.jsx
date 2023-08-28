import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../main';

const Login = () => {

  const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password, name)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
              console.log("Name saved")
            }).catch((error) => {
              console.error(error)
            });
            console.log(user);
            navigate("/")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            toast.error('Email associated to existing account', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "dark",
              });
        });
      }

      const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            toast.error('Incorrect User or Password', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "dark",
              });
        });
      }

      const resetPassword = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success('Password reset email sent', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          toast.error('Please enter a correct email address', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
            });
        });
      }
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="store-title">E-PLACE</div>
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                    <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                    <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            <input type="email" className="form-style" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                            <i className="input-icon uil uil-at"></i>
                          </div>	
                          <div className="form-group mt-2">
                            <input type="password" className="form-style" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button type='submit' onClick={onLogin} className="btn-login mt-4">Login</button>
                          <p className="mb-0 mt-4 text-center"><button type='submit' onClick={resetPassword} className="form-link">Forgot your password?</button></p>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-3 pb-3">Sign Up</h4>
                          <div className="form-group">
                            <input type="text" className="form-style" placeholder="Full Name" onChange={(e) => setName(e.target.value)}/>
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input type="email" className="form-style" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input type="password" className="form-style" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button type='submit' onClick={onSubmit} className="btn-login mt-4">Register</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login