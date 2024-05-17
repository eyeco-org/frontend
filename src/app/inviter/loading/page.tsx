'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const users = [
  {
    name: 'Alice',
    status: 'done',
    avartarId: '1',
  },
  {
    name: 'Bob',
    status: 'loading',
    avartarId: '2',
  },
  {
    name: 'Charlie',
    status: 'done',
    avartarId: '3',
  },
  {
    name: 'David',
    status: 'loading',
    avartarId: '4',
  },
  {
    name: 'Eve',
    status: 'done',
    avartarId: '5',
  },
  {
    name: 'Frank',
    status: 'loading',
    avartarId: '6',
  },
];

export default function page() {
  return (
    <div className='w-full max-w-full h-full flex flex-col items-center relative'>
      <div className='flex flex-col gap-y-36 mt-24'>
        <p className='text-neutral-100 text-center text-2xl font-bold'>
          <span className='text-sky-600 text-bold'>4명이</span>
          작성을 완료하면 게임이 시작돼요!
        </p>
        <div className='flex gap-4'>
          {users.map((user, index) => (
            <div key={index}>
              {user.status === 'done' ? (
                <Avatar className='w-[111px] h-[111px]'>
                  <AvatarImage
                    src={`/images/avatar/Avatar-Images-${user.avartarId}.png`}
                  />
                  <AvatarFallback>{user.name}</AvatarFallback>
                </Avatar>
              ) : (
                <div className='w-[111px] h-[111px] bg-gradient-to-b to-custom-end from-custom-start rounded-full' />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}