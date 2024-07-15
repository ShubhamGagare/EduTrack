  
//mport { PrismaClient } from "../../../../packages/db/prisma/generated/client";
import  db  from "../../../../packages/db";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";

//const client = new PrismaClient();

export const authOptions = {

    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { label: "Email", type: "email", placeholder: "Enter the email " },
            password: { label: "Password", type: "password" }
          },
          // User credentials type from next-aut
          async authorize(credentials: any) {
            //zod validation, OTP validation here
            const hashedPassword = await bcrypt.hash(credentials.password, 10);
            const existingUser = await db.user.findFirst({
                where: {
                    email: credentials.email
                }
            });

            if (existingUser) {
                console.log("Existing user---")
                const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);

                if (passwordValidation) {
                    console.log("Checking user---")

                    return {
                        id: existingUser.id.toString(),
                        username: existingUser.username,
                        email: existingUser.email
                    }
                }
                return null;
            }

            try {
                const user = await db.user.create({
                    data: {
                        username: credentials.email,
                        email: credentials.email,
                        password: hashedPassword,
                        roleId : 2
                    }
                });
            
                return {
                    id: user.id.toString(),
                    username: user.username,
                    email: user.email
                }
            } catch(e) {
                console.error(e);
            }

            return null
          },
        })
    ],
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        // TODO: can u fix the type here? Using any is bad
        async session({ token, session }: any) {
            session.user.id = token.sub

            return session
        }
    }
  }
 