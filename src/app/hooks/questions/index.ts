// hooks/useQuestion.ts

import { useState } from 'react';
import toast from 'react-hot-toast';
import { get_questions, create_question, edit_question, delete_question } from '../../api/questions';
import { QuestionType, QuestionPayload } from '../../types/shared';

export const useQuestion = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const data:any = await get_questions();
      setQuestions(data.data);
    } catch (error) {
      toast.error('Failed to fetch questions');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (payload: QuestionPayload) => {
    setLoading(true);
    try {
      await create_question(payload);
      toast.success('Question created successfully');
      fetchQuestions();
    } catch (error) {
      toast.error('Failed to create question');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (id: string, payload: QuestionPayload) => {
    setLoading(true);
    try {
      await edit_question(id, payload);
      toast.success('Question updated successfully');
      fetchQuestions();
    } catch (error) {
      toast.error('Failed to update question');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      await delete_question(id);
      toast.success('Question deleted successfully');
      fetchQuestions();
    } catch (error) {
      toast.error('Failed to delete question');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    questions,
    fetchQuestions,
    handleCreate,
    handleEdit,
    handleDelete,
  };
};
