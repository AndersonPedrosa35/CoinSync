import React, { SetStateAction, useState } from 'react'
import style from "./style.module.scss"

interface AccountProps {
  setModalSignIn: React.Dispatch<SetStateAction<boolean>>
}

export default function Account({setModalSignIn}: AccountProps) {
  return (
    <section className={style.containerAccount}>
      <button
        type='button'
        className={style.accountButtonSignIn}
        onClick={() => setModalSignIn(true)}
      >
        Sign in
      </button>
      <button
        type='button'
        className={style.accountButtonSignUp}
        // onClick={() => setModalSignUp(true)}
      >
        Sign up
      </button>
    </section>
  )
}
