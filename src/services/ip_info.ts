import {request} from "umi";


export interface IPInfo {
  cip: string,
  cid: string,
  cname: string,
}

export async function getClientIP() {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
  });
}
