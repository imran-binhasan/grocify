import NextAuth from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name:'Credentials',
            credentials:{
                email:{
                    label: 'Email',
                    type: 'email'
                },
                password:{
                    label: 'Password',
                    type: 'password'
                },
                async authorize(credentials) {
                    const res = await fetch('localhost:1000/api/auth/login',{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password
                        }),
                    });
                    const user = await res.json();
                    if(user){
                        return user
                    }
                    else{
                        return null;
                    }
                }
            }
        })
    ],
    pages: {
        signIn:'/login',
        error:'/auth/error'
    }
});