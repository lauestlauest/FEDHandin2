import React from "react";
import {postData} from "../services/apiservice" 

// Managers can:
// Add new models
// Add new managers

export function AddUserService(body,  IsManager){
  // var user= {
  //   firstName: {FirstName},
  //   lastName: {Lastname},
  //   email: {Email},
  //   password: {Password}
  // }
  return postData( postUrl(IsManager) , body)

};

const postUrl = (IsManager) => {
  if (IsManager == true){
    return 'Managers'
  }
  return 'Models'
}


