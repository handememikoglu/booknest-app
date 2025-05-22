"use server";
import { createLibrary, deleteBook, getToken } from "@/lib/strapiService";
import { revalidatePath } from "next/cache";

export async function createLibraryAction(formData){
    const title = formData.get("title");
    const author = formData.get("author");
    const userId = formData.get("userId");
    const type = formData.get("type");

    const token = await getToken();
    await createLibrary(title, author, type, token ,userId);

    revalidatePath("/");
}

export async function deleteBookAction(bookId){
    const token = await getToken();
    await deleteBook(token, bookId);
    revalidatePath("/");

}