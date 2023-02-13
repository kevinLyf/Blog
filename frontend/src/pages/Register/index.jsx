import { ButtonSubmit, Container, Form, Input, Title } from './style';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRef, useState } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';
import { useEffect } from 'react';
import { ScaleLoader } from 'react-spinners';

const Register = () => {
  const ref = useRef();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (token) {
      return navigate('/');
    }
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();

    const user = ref.current;
    const name = user.name.value;
    const email = user.email.value;
    const password = user.password.value;

    if (!email || !password) {
      return toast.error('Fill in all fields');
    }

    setIsLoading(true);
    try {
      const res = await api.post('/auth/register', {
        name: name,
        email: email,
        password: password,
      });
      localStorage.setItem('token', res.data.token);
      toast.success('Registered!');
      return navigate('/login');
    } catch (err) {
      setIsLoading(false);
      return toast.error('Email already exists');
    }
  };

  return (
    <>
      <Header displayAuth={'block'} displayAdmin={'none'} />
      <Container>
        <Form ref={ref} onSubmit={handleRegister}>
          <Title>Sign up</Title>
          <Input placeholder="Name" name="name" type="text" />
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
              'Sign up'
            )}
          </ButtonSubmit>
        </Form>
      </Container>
    </>
  );
};

export default Register;
