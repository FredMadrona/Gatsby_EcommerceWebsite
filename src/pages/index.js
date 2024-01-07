import React from "react"

import { isLoggedIn } from "../services/auth"
import HomePageLayout from "../components/HomePageLayout"
import Login from "../components/login"
export default function index() {
  return (
   
      <p>
        {isLoggedIn() ? (
          <>
        <HomePageLayout></HomePageLayout>
           
          </>
        ) : (
          <>
         
         <Login></Login>
          </>
        )}
      </p>
 
  )
}