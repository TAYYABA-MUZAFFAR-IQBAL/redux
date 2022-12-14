import axios from "axios";

const API_URL = "http://localhost:2000/student";

// Get users
export const getUsers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  const data = response.data.studentData;
  console.log(data);
  return data;
};
// Delete user
export const deleteUser = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + "/" + goalId, config);
  window.location.reload(false);
  return response.data;
};
const userService = {
  getUsers,
  deleteUser,
};

export default userService;
