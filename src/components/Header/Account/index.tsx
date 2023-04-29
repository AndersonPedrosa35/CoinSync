import React from 'react'
import style from "./style.module.scss"

export default function Account() {
  return (
    <section className={style.containerAccount}>
      <button
        type='button'
        className={style.accountButtonSignIn}
        // onClick={() => setModalSignIn(true)}
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
