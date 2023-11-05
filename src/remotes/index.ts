import { http } from './http';
import { GetFormResponse } from './interface';

export const getForm = <TResponse = GetFormResponse>(id: string) => {
  if (id === '1') {
    return http.get<TResponse>('/data/exam/mock/input_clean.json');
  } else if (id === '2') {
    return http.get<TResponse>('/data/exam/mock/input_lesson.json');
  }

  throw new Error('Invalid form id');
};
