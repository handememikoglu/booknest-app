"use client"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { registerAction } from "@/app/actions/authActions";
import { useState } from "react";
import { registerSchema } from "@/lib/validations";

export function RegisterForm({ className, ...props }) {

  const [errors, setErrors] = useState({});
  
  const handleSubmit = async (e) => {
    // e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const result = registerSchema.safeParse(data);

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
          <CardTitle>Kayıt Ol</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={registerAction} onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="username">Kullanıcı Adı</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="kullanıcı123"
                  name="username"
                  required
                />
                {errors.username && <p className="text-sm text-red-500">{errors.username}</p>}
              </div>
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
                </div>
                <Input id="password" type="password" required name="password" />
                {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Kayıt Ol
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Hesabın var mı?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Giriş Yap
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
