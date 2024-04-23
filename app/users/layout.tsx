import React from 'react'
import  { Navbar } from '@/components/component/navbar'

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>{children}</div>
    )
}