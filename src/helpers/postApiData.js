import axios from "axios";
export const postApiData = async (routeName, data) => {
  try {
    const headers = {
      "Accept-Language": "en",
      Accept: "application/json",
      "x-api-key": "",
    };

    const response = await axios.post(
      process.env.REACT_APP_API_LOCAL_URL + routeName,
      data,
      { headers }
    );
    
    
   return {
     status: response.status,
     message: response.data.message,
     data: response.data.data
   }

  } catch (error) {
    
    return  {
      status: error.response.status,
      message: error.response.data.message,
      data: error.response.data.errors
    }
  }
};
