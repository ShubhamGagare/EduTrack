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
    return <>    <div className="flex justify-between border-b px-4">
        <div className='flex space-x-2 items-center'>
            <School />
            <div className="text-2xl font-bold tracking-tight  justify-center">
                EduTrack
            </div>

        </div>
        <div className="flex flex-col justify-center py-2 p-30">
            <Button variant={'outline'} size={'lg'} onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
    </>

}
