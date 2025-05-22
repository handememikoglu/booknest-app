"use client";
import { deleteBookAction } from "@/app/actions/bookActions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash } from "lucide-react";

export default function DeleteButton({ bookId, title }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive"> <Trash/> Sil</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle> {title} </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          {title} kitabını silmek istediğinize emin misiniz? Bu işlem geri alınamaz !
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              İptal Et
            </Button>
          </DialogClose>
          <Button onClick={() => deleteBookAction(bookId)}> <Trash/> Sil</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
