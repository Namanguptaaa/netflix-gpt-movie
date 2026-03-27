import React from 'react'
import { signOut , onAuthStateChanged } from "firebase/auth";
import { auth } from './Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect  } from 'react';
import { addUser , removeUser } from './Utils/userSlice';
import { LOGO_URL, SUPPORTED_LANGUAGES, UserLogo_URL } from './Utils/Constent';
import { toggleGptSearchView } from './Utils/gptSlice';
import lang from './Utils/languageConstants';
import { changeLanguage } from './Utils/confligSlice';

const Header = () => {
  const navigate=useNavigate();
  const dispatch =useDispatch();
  const user=useSelector(store => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  const handelSignOut = () => {
    signOut(auth).then(() => {
   }).catch((error) => {
    navigate("/error")
   });

  };


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
         
          const { uid, email, displayName, photoURL } = user;
  
          dispatch(
            addUser({
              uid,
              email,
              displayName,
              photoURL, 
              mobile: localStorage.getItem("Mobile") || null
            })
          );
         navigate("/browse")
        } else {
          dispatch(removeUser());
          navigate("/")
        }
      });
  
      // cleanup
      return () => unsubscribe();
    }, []);

    const handleGptSearchClick = () =>{
      // Toggle GPT Search
      dispatch(toggleGptSearchView());
    };

    const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value));      
    }
  
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
    <img className='w-40'  src={LOGO_URL} 
    alt="logo" />
    {user &&(
      <div className=' flex p-2 '>
        {showGptSearch &&  (<select className='p-2 m-2 bg-gray-800 text-white' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>)}
        <button className='py-2 px-4 mx-4 my-2 hover:bg-purple-600 bg-purple-800 text-white rounded-lg'onClick={handleGptSearchClick}>{showGptSearch ? "Homepage" : "GPT Search"}</button>
      <img className='w-12 h-12 flex p-1' src={user.photoURL || UserLogo_URL}
       alt='Usericon' />
       <button onClick={handelSignOut} className='font-bold text-white'>(Sign out)</button>
    </div>
  )}
     </div>
  )

}

export default Header
