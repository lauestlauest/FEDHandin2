import { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from 'react'
import React from 'react'
import {AddUserService} from "../services/adduserservice"


export function AddUserForm() {
  const {register, handleSubmit, unregister} = useForm({ shouldUseNativeValidation: true });
   
  const [job , setjob] = useState(1);
   
  const onSubmit = async (data) => {
    console.log(JSON.stringify(data))
    AddUserService( data, job)
  }

  useEffect(() => {
    document.title = `job number is ${job}`; //for testing
    if(job === 1){
    unregister(['phoneNo', 'addresLine1'
          , 'addresLine2', 'zip' 
          , 'city' , 'country' 
          , 'birthdate' , 'nationality'
          , 'height', 'shoeSize'
          ,  'haircolor', 'eyeColor'
          , 'comments' ])
    }
  },[job]);
 
  if (job === 1){
    return (
      <div className='view'>
        <h2>Create a new user</h2>
          <form onSubmit= {handleSubmit(onSubmit)}>  

          <select onChange={(event) => setjob(event.target.value)}>
              <option value='1' >Manager</option>
              <option value='0'>Model</option>
          </select>
          <br/>
            
          <input {...register("firstName")} placeholder="First name"/>
            <br/>
    
          <input {...register("lastName", { required: true })} placeholder="Last name" />
            <br/>

          <input {...register("email", { required: true })} type="email" placeholder="Email"/>
            <br/>

          <input {...register("password", { required: true })} type="Password" placeholder="Password"/>
            <br/>

        

            <input type="submit"/>
          </form>
      </div>
    );
  }
  else{
    return(

      <div className='view'>
        <h2>Create a new user</h2>
        <form onSubmit= {handleSubmit(onSubmit)}>  

        <select onChange={(event) => setjob(event.target.value)} >
            <option value='1' >Manager</option>
            <option value='0'>Model</option>
        </select>
         <br/>
          
        <input {...register("firstName")} placeholder="First name"/>
        <br/>
  
        <input {...register("lastName", { required: true })} placeholder="Last name" />
        <br/>

        <input {...register("email", { required: true })} type="email" placeholder="Email"/>
        <br/>

        <input {...register("phoneNo", { required: true })} type="number" placeholder="PhoneNo"/>
        <br/>

        <input {...register("addresLine1", { required: true })} placeholder="AddresLine1"/>
        <br/>

        <input {...register("addresLine2", { required: true } )} placeholder="AddresLine2"/>
        <br/>

        <input {...register("zip", { required: true })} type="number" placeholder="Zip"/>
        <br/>

        <input {...register("city", { required: true })} placeholder="City"/>
        <br/>

        <input {...register("country", { required: true })} placeholder="Country"/>
        <br/>

        <input {...register("birthdate", { required: true })} type="datetime-local" placeholder="Brithdate"/>
        <br/>

        <input {...register("nationality", { required: true })} placeholder="Nationality"/>
        <br/>

        <input {...register("height", { required: true } )} type="number" placeholder="Height"/>
        <br/>

        <input {...register("shoeSize", { required: true } )} type="number" placeholder="ShoeSize"/>
        <br/>

        <input {...register("haircolor", { required: true } )}  placeholder="HairColor"/>
        <br/>

        <input {...register("eyeColor", { required: true } )}  placeholder="EyeColor"/>
        <br/>

        <input {...register("comments", { required: true } )}  placeholder="Comments"/>
        <br/>

        <input {...register("password", { required: true })}  placeholder="Password"/>
        <br/>

          <input type="submit"/>
        </form>
    </div>

    );
  }
}

