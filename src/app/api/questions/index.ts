import { PRIVATE_API } from '../../../config/axios';
import { QuestionPayload, QuestionType } from '../../types/shared';

export const create_question = async (payload: QuestionPayload): Promise<QuestionType> => {
  const response = await PRIVATE_API.post('/questions', payload);
  return response.data;
};

export const get_questions = async (): Promise<QuestionType[]> => {
  const response = await PRIVATE_API.get('/questions/faqs');
  return response.data;
};

export const edit_question = async (id: string, payload: QuestionPayload): Promise<QuestionType> => {
  const response = await PRIVATE_API.patch(`/questions/${id}`, payload);
  return response.data;
};

export const delete_question = async (id: string): Promise<void> => {
  await PRIVATE_API.delete(`/questions/${id}`);
};
