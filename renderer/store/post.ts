import { persistProduce } from 'renderer/utils/storeUtils';
import create from 'zustand';
import { HirePost } from 'renderer/types/post';

interface PostState {
  posts: HirePost[];
  setPosts: (posts: HirePost[]) => void;
  createPost: (post: Omit<HirePost, 'id'>) => void;
  updatePost: (updatedPost: HirePost) => void;
  deletePost: (id: number) => void;
}

const persistPostProduce = persistProduce('post');

const usePostStore = create<PostState>((set) => ({
  posts: [],
  setPosts: (posts) =>
    set(
      persistPostProduce((state) => {
        state.posts = posts;
      })
    ),
  createPost: (post) =>
    set(
      persistPostProduce((state) => {
        const maxId = state.posts.reduce((max, { id }) => Math.max(max, id), 0);
        state.posts.push({
          ...post,
          id: maxId + 1,
        } as HirePost);
      })
    ),
  updatePost: (post) =>
    set(
      persistPostProduce((state) => {
        state.posts.push(post);
      })
    ),
  deletePost: (id) =>
    set(
      persistPostProduce((state) => {
        state.posts = state.posts.filter((post) => post.id !== id);
      })
    ),
}));

export default usePostStore;