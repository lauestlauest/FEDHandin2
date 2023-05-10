import {postData} from "../services/apiservice" 

export function AddUserService(body,  IsManager){
  return postData( postUrl(IsManager) , body)
};

const postUrl = (IsManager) => {
  if (IsManager === 1){
    return 'Managers'
  }
  return 'Models'
}


