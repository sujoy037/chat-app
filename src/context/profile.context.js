import  { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import { auth, database } from "../misc/firebase";


const ProfileContext =createContext();

export const ProfileProvider=({children})=>{
    const [profile,setProfile]=useState(null);
    const[isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
        auth.onAuthStateChanged((authObj)=>{
            //console.log('authObj',authObj);
            if(authObj){

               database.ref(`/profiles/${authObj.uid}`).on('value',(snap)=>{

                // const profileData=snap.val();
                const {name,createdAt}=snap.val();
                //console.log(profileData)
                //console.log('snap',snap);
                const data={
                    name,
                    createdAt,
                    uid:authObj.uid,
                    email:authObj.email,

                }
                setProfile(data);
                setIsLoading(false);
               })

                
               

            }else{

                setProfile(null);
                setIsLoading(false);
            }
        })
    },[])

    return (
        <ProfileContext.Provider value={{profile,isLoading}}>
            {children}
        </ProfileContext.Provider>
    );
}

export const useProfile=()=>useContext(ProfileContext)