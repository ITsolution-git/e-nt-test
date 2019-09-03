import axios from 'axios';
import firebase from 'react-native-firebase';

const BASE_URL = 'https://tiwm7h1y5k.execute-api.us-east-2.amazonaws.com/stage';

import store from '../../store';


const axiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 120000,
	params: {},
	headers: {
		'Content-Type': 'application/json'
	}
});

axiosInstance.interceptors.request.use(
	(conf, request) => {
		const token = store.getState().profile.fbToken;
		console.log('---------------');
		console.log(conf.url);
		console.log(token);
		console.log('---------------');
		conf.headers.common['Authorization'] = `Bearer ${token}`;
		return conf;
	},
	(error) => Promise.reject(error)
);


axiosInstance.interceptors.response.use(
	(resp) => {
		return resp;
	}, 
	(error) => {
		if (error.response) {
			console.log(error.response)
		}
		throw error;
	}
)

export const api = {
	axiosInstance,
	async get (resource, params) {
		return await axiosInstance.get(`${BASE_URL}/${resource}`)
	},
	async post (resource, body) {
   		return await axiosInstance.post(`${BASE_URL}/${resource}`, body)
 	},
 	async patch (resource, body) {
  	return await axiosInstance.patch(`${BASE_URL}/${resource}`, body)
 	},
 	async put (resource, body) {
  	return await axiosInstance.put(`${BASE_URL}/${resource}`, body)
 	},
 	async delete (resource, body) {
  	return await axiosInstance.delete(`${BASE_URL}/${resource}`, body)
 	},
 	async upload (resource, body) {
   return await axiosInstance.post(`${BASE_URL}/${resource}`, body, {
     headers: {
       'Content-Type': 'multipart/form-data'
     }
   })
 }
}