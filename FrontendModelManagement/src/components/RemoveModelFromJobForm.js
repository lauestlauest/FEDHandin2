import React from 'react'
import { useState , useEffect } from "react";
import Select from "react-select";
import {deleteData, getData} from "../services/apiservice" 


export function RemoveModelFromJobForm() {
  const [jobs, setJobs] = useState([])
  const [models, setModels] = useState([])
  const [jobId, setJobId] = useState(0)
  const [modelId, setModelId] = useState(0)
  const [text, setText] = useState("")
   
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

const onSubmit = async () => {
    try{
      await deleteData("Jobs/" + jobId+ "/model/" + modelId)
      setText("Sucess")
    }
    catch(error){
      console.log(JSON.stringify(error));
      setText("bad request")
    }
}

  return (
    <div className='view'>
      <h2>Remove Model from Job</h2>
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
        <p>{text}</p>
     </form>

    </div>
  );
};
