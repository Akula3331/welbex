import React from 'react'
import cls from './Header.module.css'
import IconCon from '../../component/IconCon/IconCon'

export default function Header() {
  return (
    <div className={cls.container}>
    <div className={cls.con}>
    <div className={cls.iconCon}>
      <img className={cls.icon} src="/icon/logo_welbex.svg" alt="" />
      <p className={cls.iconTxt}>крупный интегратор CRM в Росcии и ещё 8 странах</p>
    </div>
      <div className={cls.txtCon}>
        <a href='#' className={cls.txt}>Услуги</a>
        <a href='#' className={cls.txt}>Виджеты</a>
        <a href='#' className={cls.txt}>Интеграции</a>
        <a href='#' className={cls.txt}>Кейсы</a>
        <a href='#' className={cls.txt}>Сертификаты</a>
      </div>
    </div>
    <div className={cls.con}>
     <a className={cls.txt} href="#">+7 555 555-55-55</a>
     <IconCon/>
    </div>
  </div>
  )
}
