import request from './request';

export interface ILeetcodeResponse {
  id: number;
  question_id: number;
  sp_id: string;
  title: string;
  status: string;
  difficulty: number;
  url: string;
}

export function getLeetcodeList(params: any) {
  return request.get("/leetcode/list", params);
}

export function getMonthlyReport(params: any) {
  return request.get("/get-report", params);
}

export function getLeetcodeStatistics(params: any) {
  return request.get("/leetcode/statistics", params)
}
