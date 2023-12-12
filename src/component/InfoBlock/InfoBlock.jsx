import React from "react";
import cls from "./InfoBlock.module.css";

export default function InfoBlock() {
  return (
    <div className={cls.container}>
      <div className={cls.con}>
        <div className={cls.txtCon}>
          <div>
            <p className={cls.title}>Виджеты</p>
            <p className={cls.txt}>30 готовых решений</p>
          </div>
          <div>
            <p className={cls.title}>Dashboard</p>
            <p className={cls.txt}>с показателями вашего бизнеса</p>
          </div>
        </div>
        <div className={cls.txtCon}>
          <div>
            <p className={cls.title}>Skype Аудит</p>
            <p className={cls.txt}>отдел продажи CRM системы</p>
          </div>
          <div>
            <p className={cls.title}>35 дней</p>
            <p className={cls.txt}>использования CRM</p>
          </div>
        </div>
      </div>
      <div className={cls.conTwo}>
        <div className={cls.txtCon}>
          <div className={cls.miniCon}>
            <div className={cls.line}></div>
            <p className={cls.txt}>Skype аудит</p>
          </div>
          <div className={cls.miniCon}>
            <div className={cls.line}></div>
            <p className={cls.txt}>Dashboard</p>
          </div>
        </div>
        <div className={cls.txtCon}>
          <div className={cls.miniCon}>
            <div className={cls.line}></div>
            <p className={cls.txt}>30 виджетов</p>
          </div>
          <div className={cls.miniCon}>
            <div className={cls.line}></div>
            <p className={cls.txt}>Месяц аmoCRM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
