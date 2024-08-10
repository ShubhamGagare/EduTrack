"use client"
import React from 'react'
import { Button } from '@repo/ui'
import { School } from 'lucide-react'

interface AppBarProps {
    user?: {
        name?: string | null
    }

    onSignin: any
    onSignout: any
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppBarProps) => {
    return <>
        <div className="flex justify-between w-full shadow-md px-4">
            <div className='flex space-x-2  items-center px-4 w-72  text-primary py-2 border-primary'>
                <School />
                <div className="text-2xl  font-bold tracking-tight  justify-center">
                    edutrack
                </div>

            </div>
            <div className="flex flex-col justify-center py-2 p-30">
                <Button variant={'outline'} size={'lg'} onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
            </div>
        </div>
    </>

}
