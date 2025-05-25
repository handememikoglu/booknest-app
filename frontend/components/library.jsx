import { Edit } from "lucide-react";
import DeleteButton from "./delete-button";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import EditButton from "./edit-button";
import ToggleBook from "./toggle-book";



export default function Library({book}) {

  return(
    <div >
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="shadow-lg p-2 rounded-lg">
          <AccordionTrigger>{book.title} - {book.author} - {book.type} </AccordionTrigger>
          <AccordionContent>
            <div className="flex gap-2 items-center">
              <DeleteButton bookId={book.documentId} title={book.title} />
              <EditButton book={book}/>
              <ToggleBook  bookId={book.documentId} completed={book.completed} />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  );
}
