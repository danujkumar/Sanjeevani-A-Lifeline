import React, {useEffect} from 'react';
import Appbar from './Appbar';
import Navbar from './Navbar';
import Cards from './Cards';
import NearYou from './NearYou';
import Docarray from './Docarray';
import Footer from './Footer';
import { action } from '../../store';
import { useDispatch, useSelector } from "react-redux";


const Home = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    console.log("fetching the doctor list from redux")
    dispatch(action.getDocList())
  }, [])


  return (
   <>
   <div>
      <Appbar/>
    <Navbar/>
    <div className=''>
      <img className='w-full' src='./Group 5.png' alt='No Image' /> 
    </div>
    <Cards/>
    <NearYou/>
    <Docarray/> 
     <Footer/> 
    </div>
    </>
    
  );
};

export default Home;
