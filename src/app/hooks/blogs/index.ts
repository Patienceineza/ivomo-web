import { useState, useCallback, useEffect } from 'react';
import toast from 'react-hot-toast';
import { get_blogs, create_blog, edit_blog, delete_blog, get_blog_by_id } from '../../api/blogs';
import { BlogType, BlogPayload } from '../../types/shared';

export const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const data:any = await get_blogs();
      setBlogs(data.data);
    } catch (error) {
      toast.error('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  }, []);

  return { blogs, loading, fetchBlogs };
};

export const useCreateBlog = () => {
  const [loading, setLoading] = useState(false);

  const createBlog = async (payload: BlogPayload) => {
    setLoading(true);
    try {
      await create_blog(payload);
      toast.success('Blog created successfully');
    } catch (error) {
      toast.error('Failed to create blog');
    } finally {
      setLoading(false);
    }
  };

  return { loading, createBlog };
};

export const useEditBlog = () => {
  const [loading, setLoading] = useState(false);

  const editBlog = async (id: string, payload: BlogPayload) => {
    setLoading(true);
    try {
      await edit_blog(id, payload);
      toast.success('Blog updated successfully');
    } catch (error) {
      toast.error('Failed to update blog');
    } finally {
      setLoading(false);
    }
  };

  return { loading, editBlog };
};

export const useDeleteBlog = () => {
  const [loading, setLoading] = useState(false);

  const deleteBlog = async (id: string) => {
    setLoading(true);
    try {
      await delete_blog(id);
      toast.success('Blog deleted successfully');
    } catch (error) {
      toast.error('Failed to delete blog');
    } finally {
      setLoading(false);
    }
  };

  return { loading, deleteBlog };
};


export const useFetchBlogById = (blogId: string) => {
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const data:any = await get_blog_by_id(blogId);
        setBlog(data.data);
      } catch (error) {
        toast.error('Failed to fetch blog');
      } finally {
        setLoading(false);
      }
    };

    if (blogId) {
      fetchBlog();
    }
  }, [blogId]);

  return { blog, loading };
};
