'use client';
import { DialogContent } from '@radix-ui/react-dialog';
import Image from 'next/image';

import { Dialog, DialogHeader } from '@/components/ui/dialog';

interface AnswerDialogProps {
  type: 'congrat' | 'wrong';
  isOpen: boolean;
  handleOpenDialog: (prevOpen: boolean) => void;
}

export default function AnswerDialog({
  type,
  isOpen,
  handleOpenDialog,
}: AnswerDialogProps) {
  return (
    <Dialog open={isOpen}>
      <DialogContent className='bg-[#24292D] p-4 rounded-lg'>
        <DialogHeader className='flex items-end'>
          <button
            className='w-6 h-6 z-10'
            onClick={() => handleOpenDialog(false)}
          >
            <Image
              src='/svg/close.svg'
              width={24}
              height={24}
              alt='닫기 버튼'
            />
          </button>
        </DialogHeader>
        {type === 'congrat' && (
          <>
            <div className='relative w-[390px] h-[321px] flex flex-col items-center justify-center'>
              <Image
                src='/images/face/congrat.gif'
                width={206}
                height={206}
                alt='축하하는 얼굴'
              />
              <Image
                src='/images/face/congrat-confetti.gif'
                width={390}
                height={321}
                alt='축하하는 얼굴 효과'
                className='absolute top-0 left-0'
              />
              <p className='text-2xl font-bold text-neutral-100'>정답입니다</p>
            </div>
          </>
        )}
        {type === 'wrong' && (
          <div className='relative w-[390px] h-[321px] flex flex-col items-center justify-center'>
            <Image
              src='/images/face/sad.gif'
              width={206}
              height={206}
              alt='슬퍼하는 얼굴'
            />
            <Image
              src='/images/face/sad-rain.gif'
              width={390}
              height={321}
              alt='슬퍼하는 얼굴 효과'
              className='absolute top-0 left-0'
            />
            <p className='text-2xl font-bold text-neutral-100'>
              왜..날..맞춰주지 않은거야..?
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
