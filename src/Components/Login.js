import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidata } from './Utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from './Utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from './Utils/userSlice';
import { Background_URL, UserLogo_URL } from './Utils/Constent';

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const mobile = useRef(null);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  const handelButtonClick = () => {
    const message = checkValidata(
      email.current.value,
      password.current.value,
      name.current?.value,
      mobile.current?.value
    );
    seterrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // ✅ Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: UserLogo_URL,
          })
          .then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;

            // ✅ Dispatch user data including mobile manually
            dispatch(addUser({
              uid,
              email,
              displayName,
              photoURL,
              mobile: mobile.current.value, // manually added
            }));

           
          })
          .catch((error) => {
            seterrorMessage(error.message);
          });
        })
        .catch((error) => {
          seterrorMessage(error.code + " - " + error.message);
        });
    } else {
      // ✅ Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
         
        })
        .catch((error) => {
          seterrorMessage(error.code + " - " + error.message);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={Background_URL}
          alt="background"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-[25%] h-full p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-85"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>

        {!isSignInForm && (
          <>
            <input
              ref={name}
              type="text"
              placeholder="Type Your Full Name"
              className="p-4 my-4 w-full bg-gray-800 rounded-md"
            />
            <input
              ref={mobile}
              type="text"
              placeholder="Enter Your Mobile Number"
              className="p-4 my-4 w-full bg-gray-800 rounded-md"
            />
          </>
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or Mobile Number"
          className="p-4 my-4 w-full bg-gray-800 rounded-md"
        />

        <input
          ref={password}
          type="password"
          placeholder={isSignInForm ? 'Password' : 'Create a Password'}
          className="p-4 my-4 w-full bg-gray-800 rounded-md"
        />

        {!isSignInForm && (
          <p className="text-sm">
            Password should have alphabetic characters (A-Z) and numeric characters (0-9)
          </p>
        )}

        <p className="text-red-500 font-semibold text-lg py-2">{errorMessage}</p>

        <button
          className="p-4 my-6 bg-red-600 w-full hover:bg-red-700 rounded-md"
          onClick={handelButtonClick}
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>

        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? 'New to Netflix? Sign Up Now.'
            : 'Already Registered? Sign In Now.'}
        </p>
      </form>
    </div>
  );
};

export default Login;
