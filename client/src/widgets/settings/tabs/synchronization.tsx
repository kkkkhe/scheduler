import { useState } from "react"

import { MailSvg } from "./assets"

import { Button } from "@/shared/ui/buttons/main-button/ui"

export const SynchronizationTab = () => {
    const [isLoginModalSet, setLoginModal] = useState(false)
    return (
        <div className="flex flex-col items-center">
            <div className="text-center w-[391px]">
                <LoginOptions onClick={setLoginModal}/>
            </div>
        </div>
    )
}


function LoginOptions({onClick}:{onClick: (flag: boolean) => void}){
    return (
        <>
            <h2 className="text-lg mb-2 font-semibold">Welcome to Scheduler App</h2><p className="text-sm mb-6">Log in to access your your account and sync the data between devices</p><div className="inline-flex flex-col gap-5">
                <Button onClick={() => onClick(true)} icon={<MailSvg />} title="Continue with Email" size={'large'} />
                <Button icon={<MailSvg />} title="Continue with Google" size={'large'} />
                <Button icon={<MailSvg />} title="Continue with Apple" size={'large'} />
            </div>
        </>
    )
}
