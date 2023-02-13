import Header from '../../components/Header';
import { Container, Title, Form, Input, TextArea, Button } from './style';
import { FaRegNewspaper } from 'react-icons/fa';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const ref = useRef();
  const navigate = useNavigate('');

  const handleCreate = async (e) => {
    e.preventDefault();
    const post = ref.current;
    const token = localStorage.getItem('token');

    const title = post.title.value;
    const description = post.description.value;
    const text = post.text.value;
    const tag = post.tag.value;
    const banner = post.banner.value;

    if (!title || !description || !text || !tag || !banner) {
      return toast.error('Fill in all fields');
    }

    await api
      .post(
        '/posts',
        {
          title: title,
          description: description,
          text: text,
          tag: tag,
          banner: banner,
        },
        {
          headers: {
            'x-access-token': `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        toast.success('Post created successfully!');
        return navigate('/');
      });
  };

  return (
    <>
      <Header displayAuth={'none'} displayAdmin={'block'} />;
      <Container>
        <Title>
          <FaRegNewspaper size={55} />
          CREATE
        </Title>
        <Form ref={ref} onSubmit={handleCreate}>
          <Input placeholder="Title" name="title" type="text" />
          <TextArea placeholder="Description" name="description" />
          <TextArea placeholder="Text" name="text" />
          <Input placeholder="Tag" name="tag" type="text" />
          <Input placeholder="Banner (url)" name="banner" type="text" />
          <Button>Create</Button>
        </Form>
      </Container>
    </>
  );
};

export default Create;
