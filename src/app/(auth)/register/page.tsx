import { RegisterForm } from "@/components/registerform";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
const LoginPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center overflow-hidden relative text-white">
      <Image
        src="/how-it-works/image-4.png"
        alt="logo"
        fill
        style={{
          objectFit: "cover",
          zIndex: -2,
        }}
        loading="eager"
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div
        className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black z-10 opacity-50`}
      />
      <Link href="/" className="flex-shrink-0 z-50">
        <Image src="/logo.svg" alt="Logo" width={150} height={50} priority />
      </Link>
      <div className="max-w-lg w-full border-2 border-yellow mt-4 rounded-xl p-4 shadow-x backdrop-blur-2xl py-4 pb-14 z-50">
      <h2 className="text-4xl text-white font-semibold drop-shadow-sm " >Register</h2>
      <p>Already have an account? <Link href="/login" className="text-black hover:underline mb-4"> Login</Link> </p>
        <Suspense fallback={<div>Loading...</div>}>
          <RegisterForm buttonText="Register"/>
        </Suspense>
      </div>
    </div>
  );
};

export default LoginPage;
