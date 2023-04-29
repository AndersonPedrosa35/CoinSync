import React from 'react'

export default function NewsLetter() {
  return (
    <section>
      <section>
        <h3>Lorem Ipsum</h3>
        <h1>Lorem Ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
      </section>
      <section>
        <form>
          <label htmlFor='email'>
            <input id='email' type="email" />
          </label>
          <button
            type='submit'
          >
            Subscribe
          </button>
        </form>
      </section>
    </section>
  )
}
