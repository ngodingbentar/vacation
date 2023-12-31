'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <Image
      onClick={() => router.push('/')}
      className="block cursor-pointer" 
      src="/images/logo.svg" 
      height="30" 
      width="30" 
      alt="Logo" 
    />
   );
}
 
export default Logo;