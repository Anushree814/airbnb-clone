import React from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
import logo from '@/app/assets/logo.png'
import Link from 'next/link';
export default function Logo() {
  return (
    <Button asChild className=" bg-transparent hover:bg-transparent border-none shadow-transparent -ml-16">
      <Link href="/">
        <Image
          src={logo}
          alt="Logo"
          width={100}
          height={100}
          className="object-contain h-[7.25rem] w-[7.25rem]"
        />
      </Link>
    </Button>
  );
}
