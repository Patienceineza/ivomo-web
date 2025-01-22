// hooks/usePartner.ts

import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { get_partners, create_partner, edit_partner, delete_partner } from '../../api/partners';
import { PartnerType, PartnerPayload } from '../../types/shared';

// Hook for fetching partners
export const useFetchPartners = () => {
  const [loading, setLoading] = useState(false);
  const [partners, setPartners] = useState<PartnerType[]>([]);

  const fetchPartners = async () => {
    setLoading(true);
    try {
      const data:any = await get_partners();
      setPartners(data.data);
    } catch (error) {
      toast.error('Failed to fetch partners');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  return {
    loading,
    partners,
    fetchPartners,
  };
};

// Hook for creating a partner
export const useCreatePartner = () => {
  const [loading, setLoading] = useState(false);

  const handleCreate = async (payload: PartnerPayload) => {
    setLoading(true);
    try {
      await create_partner(payload);
      toast.success('Partner created successfully');
      return true; // Return a success flag
    } catch (error) {
      toast.error('Failed to create partner');
      return false; // Return a failure flag
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleCreate,
  };
};

// Hook for editing a partner
export const useEditPartner = () => {
  const [loading, setLoading] = useState(false);

  const handleEdit = async (id: string, payload: PartnerPayload) => {
    setLoading(true);
    try {
      await edit_partner(id, payload);
      toast.success('Partner updated successfully');
      return true; // Return a success flag
    } catch (error) {
      toast.error('Failed to update partner');
      return false; // Return a failure flag
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleEdit,
  };
};

// Hook for deleting a partner
export const useDeletePartner = () => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      await delete_partner(id);
      toast.success('Partner deleted successfully');
      return true; // Return a success flag
    } catch (error) {
      toast.error('Failed to delete partner');
      return false; // Return a failure flag
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleDelete,
  };
};
