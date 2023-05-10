import React from 'react'
import { useState , useEffect } from "react";
import {postData , getData} from "../services/apiservice" 
import Select from "react-select";


export function AddExpenseToJob() {
  const [expense, setExpense] = useState({modelId : "", jobId : "", date : "", text : "", amount : "" });
  const [jobs, setJobs] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [modelId, setModelId] = useState("")

  useEffect(() => {
      const user = localStorage.getItem("currentUser");
      if (user) {
          setCurrentUser(JSON.parse(user));
      }
  },[]);

  useEffect(() => {
      if (currentUser.modelId) {
          setModelId(currentUser.modelId);
      }
  }, [currentUser]);

  useEffect(() => {
      if (modelId) {
        const getjobs = async () => {
            const data = await getData("Jobs/");
            setJobs(data);
        };
        getjobs();
        setExpense({...expense, modelId: modelId})
      }
  }, [modelId]);

  const onSubmit = () => {
    console.log(JSON.stringify(expense))
    postData("Expenses" , expense)
  }

  return (
      <div className='view'>
          <h2>Add expense to job</h2>
          <form onSubmit={onSubmit}>
              <Select
                  onChange={(event) => {setExpense({...expense, jobId: event.jobId})}}
                  options={jobs}
                  getOptionLabel={(options) => options.customer + ". jobId: " + options.jobId}
                  getOptionValue={(options) => options.jobId}
                  placeholder="Job"
              />

              <input type='dateTime-local' onChange={(event) => {setExpense({...expense, date: event.target.value})}} />
              <br/>

              <input type='text' onChange={(event) => {setExpense({...expense, text: event.target.value})}} placeholder='Text' />
              <br/>

              <input type='number' onChange={(event) => {setExpense({...expense, amount: event.target.value})}} />
              <br/>
              
              <input type="submit"/>
          </form>
      </div>
  );
}