import React from "react";
import {postData} from "../services/apiservice" 

// Managers can:
// Add new models
// Add new managers

export function AddUserService(body,  IsManager){
  return postData( postUrl(IsManager) , body)
};

const postUrl = (IsManager) => {
  if (IsManager == 1){
    return 'Managers'
  }
  return 'Models'
}


