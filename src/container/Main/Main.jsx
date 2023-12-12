import React from "react";
import cls from "./Main.module.css";
import InfoBlock from "../../component/InfoBlock/InfoBlock";
import Button from "../../component/Button/Button";

export default function Main() {
  return (
    <div className={cls.container}>
      <div className={cls.con}>
        <h1 className={cls.title}>
          Зарабатывайте <br /> больше <br />{" "}
          <span className={cls.titleColor}>с WELBEX</span>
        </h1>
        <p className={cls.subTitle}>
          Развиваем и контролируем <br /> продажи за вас
        </p>
      </div>
      <div className={cls.con}>
        <div className={cls.titleCon}>
          <p className={cls.titleTxt}>
            Вместе с <span className={cls.blend}>бесплатной</span> <br />{" "}
            <span className={cls.blend}>консультацией</span> мы дарим:
          </p>
        </div>
        <div className={cls.infoCon}>
          <InfoBlock />
        </div>
        <div className={cls.btnCon}>
          <Button />
        </div>
      </div>
    </div>
  );
}
