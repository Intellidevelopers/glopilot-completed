// api.js
const API_BASE_URL = 'https://jsonplaceholder.typicode.com'; // Replace with your API base URL

export const fetchMessages = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`); // Using /posts as a placeholder
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};
