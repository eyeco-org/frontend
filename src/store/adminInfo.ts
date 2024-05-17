import { create } from 'zustand';

interface AdminInfoState {
  nickname: string;
  setNickname: (nickname: string) => void;
}

const useAdminInfoStore = create<AdminInfoState>()((set) => ({
  nickname: '',
  setNickname: (nickname) => set(() => ({ nickname })),
}));

export { useAdminInfoStore };
