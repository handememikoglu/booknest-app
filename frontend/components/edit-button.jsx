import { updateBookAction } from "@/app/actions/bookActions";
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function EditButton({book}) {
    return(
        <Dialog>
            <DialogTrigger>
                <Button variant="outline">Düzenle</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Düzenle</DialogTitle>
                </DialogHeader>
                <form action={updateBookAction}>
                    <input type="hidden" name="bookId" value={book.documentId} />
                    <div>
                        <div>
                            <Label htmlFor="title" className="text-right mb-4">Kitap Adı</Label>
                            <Input id="title" className="col-span-3 mb-4 focus-visible:ring-2 focus-visible:ring-purple-500" defaultValue={book.title} name="title"></Input>
                        </div>
                        <div>
                            <Label htmlFor="author" className="text-right mb-4">Yazar Adı</Label>
                            <Input id="author" className="col-span-3 mb-4 focus-visible:ring-2 focus-visible:ring-purple-500" defaultValue={book.author} name="author"></Input>
                        </div>
                        <div>
                            <Label htmlFor="type" className="text-right mb-4">Kitap Türü</Label>
                            <Input id="type" className="col-span-3 mb-4 focus-visible:ring-2 focus-visible:ring-purple-500" defaultValue={book.type} name="type"></Input>
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose aschild>
                            <Button type="button" variant="secondary">İptal Et</Button>
                        </DialogClose>
                        <Button type="submit">Düzenle</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}