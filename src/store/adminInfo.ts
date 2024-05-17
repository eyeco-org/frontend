import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware'

interface AdminInfoState {
  nickname: string;
  setNickname: (nickname: string) => void;
}

const useAdminInfoStore = create<AdminInfoState>()(persist((set) => ({
  nickname: '',
  setNickname: (nickname) => set(() => ({ nickname })),
})
,{
  name: 'admin-nickname',
  storage: createJSONStorage(() => sessionStorage)
}));

export { useAdminInfoStore };
