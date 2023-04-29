import React from 'react'
import style from "./style.module.scss"

export default function Separator() {
  return (
    <div className={style.containerBorders}>
      <div className={style.borderItem1} />
      <div className={style.borderItem2} />
      <div className={style.borderItem3} />
    </div>
  )
}
