import React from 'react'
import { useState , useEffect } from "react";
import Select from "react-select";
import {postData, getData} from "../services/apiservice" 


export function AddModelToJobForm() {
  const [jobs, setJobs] = useState([])
  const [models, setModels] = useState([])
  const [jobId, setJobId] = useState(0)
  const [modelId, setModelId] = useState(0)
   

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
      postData("Jobs/" + jobId+ "/model/" + modelId)
  }

  return (

    <div className='view'>
      <h2>Add Model To Job</h2>
      <form onSubmit = {onSubmit}>
        <Select onChange={(event) => {setJobId(event.jobId)}} options={jobs} 
          getOptionLabel={(options) => options.customer + ". jobId: " + options.jobId} 
          getOptionValue={(options) => options.jobId } 
          placeholder="Job" 
        />
        <Select onChange={(event) => {setModelId(event.efModelId)}}  options={models} 
          getOptionLabel={(options) => options.firstName + " " + options.lastName }
          getOptionValue={(options) => options.efmodelId }
          placeholder="Model" />
          
        <input type="submit"/>
     </form>

    </div>
  );
};
