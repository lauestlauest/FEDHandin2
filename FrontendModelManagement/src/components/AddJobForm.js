
import { useForm } from "react-hook-form";
import {postData} from "../services/apiservice" 
import React from 'react'

export function AddJobForm() {
    const {register, handleSubmit} = useForm({ shouldUseNativeValidation: true });


    const onSubmit = async (data) => {
        console.log(JSON.stringify(data)) //for testing
        postData("Jobs", data)
    }

  return (
    <div className='view'>
    <h2>Create New Job</h2>
    <form onSubmit= {handleSubmit(onSubmit)}>  
      
    <input {...register("customer")} placeholder="customer"/>
      <br/>

    <input {...register("startDate", { required: true })} type = "datetime-local" placeholder="startDate" />
      <br/>

    <input {...register("days", { required: true })} type="number" placeholder="Days" />
      <br/>

    <input {...register("location", { required: true })} placeholder="location"/>
      <br/>

    <input {...register("comments", { required: true })} type="comments" placeholder="Password"/>
      <br/>

      <input type="submit"/>
    </form>
</div>
);
}
