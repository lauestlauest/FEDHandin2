import { useState } from "react";
import { useForm } from "react-hook-form";
import React from 'react'
import {AddUserService} from "../services/adduserservice"

export function AddUserForm() {

   const {register, handleSubmit} = useForm({ shouldUseNativeValidation: true });
   const [data, setData] = useState("");

   const onSubmit = async (data) => {
    setData(data)
    AddUserService( data , true)
    console.log(data)
  }
    

  return (
    <div className='view'>
        <form onSubmit= {handleSubmit(onSubmit)}>  
          
        <input {...register("firstName")} placeholder="First name"/>
          <br/>
  
        <input {...register("lastname", { required: true })} placeholder="Last name" />
          <br/>

        <input {...register("email", { required: true })} type="email" placeholder="Email"/>
          <br/>

        <input {...register("Passwprd", { required: true })} type="Password" placeholder="Password"/>
          <br/>

          
        <select  >
            <option value="true">Manager</option>
            <option value="false">Model</option>
        </select>
         <br/>

          <input type="submit"/>
        </form>
    </div>
  );
}

