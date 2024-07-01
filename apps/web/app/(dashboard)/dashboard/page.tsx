"use client"
import { Button } from '@repo/ui'
import { Card } from '@repo/ui'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {

  const router = useRouter();

  function navTakeRegister() {
    router.push("/take-register")
  }

  return (
    <div className='space-y-8'>
      <div className='text-4xl '>Homepage</div>
      <div className='flex space-x-4 w-full'>
        <Card title="Take Reigster" >
          <div className='space-y-4'>
            <p>To take daily attendance of the students</p>
            <Button onClick={navTakeRegister}>Take Register</Button>
          </div>
        </Card>
        <Card title="Class View">
          <div className='space-y-4'>

            <p>To take daily attendance of the students</p>
            <Button onClick={navTakeRegister}>Take Register</Button>
          </div>
        </Card>

      </div>

    </div>
  )
}
