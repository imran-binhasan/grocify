// pages/login.tsx
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await signIn('credentials', { redirect: false, email, password });
        if (res?.ok) {
            dispatch(login(res?.user));
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
