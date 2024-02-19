import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './RootLayout.module.css'
import { Outlet } from 'react-router-dom';

function RootLayout(props) {
    return (
        <>
        <Header/>
       <Outlet/>
       
       <Footer/>    
        </>
    );
}

export default RootLayout;