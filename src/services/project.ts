import request from "@/services/request";

export function SearchProject(params: any) {
  return request.get(`/project/search`, params);
}

export function InsertProject(params: any) {
  return request.post(`/project/insert`, params)
}

export function UpdateProject(params: any) {
  return request.post(`/project/update`, params)
}


