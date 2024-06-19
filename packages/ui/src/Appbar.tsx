"use client"
import React from 'react'
import { Button } from './button'

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
        <div className="text-lg flex flex-col justify-center">
            Edusys
        </div>
        <div className="flex flex-col justify-center py-2">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
    </>

}
