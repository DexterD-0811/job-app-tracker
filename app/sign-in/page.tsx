"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { signIn } from "@/lib/auth/auth-client"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function SignIn() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const result = await signIn.email({
                email,
                password,
            });

            if(result.error) {
                setError(result.error.message ?? "Failed to sign in");
            } else {
                router.push("/dashboard");
            }
        } catch (err) {
            setError("An unexpected error occured");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
            <Card className="w-full max-w-md border-gray-200 shadow-lg">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-black">
                        Sign In
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                        Enter your credentials to access your account
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <CardContent className="space-y-4">
                        {error && (
                        <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                            {error}
                        </div>
                        )}
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-700" >Email</Label>
                            <Input 
                                id="email" 
                                type="email" 
                                placeholder="John@example.com" 
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required 
                                className="border-gray-300 focus:border-primary focus:ring-primary"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-gray-700" >Password</Label>
                            <Input 
                                id="password" 
                                type="password" 
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required 
                                className="border-gray-300 focus:border-primary focus:ring-primary"
                                minLength={8}
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button 
                            type="submit" 
                            className="w-full bg-primary hover:bg-primary/90" 
                            disabled={loading}
                        >
                            {loading ? "Signing In..." : "Sign In"}
                        </Button>
                        <p className="text-center text-sm text-gray-600">
                            Don't have an account?
                            <Link href="/sign-up" className="font-medium text-primary hover:underline pl-2">Sign Up</Link>
                        </p>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}