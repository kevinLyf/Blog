import { ButtonSubmit, Container, Form, Input, Title } from './style';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRef } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { useEffect } from 'react';

const Register = () => {
  const ref = useRef();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if(token) {
      return navigate('/')
    }
  }, [])

  const handleRegister = async (e) => {
    e.preventDefault();

    const user = ref.current;
    const name = user.name.value;
    const email = user.email.value;
    const password = user.password.value;

    if (!email || !password) {
      return toast.error('Fill in all fields');
    }

    await api
      .post('/auth/register', {
        name: name,
        email: email,
        password: password,
      })
      .then(() => {
        toast.success('Registered!');
        return navigate('/login');
      })
      .catch((err) => {
        return toast.error('Email or password incorrect');
      });
  };

  return (
    <>
      <Header />
      <Container>
        <Form ref={ref} onSubmit={handleRegister}>
          <Title>Sign up</Title>
          <Input placeholder="Name" name="name" type="text" />
          <Input placeholder="Email" name="email" type="email" />
          <Input placeholder="Password" name="password" type="password" />
          <ButtonSubmit type="submit">Sign up</ButtonSubmit>
        </Form>
      </Container>
    </>
  );
};

export default Register;
