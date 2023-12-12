import React from "react";
import cls from "./Footer.module.css";
import IconCon from "../../component/IconCon/IconCon";

export default function Footer() {
  return (
    <div className={cls.container}>
      <div className={cls.con}>
        <div>
          <p className={cls.headerTxt}>О Компании</p>
          <div className={cls.txtCon}>
            <a href="#" className={cls.txt}>
              Партнёрская программа
            </a>
            <a href="#" className={cls.txt}>
              Вакансии
            </a>
          </div>
        </div>

        <div>
          <p className={cls.headerTxt}>Меню</p>
          <div className={cls.sBlock}>
            <div className={cls.txtCon}>
              <a href="#" className={cls.txt}>
                Расчёт стоимости
              </a>
              <a href="#" className={cls.txt}>
                Услуги
              </a>
              <a href="#" className={cls.txt}>
                Виджеты
              </a>
              <a href="#" className={cls.txt}>
                Интеграции
              </a>
              <a href="#" className={cls.txt}>
                Наши клиенты
              </a>
            </div>
            <div className={cls.txtCon}>
              <a href="#" className={cls.txt}>
                Кейсы
              </a>
              <a href="#" className={cls.txt}>
                Благодарственные письма
              </a>
              <a href="#" className={cls.txt}>
                Сертификаты
              </a>
              <a href="#" className={cls.txt}>
                Блог на Youtube
              </a>
              <a href="#" className={cls.txt}>
                Вопрос / Ответ
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={cls.conTwo}>
        <p className={`${cls.headerTxt} ${cls.right}`}>Контакты</p>
        <div className={cls.txtTwo}>
          <a className={cls.endTxt} href="#">
            +7 555 555-55-55
          </a>
          <IconCon />
          <p className={cls.endTxt}>Москва, Путевой проезд 3с1, к 902</p>
        </div>
      </div>
    </div>
  );
}
