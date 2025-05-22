"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useActionState, useState } from "react"
import { loginAction } from "@/app/actions/authActions"
import Link from "next/link"
import { loginSchema } from "@/lib/validations"

export function LoginForm({className, ...props}) {

  const [state, formAction] = useActionState(loginAction, { error: {} });
   const [errors, setErrors] = useState({});
    
    const handleSubmit = async (e) => {
      // e.preventDefault();
      const formData = new FormData(e.target);
  
      const data = {
        username: formData.get("username"),
        email: formData.get("email"),
      };
  
      const result = loginSchema.safeParse(data);
  
      if(!result.success) {
        setErrors(result.error.flatten().fieldErrors);
        return;
      }
  
      setErrors({});
      e.target.submit();
    }
    return (
          <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card>
            <CardHeader>
              <CardTitle>Giriş Yap</CardTitle>
            </CardHeader>
            <CardContent>
              <form action={formAction} onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      name="email"
                      required
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                  </div>
                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="password">Şifre</Label>
                      <Link href="/forgotPassword"  className="ml-auto inline-block text-sm underline-offset-4 hover:underline">Şifremi unuttum</Link>
                    </div>
                    <Input id="password" type="password" name="password" required />
                    {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                  </div>
                  {state?.error?.message && (
                    <div className="text-red-500">{state?.error?.message}</div>
                  )}
                  <div className="flex flex-col gap-3">
                    <Button type="submit" className="w-full">
                      Giriş Yap
                    </Button>
                  </div>
                </div>
                <div className="mt-4 text-center text-sm">
                  Hesabın yok mu?{" "}
                  <Link href="/signup" className="underline underline-offset-4">
                    Kayıt Ol
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
          </div>
      );
}
