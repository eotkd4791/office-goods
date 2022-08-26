import { useEffect, useState } from 'react';
import usePersistStore from 'renderer/hooks/usePersistStore';
import usePostStore from 'renderer/store/post';
import { HirePost } from 'renderer/types/post';

export default function usePost() {
  const { posts: storedPosts, setPosts: setStoredPosts } = usePostStore();
  const [posts, setPosts] = useState<HirePost[]>(storedPosts);

  usePersistStore<HirePost[]>({ key: 'post.posts', setter: setStoredPosts });

  useEffect(() => {
    setPosts(storedPosts);
  }, [storedPosts]);

  return { posts, setPosts };
}
