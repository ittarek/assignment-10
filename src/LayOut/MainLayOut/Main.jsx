import React from 'react';
import Header from '../../ShardComponet/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../ShardComponet/Footer/Footer';
import './Main.css'


const Main = () => {
          return (
                    <>

<Header></Header>
<div className='min-vh-100 mt-5'><Outlet></Outlet> </div>
                <Footer></Footer>
                    
                             
                    </>
          );
};

export default Main;