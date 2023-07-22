import { removeUser, setUser } from '../util.js';
import * as api from './api.js';

export async function register(username, password) {
  const user = await api.post('/users', { username, password });
  user.username = username;
  setUser(user);
}

export async function login(username, password) {
  const user = await api.post('/login', { username, password });
  user.username = username;
  setUser(user);
}

export async function logout() {
  removeUser();
}
