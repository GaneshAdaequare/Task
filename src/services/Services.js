import axios from "axios";
export const GetService = (api) => {
  try {
    return axios.get(api);
  } catch (error) {
    return error
  }
};
