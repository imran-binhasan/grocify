"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { login } from "@/features/authSlice";
import { useDispatch } from "react-redux";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(email, password);
        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });
        if (res?.ok) {
            dispatch(login(login?.user));
        }
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
                <div className="p-8  rounded shadow">
                    <h4 className="text-2xl font-medium text-center mb-4">Sign In</h4>
                    <form onSubmit={handleLogin} className="w-full max-w-md space-y-4">
                        <div>
                            <Input
                                className="w-full md:w-[400px] lg:w-[450px]" // Adjusts input width on larger screens
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <Input
                                className="w-full md:w-[400px] lg:w-[450px]" // Same for password field
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Remember me
                                </label>
                            </div>
                            <Link
                                href="/forgot"
                                className="text-sm text-green-600 hover:underline"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-green-600 text-white py-1 rounded-2xl hover:bg-green-700 transition"
                        >
                            Login
                        </Button>
                    </form>
                    <div>
                        <span className="text-sm">Don't have an account?<Link className=" text-green-600 hover:underline" href='/register'>Register</Link></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
