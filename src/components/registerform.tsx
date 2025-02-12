"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";
import { ZoomAnimator } from "./animator";
import { register } from "@/actions/register";
import { RegisterSchema } from "@/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

export function RegisterForm({buttonText="Request Callback", className = "text-black", formLabelColor=""}: {buttonText?: string, className?: string, formLabelColor?: string}) {
   const router = useRouter();
   const form = useForm<z.infer<typeof RegisterSchema>>({
      resolver: zodResolver(RegisterSchema),
      defaultValues: {
         fname: "",
         lname: "",
         email: "",
         phone: "+91 ",
         password: "",
         confirmPassword: "",
      },
   });

   const { control, handleSubmit, formState, reset } = form;
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const [transition, startTransition] = useTransition();
   const [error, setError] = useState<string | null>(null);
   const [success, setSuccess] = useState<string | null>(null);

   const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
      startTransition(() => {
        register(data).then((response) => {
          setError(response.error || null);
          setSuccess(response.success || null);
          if (response.success) {
            reset();
            router.push('/thankyou');
          }
        });
      });
    };

  return (
    <div className={`w-full max-w-lg mx-auto h-full flex items-center justify-center px-4 ${className}`}>
      <Form aria-label="Register Form" {...form}>
        <form aria-label="Register Form" onSubmit={handleSubmit(onSubmit)} className="gap-y-2 md:gap-y-6 flex flex-col items-center">
          <div className="flex items-center gap-4">
             <FormField
               control={control}
               name="fname"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel className={formLabelColor} htmlFor="fname">First Name</FormLabel>
                   <FormControl>
                     <Input 
                        {...field} 
                        id="fname"
                        autoCapitalize="words"
                        className="shadow-none border-b border-t-0 border-r-0 border-l-0 bg-neutral-50"
                        autoComplete="given-name"
                        disabled={formState.isSubmitting|| transition}
                    />
                   </FormControl>
                   <FormMessage className="sm:absolute text-wrap max-24 text-xs">{form.formState.errors.fname?.message}</FormMessage>
                 </FormItem>
               )}
             />
             <FormField
               control={control}
               name="lname"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel className={formLabelColor} htmlFor="lname">Last Name</FormLabel>
                   <FormControl>
                     <Input 
                        {...field} 
                        id="lname"
                        autoCapitalize="words"
                        className="shadow-none border-b border-t-0 border-r-0 border-l-0 bg-neutral-50"
                        autoComplete="family-name"
                        disabled={formState.isSubmitting|| transition}
                   />
                   </FormControl>
                   <FormMessage className="sm:absolute text-wrap max-24 text-xs">{form.formState.errors.lname?.message}</FormMessage>
                 </FormItem>
               )}
            />
          </div>
          <div className="flex items-center gap-4">
             <FormField
               control={control}
               name="email"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel className={formLabelColor} htmlFor="email">Email</FormLabel>
                   <FormControl>
                     <Input 
                        {...field} 
                        id="email"
                        className="shadow-none border-b border-t-0 border-r-0 border-l-0 bg-neutral-50"
                        type="email"
                        autoComplete="email"
                        disabled={formState.isSubmitting|| transition}
                     />
                   </FormControl>
                   <FormMessage className="sm:absolute text-wrap max-24 text-xs">{form.formState.errors.email?.message}</FormMessage>
                 </FormItem>
               )}
             />
             <FormField
               control={control}
               name="phone"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel className={formLabelColor} htmlFor="phone">Phone Number</FormLabel>
                   <FormControl>
                     <Input 
                        {...field} 
                        id="phone"
                        className="shadow-none border-b border-t-0 border-r-0 border-l-0 bg-neutral-50"
                        type="tel"  
                        autoComplete="tel"
                        disabled={formState.isSubmitting|| transition}
                     />
                   </FormControl>
                   <FormMessage className="sm:absolute text-wrap max-24 text-xs">{form.formState.errors.lname?.message}</FormMessage>
                 </FormItem>
               )}
            />
          </div>
          <div className="flex items-center gap-4 mb-4">
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={formLabelColor} htmlFor="password">Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        id="password"
                        className="shadow-none border-b border-t-0 border-r-0 border-l-0 bg-neutral-50"
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        disabled={formState.isSubmitting|| transition}
                      />
                      <button
                        type="button"
                        className="absolute right-0 top-1/2 transform -translate-y-1/2"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ?  <Eye size={16} color="#ffa014" /> : <EyeOff size={16} color="#ffa014" />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="absolute atext-xs">
                    {form.formState.errors.password?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={formLabelColor} htmlFor="confirmPassword">Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        id="confirmPassword"
                        className="shadow-none border-b border-t-0 border-r-0 border-l-0 bg-neutral-50"
                        type={showConfirmPassword ? "text" : "password"}
                        autoComplete="new-password"
                        disabled={formState.isSubmitting|| transition}
                      />
                      <button
                        type="button"
                        aria-label="Submit"
                        className="absolute right-0 top-1/2 transform -translate-y-1/2"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ?  <Eye size={16} color="#ffa014" /> : <EyeOff size={16} color="#ffa014" />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="sm:absolute text-wrap max-24 text-xs">
                    {form.formState.errors.confirmPassword?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
            {error && <FormMessage className="text-red-500 text-center">{error}</FormMessage>}
            {success && <FormMessage className="text-green-500 text-base text-center">{success}</FormMessage>}
          <ZoomAnimator
            framerProps={{
               hidden: { opacity: 0, scale: 0.8, transformOrigin: 'center' },
               visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
            }}
            hoverScale={0.95}
            className="w-full"
            >
             <Button type="submit" variant={'yellow'} className="flex w-[80%] h-12 mx-auto rounded-full text-xl mt-4">{buttonText}</Button>
         </ZoomAnimator> 
        </form>
      </Form>
    </div>
  );
}
