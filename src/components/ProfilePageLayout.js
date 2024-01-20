
import React from 'react';
import Navbar from './NavBar/Nav_bar';
import ProfilePage from './Profile/ProfilePage';
import SaleProducts from './Profile/SaleProducts';
import HorizontalMenu from './NavBar/HorizontalMenu';
// import FooterMenu from './Footer/FooterMenu';

const ProfilePageLayout = () => {
  return (
   <>
    <Navbar></Navbar>
    <HorizontalMenu></HorizontalMenu>
     <div> 

    <ProfilePage></ProfilePage>
    <SaleProducts></ SaleProducts>
    </div>
 
    {/* <FooterMenu></FooterMenu> */}
    </>
  );
};

export default ProfilePageLayout;
