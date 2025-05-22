"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function registerAction(formData){
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try{
        const res = await axios.post(
            "http://localhost:1337/api/auth/local/register",
            {
                username,
                email,
                password,
            },
        );
        const data = res.data;
        const cookieStorage = await cookies();
        cookieStorage.set("jwtFr", data.jwt);
    }catch(error){
        console.error("İşlem sırasında bir hata oluştu");
        throw new Error("Kayıt işlemi sırasında bir hata oluştu");

    }

    redirect("/");
}

export async function loginAction(prevState, formData){
    const email = formData.get("email");
    const password = formData.get("password");

    try{
        const res = await axios.post(
            "http://localhost:1337/api/auth/local", {
                identifier: email,
                password,
            }
        );

        const data = res.data;
        const cookieStorage = await cookies();
        cookieStorage.set("jwtFr", data.jwt);
    }catch(error){
        return {
            error: {
                message: "Email veya şifre hatalı",
            },
        };
    }

    redirect("/");
}

export async function logoutAction(){
    const cookieStorage = await cookies();
    cookieStorage.delete("jwtFr");
    redirect("/login");

}