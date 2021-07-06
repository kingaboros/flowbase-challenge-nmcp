export const REQUEST_API_DATA = 'REQUEST_API_PROPERTIES';
export const RECEIVE_API_DATA = 'RECEIVE_API_PROPERTIES';

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = (data: any) => ({
  type: RECEIVE_API_DATA,
  data,
});
