import React from 'react'
import style from './style.module.scss'

export default function NewsLetter() {
  return (
    <section className={style.sectionNewsletter}>
      <div className={style.borderItem1} />
      <div className={style.borderItem2} />
      <div className={style.borderItem3} />
      <section className={style.containerNewsletter}>
        <section className={style.containerLeft}>
          <h3 className={style.subtitle}>Lorem Ipsum</h3>
          <h1 className={style.title}>Lorem Ipsum</h1>
          <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
        </section>
        <section className={style.containerRight}>
          <form>
            <label htmlFor='email' className={style.labelInput}>
              Email
              <input id='email' type="email" placeholder='Email'/>
            </label>
            <button
              type='submit'
              className={style.buttonSubmit}
            >
              Subscribe
            </button>
          </form>
        </section>
      </section>
    </section>
  )
}
