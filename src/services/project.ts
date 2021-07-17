import request from "@/services/request";

export function SearchProject(params: any) {
  return request.get(`/project/search`, params);
}

export function PostInsertProject(params: any) {
  return request.post(`/project/create`, params)
}

export function PostUpdateProject(params: any) {
  return request.post(`/project/update`, params)
}


