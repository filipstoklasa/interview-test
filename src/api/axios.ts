import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
	baseURL: "http://numbersapi.com",
};

class AxiosClient {
	instance: AxiosInstance;
	constructor() {
		this.instance = axios.create(config);
		console.log('here')
	}

	get get() {
		return this.instance.get;
	}
}

export default new AxiosClient();
