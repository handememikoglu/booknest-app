import { createLibraryAction } from "@/app/actions/bookActions";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function LibraryForm({user}){
    return(
        <Card>
            <CardHeader>
                <CardTitle>Kitap Ekle</CardTitle>
            </CardHeader>
            <CardContent>
                <form className={"flex flex-col gap-4"} action={createLibraryAction}>
                    <input type="hidden" value={user.id} name="userId" />
                    <Input name="title" type="text" placeholder="Kitap adı" required className="focus-visible:ring-2 focus-visible:ring-purple-500" />
                    <Input name="author" type="text" placeholder="Yazar adı" required className="focus-visible:ring-2 focus-visible:ring-purple-500" />
                    <Input name="type" type="text" placeholder="Kitap türü" className="focus-visible:ring-2 focus-visible:ring-purple-500"  />
                    <Button type="submit">Ekle</Button>
                </form>
            </CardContent>
        </Card>
    );
}