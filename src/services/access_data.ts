import request from "./request";

export interface Statistic {
  total_number: number,
  recent_week_number: number,
  recent_month_number: number,
  total_ip_number: number,
  recent_month_ip_number: number,
}

export enum AccessPage {
  PageInfo,
  PageNavigation,
  PageStatistics,
  PageLeetcode,
  PageReport,
  PageProject,
  PageTomorrow
}

export function sendAccessInfo(params: any, page: number) {
  return request.get(`/access/insert-data/${page}`, params);
}

export function getAccessInfo(params: any) {
  return request.get(`/access/info`, params);
}

export function getAccessStatistics(params: any) {
  return request.get(`/access/statistics`, params)
}

export function getAccessStatisticsMid(params: any) {
  return request.get(`/access/statistics-mid`, params)
}
