
import { PRIVATE_API } from '../../../config/axios';
import { BlogPayload, BlogType } from "../../types/shared";

export const create_blog = async (payload: BlogPayload): Promise<BlogType> => {
  const response = await PRIVATE_API.post('/blogs', payload);
  return response.data;
};

export const get_blogs = async (): Promise<BlogType[]> => {
  const response = await PRIVATE_API.get('/blogs');
  return response.data;
};

export const edit_blog = async (id: string, payload: BlogPayload): Promise<BlogType> => {
  const response = await PRIVATE_API.patch(`/blogs/${id}`, payload);
  return response.data;
};

export const delete_blog = async (id: string): Promise<void> => {
  await PRIVATE_API.delete(`/blogs/${id}`);
};
export const get_blog_by_id = async (id: string): Promise<BlogType> => {
  const response = await PRIVATE_API.get(`/blogs/${id}`);
  return response.data;
};