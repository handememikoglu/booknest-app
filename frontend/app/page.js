import { getToken, getUser } from "@/lib/strapiService";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { logoutAction } from "./actions/authActions";
import Library from "@/components/library";
import Link from "next/link";
import LibraryForm from "@/components/library-form";
import LibraryList from "@/components/library-list";
import Header from "@/components/header";

export default async function Home(){
  const token = await getToken();
  const user = (await getUser(token)) || null;

    return (
    <main className="min-h-screen flex flex-col items-center ">
      {user ? (
        <>
          <Header user={user} />

          <section className="w-full max-w-4xl mt-8 flex flex-col gap-6">
            <LibraryForm user={user} />
            <LibraryList />
          </section>
        </>
      ) : (
        <Card className="w-full max-w-md mt-10">
          <CardHeader>
            <h2 className="text-xl font-semibold">Booknest{"'"}e hoşgeldin!</h2>
          </CardHeader>
          <CardContent>
            <p>Giriş yapmadın. Lütfen giriş yap veya kaydol.</p>
          </CardContent>
          <CardFooter className="flex gap-4">
            <Button asChild variant="outline">
              <Link href="/login">Giriş Yap</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Kayıt Ol</Link>
            </Button>
          </CardFooter>
        </Card>
      )}
    </main>
  );
}