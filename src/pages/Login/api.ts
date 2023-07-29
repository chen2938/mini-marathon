import { request } from '@umijs/max';

export function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem('user') ?? '') as API.CurrentUser;
  } catch {
    return undefined;
  }
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin() {
  await request<Record<string, any>>('/login/outLogin', {
    method: 'POST',
  });
  localStorage.setItem('user', '');
}

/** 登录接口 POST /api/login/account */
export async function login(body: API.LoginParams) {
  const res = await request<API.LoginResult>('/login/account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
  });
  localStorage.setItem('user', JSON.stringify({ name: body.username }));
  return res;
}
