// api/partner.ts

import { PRIVATE_API } from '../../../config/axios';
import { PartnerPayload, PartnerType } from "../../types/shared";

export const create_partner = async (payload: PartnerPayload): Promise<PartnerType> => {
  const response = await PRIVATE_API.post('/partners', payload);
  return response.data;
};

export const get_partners = async (): Promise<PartnerType[]> => {
  const response = await PRIVATE_API.get('/partners');
  return response.data;
};

export const edit_partner = async (id: string, payload: PartnerPayload): Promise<PartnerType> => {
  const response = await PRIVATE_API.patch(`/partners/${id}`, payload);
  return response.data;
};

export const delete_partner = async (id: string): Promise<void> => {
  await PRIVATE_API.delete(`/partners/${id}`);
};
