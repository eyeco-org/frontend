'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

// TODO: 유저정보 받아서 아바타 정보 설정해야함.
// TODO: 퀴즈풀러가기 버튼 클릭시 퀴즈풀러 페이지로 이동해야함.
export default function IntroduceSuccess() {
  const router = useRouter();
  const userAvartar = '1';
  const handleClickQuiz = () => {
    router.replace('/user/loading');
  };

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      // 첫 번째에는 0~40%
      setProgress(() => {
        return Math.floor(Math.random() * 40);
      });
    }, 300);
    setTimeout(() => {
      // 첫 번째에는 40~65%
      setProgress((prev) => {
        return prev + Math.floor(Math.random() * 25);
      });
    }, 650);
    setTimeout(() => {
      // 첫 번째에는 65~100%
      setProgress(() => {
        return 100;
      });
    }, 1000);
  }, []);

  return (
    <div className='w-full max-w-full h-full flex flex-col items-center relative'>
      <div className='w-[500px]'>
        <Progress value={progress} color='' />
      </div>
      <div className='max-w-[521px] w-full flex flex-col gap-10 mt-24 justify-center items-center'>
        <p className='text-neutral-100 text-center text-2xl font-bold'>
          {progress !== 100 && 'AI가 나의 아바타를 생성중이에요'}
          {progress === 100 && 'AI가 나의 아바타를 생성했어요'}
        </p>
        <div>
          <Avatar className='w-72 h-72'>
            <AvatarImage
              src={`/images/avatar/Avatar-Images-${userAvartar}.png`}
            />
            <AvatarFallback>loading..</AvatarFallback>
          </Avatar>
        </div>
        <div className='max-w-[521px]'>
          <Button
            className='w-full px-8 py-8 gap-4'
            onClick={handleClickQuiz}
            disabled={progress !== 100}
          >
            <Image
              alt='링크 복사하기'
              src='/svg/gamepad.svg'
              width={16}
              height={16}
            />
            <p>퀴즈 풀러가기</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
