import React from 'react'
import { useState , useEffect } from "react";
import { getData} from "../services/apiservice" 

export function ViewJobs(endpoint) {
    const [jobs, setJobs] = useState([])


    useEffect( () => {
        const getjobs = async () =>{
          const data = await getData("Jobs")
          setJobs(data)
        }
        
        getjobs();
    
    },[]);


  return (
    <div>
      <h2>View Jobs</h2>
      <table className="audit table">
            <thead className="table-th">
                  <tr>
                    <th>JobId</th>
                    <th>customer</th>
                    <th>startDate</th>
                    <th>days</th>                
                    <th>location</th>
                    <th>comments</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {jobs.map((x) => (
                    <tr>
                      <td>{x.jobId}</td>
                      <td>{x.customer}</td>
                      <td>{x.startDate}</td>
                      <td>{x.days}</td>
                      <td>{x.location}</td>
                      <td>{x.comments}</td>
                    </tr>
                    ))}
                </tbody>
        </table>

      
    </div>
  );
}

