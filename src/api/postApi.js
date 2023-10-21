import axiosClient from "."

const BASE_URL = "/posts"

export const getAllPosts = async () => {
  return axiosClient.get(BASE_URL)
}

export const getPost = (id) => {
  return axiosClient.get(`${BASE_URL}/${id}`)
}

export const createPost = (data) => {
  return axiosClient.post(BASE_URL, data)
}

export const updatePost = (data) => {
  return axiosClient.put(`${BASE_URL}/${data.id}`, data)
}

export const deletePost = (id) => {
  return axiosClient.delete(`${BASE_URL}/${id}`)
}
