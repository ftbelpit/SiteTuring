export const api = "htthttps://turingwash.azurewebsites.net/api"
export const uploads = "https://turingwash.azurewebsites.net/uploads"

export const requestConfig = (method, data, token = null) => {
  let config;

  if (method === "DELETE" || data === null) {
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

  return config;
};