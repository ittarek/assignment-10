import React from 'react';
import Header from '../../ShardComponet/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../ShardComponet/Footer/Footer';


const Main = () => {
          return (
                    <>

                <Header></Header>
                <div className='min-vh-100'><Outlet></Outlet> </div>
                    
                    <Footer></Footer>
                             
                    </>
          );
};

export default Main;