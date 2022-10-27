import client from './client';

// 로그인
export const login = ({ userId, password }) =>
    client.post('/api/auth/login', { userId, password });

// 회원가입
export const register = ({ userId,username, password,nickname,gender,add,tel, passwordConfirm,email }) =>
    client.post('/api/auth/register', { userId,username, password,nickname,gender,add,tel, passwordConfirm,email });

export const registerupdate = ({ userId,password,nickname,add,tel,passwordConfirm,email }) =>
    client.patch('/api/auth/registerupdate', { userId,password,nickname,add,tel, passwordConfirm,email });

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');

// 로그아웃
export const logout = () => client.post('/api/auth/logout');

export const removeUser = userId => client.delete(`/api/auth/${userId}`);
