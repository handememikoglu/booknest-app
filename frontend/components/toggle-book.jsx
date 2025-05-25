import { toggleAction } from "@/app/actions/bookActions";
import { Checkbox } from "./ui/checkbox";

export default function ToggleBook({bookId, completed}){
    return(
        <form action={toggleAction}>
            <input type="hidden" value={bookId} name="bookId" />
            <input type="hidden" value={!completed} name="completed" />
            <div className="flex items-center gap-2">
                <Checkbox type="submit" checked={completed} />
                <label htmlFor="">Okundu olarak işaretle</label>
            </div>
        </form>
    )
}