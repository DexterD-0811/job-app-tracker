import SignUp from "@/app/sign-up/page";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL!,
});

export cost {signIn, signUp, signOut, useSession } = authClient;