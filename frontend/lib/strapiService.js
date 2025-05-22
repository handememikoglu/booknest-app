import axios from "axios";
import { cookies } from "next/headers";
import { axiosClient } from "./axiosClient";

export async function getUser(token){
    if(!token){
        return null;
    }
    const res = await axios.get("http://localhost:1337/api/users/me", {
        headers:{
            Authorization: `Bearer ${token}`
        },
    });
    return res.data;
}

export async function getToken(){
    const cookieStorage = await cookies();
    const jwt = cookieStorage.get("jwtFr");
    const token = jwt?.value;
    return token;
}

export async function createLibrary(title, author, type, token, userId){
    try{
        await axiosClient.post("/libraries",{
            data: {
                title,
                author,
                type,
                user:userId,
            },
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );
    }catch(error){
        console.error("İşlem sırasında bir hata oluştu:",error);
        throw new Error("Kitap ekleme aşamasında bir hata oluştu");
    }
}