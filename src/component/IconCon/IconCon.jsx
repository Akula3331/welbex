import React from 'react'
import cls from './IconCon.module.css'

export default function IconCon() {
  return (
    <div className={cls.con}>
        <img className={cls.icon} src="/icon/vector.svg" alt="" />
        <img className={cls.icon} src="/icon/phone.svg" alt="" />
        <img className={cls.icon} src="/icon/wha.svg" alt="" />
    </div>
  )
}
