import React from 'react'
import { useState , useEffect } from "react";
import {postData , getData} from "../services/apiservice" 
import Select from "react-select";


export function AddExpenseToJob() {
    const [expense ] = useState({modelId : "", jobId : "", date : "", text : "", amount : "" });
    const [jobs, setJobs] = useState([])
    const [models, setModels] = useState([])
  
    useEffect( () => {
    const getjobs = async () =>{
      const data = await getData("Jobs")
      setJobs(data)
    }
    const getmodels = async () =>{
      const data = await getData("Models")
      setModels(data)
    }
    getjobs();
    getmodels();

    },[]);

    const onSubmit = () => {
        console.log(JSON.stringify(expense))
        postData("Expenses" , expense)
    }



  return (
    <div className='view'>
      <h2>Add expense to job</h2>
      <form onSubmit = {onSubmit}>
        <Select onChange={(event) => {expense.jobId =event.jobId}} options={jobs} 
          getOptionLabel={(options) => options.customer + ". jobId: " + options.jobId} 
          getOptionValue={(options) => options.jobId } 
          placeholder="Job" 
        />
        <Select onChange={(event) => {expense.modelId = event.efModelId}}  options={models} 
          getOptionLabel={(options) => options.firstName + " " + options.lastName }
          getOptionValue={(options) => options.efModelId }
          placeholder="Model" />

        <input type='dateTime-local' onChange={(event) => {expense.date =event.target.value}} />
        <br/>

        <input type='text' onChange={(event) => {expense.text =event.target.value}} placeholder='Text' />
        <br/>

        <input type='number' onChange={(event) => {expense.amount =event.target.value}} />
        <br/>
          
        <input type="submit"/>
     </form>

    </div>
  );
}

