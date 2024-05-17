'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  skill: z.string(),
  mbti: z.string(),
  primaryPlace: z.string(),
  info: z.string(),
  interest: z.string(),
});

export default function IntroduceForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skill: '',
      mbti: '',
      primaryPlace: '',
      info: '',
      interest: '',
    },
  });

  // function onSubmit(values: z.infer<typeof formSchema>) {
  function onSubmit() {
    // console.log(values);

    router.replace('/user/success');
  }

  return (
    <div className='flex flex-col justify-center mx-auto w-[744px] text-neutral-100'>
      <div className='text-2xl mb-12 text-center font-bold'>
        자기소개를 작성해보세요
      </div>
      <div className='p-[25px] rounded-md border border-neutral-900 bg-neutral-1000'>
        <div className='text-sky-500 mb-4'>나를 소개해주세요</div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
            <FormField
              control={form.control}
              name='skill'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>스택</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='기술 스택'
                      {...field}
                      className='bg-neutral-900 border-neutral-800'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='mbti'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>MBTI</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='mbti'
                      {...field}
                      className='bg-neutral-900 border-neutral-800'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='primaryPlace'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>주요 활동지</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='primaryPlace'
                      {...field}
                      className='bg-neutral-900 border-neutral-800'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='info'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>💁 나를 소개해주세요</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='info'
                      {...field}
                      className='bg-neutral-900 border-neutral-800'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='interest'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>📚 취미와 관심사는요</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='interest'
                      {...field}
                      className='bg-neutral-900 border-neutral-800'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='!mt-4'>
              자기소개 아바타 생성하기
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
