export const api = "https://turingwash.azurewebsites.net/api"
export const uploads = "https://turingwash.azurewebsites.net/uploads"

export const requestConfig = (method, data, token = null, image = null, token_admin = null) => {
  let config;

  if (image) {
    config = {
      method,
      body: data,
      headers: {}
    }
  } 
  else if (method === "DELETE" || data === null) {
    config = {
      method,
      headers: {}
    }
  } else {
    config = {
      method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    };
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (token_admin) {
    config.headers.Authorization_Admin = `Bearer ${token_admin}`;
  }

  return config;
};