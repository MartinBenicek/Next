import NextAuth from "next-auth";
import type { Provider } from "next-auth/providers";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./db";
import Nodemailer from "next-auth/providers/nodemailer";

const providers: Provider[] = [
  Nodemailer({
    server: {
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    },
    from: process.env.EMAIL_FROM,
  }),
  Google,
];

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  session: { maxAge: 60 * 24 * 60 * 60 },
  adapter: PrismaAdapter(prisma),
});
