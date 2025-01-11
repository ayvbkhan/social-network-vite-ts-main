
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { AuthWith } from "../../components";
import { Heading } from "../../components/typography";
import { Button, Input } from "../../components/UI";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface ILoginForm {
    usermail: string,
    userpassword: string,
    username: string,
    usersurname: string,
    usercity: string
}

const loginFormScheme = yup.object({
    usermail: yup.string().email("Введите почту в правильном формате").required("Обязателньное поле"),
    userpassword: yup.string().required("Обязателньное поле").min(8, "Минимум 8 символов"),
    username: yup.string().required("Обязателньное поле").min(3, "Минимум 3 символов"),
    usersurname: yup.string().required("Обязателньное поле").min(3, "Минимум 3 символов"),
    usercity: yup.string().required("Обязателньное поле").min(3, "Минимум 3 символов"),
})

export const RegistrationPage = () => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginFormScheme),
        defaultValues: { usermail: "", userpassword: "", username: "", usersurname: "", usercity: "" }
    })

    const onSubmit: SubmitHandler<ILoginForm> = (data) => {
        console.log(data);

    }

    return (
        <div className="LoginPage" style={{ marginTop: "50px"}}>
            <Heading text="Регистрация" level={1} />
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <Controller
                    name="username"
                    control={control}
                    render={({ field }) => (
                        <Input
                            isError={errors.username ? true : false}
                            errorMessage={errors.username?.message}
                            type="text"
                            placeholder="Имя"
                            {...field} />
                    )} />
                <Controller
                    name="usersurname"
                    control={control}
                    render={({ field }) => (
                        <Input
                            isError={errors.usersurname ? true : false}
                            errorMessage={errors.usersurname?.message}
                            type="text"
                            placeholder="Фамилия"
                            {...field} />
                    )} />
                <Controller
                    name="usercity"
                    control={control}
                    render={({ field }) => (
                        <Input
                            isError={errors.usercity ? true : false}
                            errorMessage={errors.usercity?.message}
                            type="text"
                            placeholder="Город"
                            {...field} />
                    )} />
                <Controller
                    name="usermail"
                    control={control}
                    render={({ field }) => (
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
                    render={({ field }) => (
                        <Input
                            isError={errors.userpassword ? true : false}
                            errorMessage={errors.userpassword?.message}
                            type="password"
                            placeholder="Пароль"
                            {...field} />
                    )} />

                <Button type="submit" text="Зарегистрироваться" />
            </form>
            <AuthWith text="У вас уже есть аккаунт?" login="Войти" href="#" />
        </div>
    );
};
