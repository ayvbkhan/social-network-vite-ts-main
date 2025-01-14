
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { AppLink, AuthWith } from "../../components";
import { Heading } from "../../components/typography";
import { Button, Input } from "../../components/UI";
import "./LoginPage.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface ILoginForm {
  usermail: string,
  userpassword: string
}

const loginFormScheme = yup.object({
  usermail: yup.string().email("Введите почту в правильном формате").required("Обязателньное поле"),
  userpassword: yup.string().required("Обязателньное поле").min(8, "Минимум 8 символов")
})

export const LoginPage = () => {

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginFormScheme),
    defaultValues: {usermail: "", userpassword: ""}
  })

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data);
    
  }

  return (
    <div className="LoginPage">
      <Heading text="Авторизация" type="h1" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="usermail"
          control={control}
          render={({field}) => (
            <Input
              isError={errors.usermail ? true : false}
              errorMessage={errors.usermail?.message}
              type="text"
              placeholder="Почта"
              {...field} />
          )} />
        <Controller
          name="userpassword"
          control={control}
          render={({field}) => (
            <Input
              isError={errors.userpassword ? true : false}
              errorMessage={errors.userpassword?.message}
              type="password"
              placeholder="Пароль"
              {...field} />
          )} />
        
        <Button type="submit" text="Войти" />
      </form>
      <AppLink text="Забыли пароль?" href="#" />
      <AuthWith text="У вас нет аккаунта?" login="Зарегистрироваться" href="#" />
    </div>
  );
};
