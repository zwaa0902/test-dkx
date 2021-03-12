import { useState } from 'react';
import { useRouter } from 'next/router';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { HOME_ROUTE } from '../../constants/routes';

import { Wrapper } from './styles';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        router.push(HOME_ROUTE);
    };

    const handleChange = (event) => {
        if (event.target.id === 'email') {
            setEmail(event.target.value);
        } else if (event.target.id === 'password') {
            setPassword(event.target.value);
        }
    };

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <Input
                    id="email"
                    type="email"
                    label="Email"
                    value={email}
                    onChange={handleChange}
                    required
                />
                <Input
                    id="password"
                    type="password"
                    label="Password"
                    value={password}
                    onChange={handleChange}
                    required
                />
                <Button type="submit">Login</Button>
            </form>
        </Wrapper>
    );
};

export default Login;
