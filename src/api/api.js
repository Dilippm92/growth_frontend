import axios from 'axios';

const baseUrl = 'http://localhost:5000/api'; 


// Function to make the API call
export const sendWebsiteURL = (inputValue) => {
    const requestData = {
      websiteURL: inputValue,
    };
  
    return axios
      .post(`${baseUrl}/receive-data`, requestData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  };

export const fetchData = async () => {
  try {
    const response = await axios.get(`${baseUrl}/allinsights`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const updateFavorite = async (itemId) => {
    try {
      const response = await axios.put(`${baseUrl}/updateFavorite/${itemId}`);
      return response.data;
    } catch (error) {
      console.error('Error updating favorite status:', error);
      throw error;
    }
  };

  export const deleteItem = async (itemId) => {
    try {
      const response = await axios.delete(`${baseUrl}/deleteItem/${itemId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting item:', error);
      throw error;
    }
  }