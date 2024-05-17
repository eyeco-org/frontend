'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { useAdminInfoStore } from '@/store/adminInfo';

export default function Page() {
  const handleClickCopy = () => {
    return null;
  };
  const username = useAdminInfoStore((state) => state.nickname);

  return (
    <div className='w-full max-w-full h-full flex flex-col items-center relative'>
      <p className='text-neutral-100 text-center text-2xl font-bold'>
        {username}님의 <br /> 초대 링크가 생성됐어요.
      </p>
      <div className='flex flex-col gap-6 mt-48'>
        <Button
          className='max-w-[521px] w-full px-8 py-8 gap-4'
          onClick={handleClickCopy}
        >
          <Image
            alt='링크 복사하기'
            src='/svg/link.svg'
            width={16}
            height={16}
          />
          <p>링크 복사하기</p>
        </Button>
        <Link href='/admin/introduce'>
          <Button className='max-w-[521px] w-full bg-transparent px-8 py-8 gap-4 border border-neutral-100 hover:bg-neutral-800'>
            <Image
              alt='자기소개 작성하기'
              src='/svg/pencil.svg'
              width={16}
              height={16}
            />
            <p className='text-neutral-100'>자기소개 작성하기</p>
          </Button>
        </Link>
      </div>
    </div>
  );
}
