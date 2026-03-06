"use-client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function SignUp() {
    return (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
            <Card>
                <CardHeader>
                    <CardTitle>
                        Sign Up
                    </CardTitle>
                    <CardDescription>
                        Create an account to start tracking you job applications
                    </CardDescription>
                </CardHeader>
                <form>
                    <CardContent>
                        <div>
                            <Label htmlFor="name" >Name</Label>
                            <Input 
                                id="name" 
                                type="text" 
                                placeholder="John Doe" 
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="email" >Email</Label>
                            <Input 
                                id="email" 
                                type="text" 
                                placeholder="John@example.com" 
                                required 
                            />
                        </div>
                        <div>
                            <Label htmlFor="password" >Password</Label>
                            <Input 
                                id="password" 
                                type="password" 
                                placeholder="Password123" 
                                required 
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" >Sign Up</Button>
                        <p>Already have an account? <Link href="/sign-in">Sign In</Link></p>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}