import axios from "axios";

var api = axios.create();
// api.defaults.baseURL = 'http://172.16.3.174:5432/';
api.defaults.baseURL = 'http://192.168.95.190:5432/';
api.defaults.headers.common['Content-Type'] = 'application/json';

export default api;