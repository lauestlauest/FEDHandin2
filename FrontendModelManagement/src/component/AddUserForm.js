import { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from 'react'
import React from 'react'
import {AddUserService} from "../services/adduserservice"


export function AddUserForm() {

   const {register, handleSubmit} = useForm({ shouldUseNativeValidation: true });
   const [job , setjob] = useState(1);
   

  const onSubmit = async (data) => {
    AddUserService( data, job)
  }

  useEffect(() => {
    document.title = `job number is ${job}`; //for testing
  },[job]);
 
    
  if (job == 1){
  return (
    <div className='view'>
        <form onSubmit= {handleSubmit(onSubmit)}>  
          
        <input {...register("firstName")} placeholder="First name"/>
          <br/>
  
        <input {...register("lastName", { required: true })} placeholder="Last name" />
          <br/>

        <input {...register("email", { required: true })} type="email" placeholder="Email"/>
          <br/>

        <input {...register("password", { required: true })} type="Password" placeholder="Password"/>
          <br/>

        <select onChange={(event) => setjob(event.target.value)}>
            <option value='1' >Manager</option>
            <option value='0'>Model</option>
        </select>
         <br/>

          <input type="submit"/>
        </form>
    </div>
  );
  }
  else{
    return(

      <h1>fff</h1>

    );
  }
}

