import React from 'react'

export default function Account() {
  return (
    <section>
      <button
        type='button'
        className='account-buttonSignIn'
        // onClick={() => setModalSignIn(true)}
      >
        Sign in
      </button>
      <button
        type='button'
        className='account-buttonSignUp'
        // onClick={() => setModalSignUp(true)}
      >
        Sign up
      </button>
    </section>
  )
}
