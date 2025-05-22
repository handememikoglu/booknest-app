import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().min(1, "E-mail zorunludur").email("Geçerli bir email girin"),
    password: z.string().min(6, "şifre en az 6 karakter olmalı")
    .regex(/[A-Z]/, "Şifre en az bir büyük harf içermeli.")
    .regex(/[0-9]/, "Şifre en az bir sayı içermeli."),
});

export const registerSchema = z.object({
    username: z.string().min(3, "Kullanıcı adı en az 3 karakter olmalı"),
    email: z.string().email("Geçerli bir email adresi girin"),
    password: z.string().min(6, "şifre en az 6 karakter olmalı")
    .regex(/[A-Z]/, "Şifre en az bir büyük harf içermeli.")
    .regex(/[0-9]/, "Şifre en az bir sayı içermeli."),
});