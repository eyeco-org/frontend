'use client';

import Image from 'next/image';
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
  const navigate = useRouter();

  const [userList, setUserList] = useState<
    { name: string; status: string; avartarId: string }[]
  >([users[0], users[1]]);

  useEffect(() => {
    setUserList((prev) => [...prev, users[2]]);

    setTimeout(() => {
      setUserList((prev) => [...prev, users[3]]);
    }, 2000);

    setTimeout(() => {
      setUserList((prev) => [...prev, users[4]]);
    }, 2560);

    setTimeout(() => {
      setUserList((prev) => [...prev, users[5]]);
    }, 3200);
  }, []);

  useEffect(() => {
    if (userList.length >= 6) navigate.replace('/rank');
  }, [userList, navigate]);

  return (
    <div className='w-full max-w-full h-full flex flex-col items-center relative'>
      <div className='flex flex-col gap-y-36 mt-24'>
        <p className='text-neutral-100 text-center text-2xl font-bold'>
          아직{' '}
          <span className='text-sky-600 text-bold'>
            {6 - userList.length}명의
          </span>{' '}
          친구가 문제를 풀고 있어요
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
                <Image
                  alt='유저없음'
                  src='/images/face/no_user.png'
                  width={111}
                  height={111}
                />
                // <div className='w-[111px] h-[111px] bg-gradient-to-b to-custom-end from-custom-start rounded-full' />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
