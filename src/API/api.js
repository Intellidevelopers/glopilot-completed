// api.js
const API_BASE_URL = 'https://jsonplaceholder.typicode.com/'; 
// Replace with your API base URL

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};
