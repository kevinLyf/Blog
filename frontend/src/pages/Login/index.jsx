import { ButtonSubmit, Container, Form, Input, Title } from './style';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRef } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { useEffect } from 'react';

const Login = () => {
  const ref = useRef();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if(token) {
      return navigate('/')
    }
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = ref.current;
    const email = user.email.value;
    const password = user.password.value;

    if (!email || !password) {
      return toast.error('Fill in all fields');
    }

    await api
      .post('/auth/login', {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        toast.success('Logged!');
        return navigate('/');
      })
      .catch((err) => {
        return toast.error('Email or password incorrect');
      });
  };

  return (
    <>
      <Header displayAuth={'block'} displayAdmin={'none'} />
      <Container>
        <Form ref={ref} onSubmit={handleLogin}>
          <Title>LOGIN</Title>
          <Input placeholder="Email" name="email" type="email" />
          <Input placeholder="Password" name="password" type="password" />
          <ButtonSubmit type="submit">Login</ButtonSubmit>
        </Form>
      </Container>
    </>
  );
};

export default Login;
