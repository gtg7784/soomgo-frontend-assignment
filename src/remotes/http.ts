import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://assets.cdn.soomgo.com/',
});

export const http = {
  get: function get<Response = unknown>(url: string) {
    return axios.get<Response>(url).then((res) => res.data);
  },
  post: function post<Request = any, Response = unknown>(
    url: string,
    data?: Request,
  ) {
    return axios.post<Response>(url, { ...data }).then((res) => res.data);
  },
};
