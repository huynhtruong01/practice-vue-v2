import axios from "axios"
export * as postApi from "./postApi"

const axiosClient = axios.create({
  baseURL: "https://6530af1e6c756603295eeaf7.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
})

axiosClient.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axiosClient.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default axiosClient
