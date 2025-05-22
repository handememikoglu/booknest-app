import { logoutAction } from "@/app/actions/authActions";
import { Button } from "./ui/button";

export default function LogoutButton(){
    return(
        <Button variant={"destructive"} onClick={() => logoutAction} >Çıkış Yap</Button>
    )
}