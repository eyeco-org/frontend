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

export default function UserPage() {
  const router = useRouter();
  // const searchParams = useSearchParams()
  // const user_pk = searchParams.get('admin')
  // console.log(user_pk)

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

  // function onSubmit(values: z.infer<typeof formSchema>) {
  function onSubmit() {
    // console.log(values);

    router.replace('/user/success');
  }

  return (
    <div className='flex flex-col justify-center mx-auto w-[744px] text-neutral-100'>
      <div className='text-2xl mb-12 text-center font-bold'>초대받은 사람</div>
      <div className='p-[25px] rounded-md border border-neutral-900 bg-neutral-1000'>
        <div className='text-[#64748B] mb-4'>나를 소개해주세요</div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이름</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='이름을 입력해주세요'
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
              name='nickname'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>별명</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='별명을 입력해주세요'
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
              제출하고 퀴즈풀기
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
