'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { KeyboardEvent, useState } from 'react';

import { fetcher } from '@/lib/fetch';

import AnswerDialog from '@/components/AnswerDialog';
import Chat from '@/components/Chat';
import HintCard from '@/components/HintCard';

export default function ChatPage() {
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleEnterDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      e.key === 'Enter' &&
      !e.shiftKey &&
      e.nativeEvent.isComposing === false
    ) {
      e.preventDefault();

      if (message.includes('문주')) {
        setIsSuccess(true);
        return;
      }

      if (message.trim()) {
        // Here, you can handle the message sending logic
        setMessages((prev) => [...prev, { role: 'user', content: message }]);
        fetcher(message).then((res) => {
          setMessages((prev) => [
            ...prev,
            { role: 'bot', content: res.choices[0].message.content },
          ]);
        });
        setMessage('');
      }
    }
  };

  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [],
  );

  const navigate = useRouter();
  const handleToggleIsSuccess = (isSuccess: boolean) => {
    setIsSuccess(isSuccess);
    navigate.push('/rank/loading');
  };

  return (
    <>
      <div className='w-full max-w-full h-screen flex flex-col relative'>
        {messages.length === 0 && (
          <div className='flex flex-col gap-10 justify-center items-center mt-24'>
            <p className='text-center font-bold text-2xl text-neutral-100'>
              누구인지 맞춰보세요!
            </p>
            <p className='text-center font-bold text-md text-neutral-300'>
              (추천 질문)
            </p>
            <div className='flex gap-2'>
              <HintCard type='plate' message='좋아하는 음식이 뭐야?' />
              <HintCard type='cat' message='강아지 vs 고양이' />
              <HintCard type='movie' message='좋아하는 영화가 뭐야?' />
            </div>
          </div>
        )}
        <div className='relative h-full w-full px-4 flex flex-col flex-1 overflow-auto transition-width'>
          <div className='flex flex-col gap-2 flex-1 overflow-hidden'>
            {messages.map((msg, idx) => (
              <Chat key={idx} direction={msg.role === 'bot' ? 'left' : 'right'}>
                {msg.content}
              </Chat>
            ))}
          </div>
          <div className='w-full md:pt-0 dark:border-white/20 md:border-transparent md:dark:border-transparent juice:w-full mb-4'>
            <div className='px-3 text-base m-auto md:px-5 lg:px-1 xl:px-5'>
              <div className='mx-auto flex flex-1 gap-3 text-base juice:gap-4 juice:md:gap-6'>
                <form className='w-full'>
                  <div className='relative flex h-full max-w-full flex-1 flex-col'>
                    <div className='absolute bottom-full left-0 right-0' />
                    <div className='flex w-full items-center'>
                      <div className='flex w-[95%] mr-4 flex-col gap-1.5 rounded-[26px] p-1.5 transition-colors bg-[#f4f4f4] dark:bg-token-main-surface-secondary'>
                        <div className='flex items-end gap-1.5 md:gap-3.5'>
                          <button
                            aria-haspopup='dialog'
                            aria-expanded='false'
                            aria-controls='radix-:rau:'
                            data-state='closed'
                          ></button>
                          <div className='flex min-w-0 flex-1 flex-col'>
                            <textarea
                              id='prompt-textarea'
                              tabIndex={0}
                              data-id='request-WEB:d2fc1231-e713-474b-8a3e-b03e31f43cc2-4'
                              dir='auto'
                              rows={1}
                              placeholder='메시지 ChatGPT'
                              style={{
                                height: 40,
                                overflowY: 'hidden',
                                background: 'transparent',
                              }}
                              className='m-0 resize-none border-0 bg-transparent px-0 text-token-text-primary focus:ring-0 focus-visible:ring-0 max-h-[25dvh]'
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              onKeyDown={handleEnterDown}
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        className='mb-1 mr-1 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black  disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:bg-white dark:text-black dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary'
                        disabled={message === ''}
                      >
                        <Image
                          alt='전송'
                          src='/svg/send.svg'
                          width={24}
                          height={24}
                        />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSuccess && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <AnswerDialog
            type='congrat'
            isOpen={isSuccess}
            handleOpenDialog={handleToggleIsSuccess}
          />
        </div>
      )}
    </>
  );
}
