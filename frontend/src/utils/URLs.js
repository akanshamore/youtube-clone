const BASE_URL = "http://localhost:3000";
export const LOGIN_URL = `${BASE_URL}/api/auth/login`;
export const REGISTER_URL = `${BASE_URL}/api/auth/register`;

export const CREATE_CHANNEL_URL = `${BASE_URL}/api/channels`;
export const GET_USER_CHANNELS_URL = `${BASE_URL}/api/channels/user`;
export const GET_CHANNEL_BY_ID_URL = `${BASE_URL}/api/channels/:id`;
export const UPDATE_CHANNEL_URL = `${BASE_URL}/api/channels/:id`;
export const DELETE_CHANNEL_URL = `${BASE_URL}/api/channels/:id`;
