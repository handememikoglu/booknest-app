import { axiosClient } from "@/lib/axiosClient";
import { getUser } from "@/lib/strapiService";
import { cookies } from "next/headers";
import Library from "./library";

export default async function LibraryList(){
    const cookieStroge = await cookies();
    const jwt = cookieStroge.get("jwtFr");
    const token = jwt?.value;
    const user = await getUser(token);
    const userId = user.id;
    let books = [];

    try{
        const res = await axiosClient.get(`/libraries?filters[user][id][$eq]=${userId}&sort=createdAt:desc`,
            {
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            },
        );
        books = res.data.data;
    }catch(error){
        console.error("İşlem sırasında bir hata oluştu",error);
        throw new Error("Kitap listesini alma işlemi sırasında bir hata oluştu.");
    }

    return(
        <div>
            {books.map((book) => (
                <Library key={book.id} book={book} />
            ))}
        </div>
    )
}