import create from 'zustand';

interface UI {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const useStore = create<UI>((set) => ({
  theme: 'light',
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));

export { useStore };
