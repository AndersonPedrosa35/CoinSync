import Image from 'next/image'
import React, { SetStateAction, useState } from 'react'
import style from './style.module.scss'

interface ModalAccountProps {
  setModalSignIn: React.Dispatch<SetStateAction<boolean>>
}

export default function ModalAccount({ setModalSignIn }: ModalAccountProps) {
  const [passwordShow, setPasswordShow] = useState(false)
  return (
    <section className={style.modal}>
      <section className={style.containerModal}>
        <button type='button' className={style.closeButton} onClick={() => setModalSignIn(false)}>X</button>
        <h3>Sign in to <Image src='/logo-coinsync.png' alt='logo' width={132} height={32} /></h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor='sigInEmail'>
            <input id='sigInEmail' type="email" placeholder='Email' />
          </label>
          <label htmlFor='password'>
            <input id='password' type={passwordShow ? 'text' : 'password'} placeholder="Password"/>
            <button type='button' onClick={() => setPasswordShow(!passwordShow)}>
            <Image src='/see.svg' alt='See Password' width={20} height={20} />
            </button>
          </label>
          <span>Forgot password?</span>
          <button type='submit' className={style.buttonAccountSignIn}>
            Sign in
          </button>
          <span className={style.redirectSignUp}>Don`t have an account? Sign up to <Image src='/logo-coinsync.png' alt='logo' width={116} height={16} /></span>
        </form>
      </section>
    </section>
  )
}
