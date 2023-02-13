import { ButtonSubmit, Container, Form, Input, Title } from './style';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRef, useState } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import { useEffect } from 'react';
import { ScaleLoader } from 'react-spinners';

const Login = () => {
  const ref = useRef();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (token) {
      return navigate('/');
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = ref.current;
    const email = user.email.value;
    const password = user.password.value;

    if (!email || !password) {
      return toast.error('Fill in all fields');
    }

    setIsLoading(true);
    try {
      const res = await api.post('/auth/login', {
        email: email,
        password: password,
      });
      localStorage.setItem('token', res.data.token);
      toast.success('Logged!');
      return navigate('/');
    } catch (err) {
      setIsLoading(false);
      return toast.error('Email or password incorrect');
    }
  };

  return (
    <>
      <Header displayAuth={'block'} displayAdmin={'none'} />
      <Container>
        <Form ref={ref} onSubmit={handleLogin}>
          <Title>LOGIN</Title>
          <Input placeholder="Email" name="email" type="email" />
          <Input placeholder="Password" name="password" type="password" />
          <ButtonSubmit type="submit" disabled={isLoading ? true : false}>
            {isLoading ? (
              <ScaleLoader
                color="#fff"
                speedMultiplier={0.7}
                width={6}
                height={8}
              />
            ) : (
              'Login'
            )}
          </ButtonSubmit>
        </Form>
      </Container>
    </>
  );
};

export default Login;
