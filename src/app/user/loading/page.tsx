/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const users = [
  {
    name: 'Alice',
    status: 'done',
    avartarId: '1',
  },
  {
    name: 'Bob',
    status: 'done',
    avartarId: '2',
  },
  {
    name: 'Charlie',
    status: 'done',
    avartarId: '3',
  },
  {
    name: 'David',
    status: 'done',
    avartarId: '4',
  },
  {
    name: 'Eve',
    status: 'done',
    avartarId: '5',
  },
  {
    name: 'Frank',
    status: 'done',
    avartarId: '6',
  },
];

export default function Page() {
  const [userList, setUserList] = useState<
    { name: string; status: string; avartarId: string }[]
  >([]);

  const navigate = useRouter();

  useEffect(() => {
    setUserList((prev) => [...prev, users[0]]);

    setTimeout(() => {
      setUserList((prev) => [...prev, users[1]]);
    }, 2000);

    setTimeout(() => {
      setUserList((prev) => [...prev, users[2]]);
    }, 2560);

    setTimeout(() => {
      setUserList((prev) => [...prev, users[3]]);
    }, 3200);

    setTimeout(() => {
      setUserList((prev) => [...prev, users[4]]);
    }, 4320);

    setTimeout(() => {
      setUserList((prev) => [...prev, users[5]]);
      // navigate.push('/user/chat')
    }, 5010);

    navigate.replace('/user/chat');
  }, []);

  return (
    <div className='w-full max-w-full h-full flex flex-col items-center relative'>
      <div className='flex flex-col gap-y-36 mt-24'>
        <p className='text-neutral-100 text-center text-2xl font-bold'>
          <span className='text-sky-600 text-bold'>
            {6 - userList.length}명이{' '}
          </span>
          작성을 완료하면 게임이 시작돼요!
        </p>
        <div className='flex gap-4'>
          {userList.map((user, index) => (
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
