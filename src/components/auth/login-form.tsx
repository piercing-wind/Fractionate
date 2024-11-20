'use client';
import * as z from 'zod';
import {useForm} from "react-hook-form";
import { useState, useTransition } from 'react';
import {zodResolver} from "@hookform/resolvers/zod";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage
} from "@/components/ui/form";
import { LoginSchema } from '@/schema';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormError, FormSuccess } from '@/components/auth/formMessage';
import { login } from '@/actions/login';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const searchParams = useSearchParams();
  const urlError = searchParams.get('error') === "OAuthAccountNotLinked" ? "Email is already registered with another Sign In Method" : '';

  const form = useForm<z.infer<typeof LoginSchema>>({
   resolver: zodResolver(LoginSchema),
   defaultValues : {
      email: '',
      password: ''
   }
  })
  
  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
   setError('');
   setSuccess('');

   startTransition(() => {
      login(data).then((response)=>{
        setError(response?.error);
        setSuccess(response?.success);

      });

   });
  }
   return (
      <div className="h-screen w-full flex flex-col items-center justify-center overflow-hidden relative text-white">
         <Image
            src='/how-it-works/image-4.svg'
            alt='logo'
            fill
            style={{
               objectFit : 'cover',
               zIndex : -2,
            }} 
            loading='eager'
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
         />
         <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black z-10 opacity-50`}/>
         <Link href='/' className="flex-shrink-0 z-50">
               <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={150}
                  height={50}
                  priority
               />
            </Link>
         <div className="w-[20rem] md:w-[24rem] border-2 border-yellow mt-4 rounded-xl p-4 shadow-x pb-8 overflow-hidden backdrop-blur-2xl z-50">
            <h1 className="text-4xl font-semibold drop-shadow-sm mb-4" >Login </h1>
            <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)}
               className='flex flex-col space-y-4 my-8'
               >   
               <div className='space-y-4 mb-4'>
                  <FormField 
                     control={form.control}
                     name="email"
                     render={({field})=>(
                        <FormItem>
                           <FormLabel className='font-medium text-sm'>Email <span className='text-red-500'>*</span></FormLabel>
                           <FormControl>
                              <Input 
                              {...field}
                              placeholder='yournice@email.com'
                              type='email'
                              disabled={isPending}
                              className='border border-yellow text-white rounded-md text-xs p-2 w-full active:outline-none focus:outline-none focus:ring-2 focus:ring-yellow'
                              autoComplete="email"
                             />
                           </FormControl>
                           <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                        </FormItem>
                     )}
                  />
                  <FormField 
                     control={form.control}
                     name="password"
                     render={({field})=>(
                        <FormItem>
                           <FormLabel className='font-medium text-sm'>Password <span className='text-red-500'>*</span></FormLabel>
                           <FormControl>
                              <Input 
                              {...field}
                              placeholder='Your Secret Password'
                              type='password'
                              disabled={isPending}
                              className='border border-yellow rounded-md text-xs p-2 w-full active:outline-none focus:outline-none focus:ring-2 focus:ring-yellow '
                              autoComplete="current-password"
                              />
                           </FormControl>
                           <Button
                           className=' px-0 text-yellow'
                           variant={'link'}
                           asChild
                           >
                              {/* <Link href='/reset' className='text-yellow text-xs'>Forgot Password?</Link> */}
                           </Button>
                           <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                        </FormItem>
                     )}
                  />
               </div>
                     
                     <FormError message={error || urlError} />
                     <FormSuccess message={success} />
                     <Button type='submit' disabled={isPending} className='bg-yellow hover:bg-yellow hover:bg-opacity-70 font-semibold text-white rounded-md p-2 shadow-md'>Login</Button>
               </form>
            </Form>
            <p className='text-yellow mx-auto my-4 text-center' >* * * * *</p>
            {/* <Social disable={isPending}/> */}
            <p className='mx-auto mt-12 text-center text-sm' >Dont Have an Account? <Link href='/register' className='text-black'>Register Here</Link></p>
         </div>
      </div>
   )
}