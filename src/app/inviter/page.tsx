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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  nickname: z.string(),
  limit: z.string({
    required_error: 'Please select limit.',
  }),
});

export default function InviterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      nickname: '',
      limit: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className='flex flex-col justify-center mx-auto w-[440px] text-neutral-100'>
      <div className='text-2xl mb-12 text-center font-bold'>초대하는 사람</div>
      <div className='p-[25px] border rounded-md border-neutral-900 bg-neutral-1000'>
        <div className='text-sm mb-4 text-sky-500'>
          이 친구는 누구일까요? 친구를 맞춰보는게임 시작!
        </div>
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
              name='limit'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>참여 인원</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    // defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className='bg-neutral-900 border-neutral-800'>
                        <SelectValue placeholder='참여 인원을 선택해주세요' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className='bg-neutral-900 border-neutral-800'>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                        <SelectItem
                          key={n}
                          value={`${n}`}
                          className='focus:bg-neutral-800 focus:text-neutral-100 text-neutral-100'
                        >
                          {n}명
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='!mt-4'>
              초대 QR코드 생성하기
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
