'use client';

import { zodResolver } from '@hookform/resolvers/zod';
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

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  nickname: z.string(),
  skill: z.string(),
  mbti: z.string(),
  primaryPlace: z.string(),
  info: z.string(),
  interest: z.string(),
});

export default function GuestForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      nickname: '',
      skill: '',
      mbti: '',
      primaryPlace: '',
      info: '',
      interest: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className='flex flex-col justify-center mx-auto w-[440px]'>
      <div>초대받은 사람</div>
      <div className='p-[25px] border rounded-md'>
        <div className=''>나를 소개해주세요</div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이름</FormLabel>
                  <FormControl>
                    <Input placeholder='이름을 입력해주세요' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='nickname'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>별명</FormLabel>
                  <FormControl>
                    <Input placeholder='별명을 입력해주세요' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='skill'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>기술스택</FormLabel>
                  <FormControl>
                    <Input placeholder='기술 스택' {...field} />
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
                  <FormLabel>mbti</FormLabel>
                  <FormControl>
                    <Input placeholder='mbti' {...field} />
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
                  <FormLabel>주요활동지</FormLabel>
                  <FormControl>
                    <Input placeholder='primaryPlace' {...field} />
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
                  <FormLabel>자기소개</FormLabel>
                  <FormControl>
                    <Input placeholder='info' {...field} />
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
                  <FormLabel>취미/관심사</FormLabel>
                  <FormControl>
                    <Input placeholder='interest' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>제출하고 퀴즈풀기</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
