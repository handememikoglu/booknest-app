import { logoutAction } from "@/app/actions/authActions";
import { getToken, getUser } from "@/lib/strapiService";
import { Button } from "./ui/button";
import Image from "next/image";
import ThemeToggle from "./themeToggle";
import SettingsMenu from "./settings";

export default  async function Header(){
    const token = await getToken();
    const user = (await getUser(token)) || null;

    return (
    <header className="w-full bg-[#1c1c2e] text-white shadow-md px-6 py-4 rounded-b-xl flex items-center justify-between">
        <SettingsMenu/>
      <div className="flex items-center gap-4">
        <Image
          src="/logo.png" 
          alt="Booknest Logo"
          width={60}
          height={60}
        />
        <h1 className="text-xl font-semibold">Booknest</h1>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-m text-white">
          Hoşgeldin, <strong>{user?.username}</strong>
        </span>
        <form action={logoutAction}>
          <Button type="submit" variant="destructive">
            Çıkış Yap
          </Button>
        </form>
      </div>
    </header>
  );
}