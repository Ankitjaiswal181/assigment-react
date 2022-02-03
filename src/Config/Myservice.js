import axios from "axios";
import {MAIN_URL} from './Url';
export function getEmployee(){
    return axios.get(MAIN_URL);
}
export function getEmployeeById(id){
    return axios.get(`${MAIN_URL}${id}`)
}
export function deleteEmployee(id){
    return axios.delete(`${MAIN_URL}${id}`);
}
export function addEmployee(data){
    return axios.post(MAIN_URL,data)
}

export function updateEmployee(id,data){
    return axios.put(`${MAIN_URL}${id}`,data)
}