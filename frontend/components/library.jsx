import DeleteButton from "./delete-button";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



export default function Library({book}) {

  return(
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{book.title} - {book.author} - {book.type} </AccordionTrigger>
          <AccordionContent>
            <DeleteButton bookId={book.documentId} title={book.title} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  );
}
