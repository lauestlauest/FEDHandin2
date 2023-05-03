let api_base_url = 'https://localhost:7181/api';
let jwy = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJib3NzQG0uZGsiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJNYW5hZ2VyIiwiTW9kZWxJZCI6Ii0xIiwibmJmIjoiMTY4MzAyOTYzMSIsImV4cCI6IjE2ODMxMTYwMzEifQ.JpaTEjLfjWDJyZGwVnrq02WjtNk6dvIwUM3yyVN7mfQ'
//change to get jwt for where ever we save it

export async function getData(endpoint) {
  const config = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("jwt"),
      'Content-Type': 'application/json'
    }
  }

  return doFetch(endpoint, config);
}

export async function postData(endpoint, body) {
  const config = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("jwt"),
      'Content-Type': 'application/json',
    },
  }
  return doFetch(endpoint, config);
}

export async function updateData(endpoint, body) {
  const config = {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      Authorization: "Bearer " + localStorage.getItem("jwt"),
      "Content-Type": "application/json",
    },
  };
  return doFetch(endpoint, config);
}

export async function deleteData(endpoint) {
  const config = {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("jwt"),
      "Content-Type": "application/json",
    },
  };

  return doFetch(endpoint, config);
}

async function doFetch(endpoint, config) {
  let response = await window.fetch(`${api_base_url}/${endpoint}`, config);
  if (response.ok) {
    return await response.json();
  } else {
    const errorMessage = await response.text();
    console.log(`Error: ${JSON.stringify(response)}`);
    throw new Error(errorMessage);
  }
}
