let api_base_url = 'https://localhost:44368/api';

export async function getData(endpoint,) {
  const config = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("token"),
      'Content-Type': 'application/json'
    }
  }

  return doFetch(endpoint, config);
}

export async function postData(endpoint, body,) {
  const config = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("token"),
      'Content-Type': 'application/json',
    },
  }
  return doFetch(endpoint, config);
}

export async function updateData(endpoint, body) {
  const config = {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("token"),
      'Content-Type': 'application/json',
    },
  }
  return doFetch(endpoint, config);
}

export async function deleteData(endpoint) {
  const config = {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("token"),
      'Content-Type': 'application/json',
    },
  }

  return doFetch(endpoint, config);
}

async function doFetch(endpoint, config) {
  let response = await window.fetch(`${api_base_url}/${endpoint}`, config);
  if (response.ok) {
    return await response.json();
  } else {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}
