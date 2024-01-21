import React, { useState } from 'react';
import Navbar from './NavBar/Nav_bar';
import ProfilePage from './Profile/ProfilePage';
import SaleProducts from './Profile/SaleProducts';
import Sidebar from './Profile/Sidebar';
import HorizontalMenu from './NavBar/HorizontalMenu';
import { VscLayoutSidebarLeft } from "react-icons/vsc";

// import FooterMenu from './Footer/FooterMenu';

const ProfilePageLayout = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <>
      <Navbar></Navbar>
      <HorizontalMenu></HorizontalMenu>
      <div className='grid justify-start gap-0 grid-cols-12'>
        <div className={`col-span-2 border ${isSidebarCollapsed ? 'hidden sm:block' : ''}`}>
          <Sidebar></Sidebar>
        </div>
        <div className='col-span-10'>
        <VscLayoutSidebarLeft  className="sm:hidden cursor-pointer text-black text-xl border border-black"
            onClick={toggleSidebar}>
           {isSidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          </VscLayoutSidebarLeft>
          <ProfilePage></ProfilePage>
          <SaleProducts></SaleProducts>
        </div>
      </div>

      {/* <FooterMenu></FooterMenu> */}
    </>
  );
};

export default ProfilePageLayout;
