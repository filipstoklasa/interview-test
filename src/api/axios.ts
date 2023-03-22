import axios from "axios";
import type { AxiosRequestConfig } from "axios";

const baseUrl = "http://numbersapi.com";

const config: AxiosRequestConfig = {
	baseURL: baseUrl,
};

export default axios.create(config);
