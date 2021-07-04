﻿export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/navigator',
    name: 'navigator',
    icon: 'smile',
    component: './Navigator'
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/buried-page',
        name: 'buried-page',
        icon: 'smile',
        component: './Admin/Buried-page',
      },
      {
        path: '/admin/consumption',
        name: 'consumption',
        icon: 'smile',
        component: './Admin/Consumption',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    name: 'leetcode',
    icon: 'table',
    path: '/leetcode',
    component: './Leetcode',
  },
  {
    name: 'report',
    icon: 'table',
    path: '/report',
    component: './Report',
  },
  {
    name: 'project',
    icon: 'table',
    path: '/project',
    component: './Project',
  },
  {
    name: 'tomorrow',
    icon: 'table',
    path: '/thanks',
    component: './HelloTomorrow',
  },
  {
    path: '/',
    redirect: '/thanks',
  },
  {
    component: './404',
  },
];
