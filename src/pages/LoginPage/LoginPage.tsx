import { AppLink, AuthWith } from "../../components";
import { Heading } from "../../components/typography";
import { Button, Input } from "../../components/UI";
import "./LoginPage.scss";

export const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Heading text="Авторизация" level={1} />
      <form action="#">
        <Input type="tel" placeholder="Номер телефона" />
        <Input type="password" placeholder="Пароль" />
        <Button text="Войти"/>
      </form>
      <AppLink text="Забыли пароль?" href="#"/>
      <AuthWith />
    </div>
  );
};
