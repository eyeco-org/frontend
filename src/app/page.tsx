/* eslint-disable simple-import-sort/imports */
'use client';

import '@/lib/env';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 이벤트 발생 시 visible을 false로 설정
      setIsVisible(false);

      // 이전 타이머가 있으면 취소
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }

      // 1초 후에 visible을 true로 변경하는 타이머 설정
      timeoutRef.current = window.setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);

      // 컴포넌트 언마운트 시 타이머를 취소
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleButton = () => {
    router.replace('/admin');
  };

  return (
    <div
      className='w-full h-full flex items-center justify-center bg-black text-neutral-100 text-[52px] bg-cover'
      style={{ backgroundImage: 'url(/images/Background.png)' }}
    >
      <div className='fixed left-[600px] top-[525px]'>
        <Button
          className='max-w-[521px] w-full px-8 py-8 gap-4'
          onClick={handleButton}
        >
          <Image alt='시작하기' src='/svg/gamepad.svg' width={16} height={16} />
          <p className='text-xl font-medium'>GenMe로 놀아보기</p>
        </Button>
      </div>
    </div>
  );
}
