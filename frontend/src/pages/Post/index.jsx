import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  CreateAt,
  Description,
  Image,
  PostContainer,
  PostExtraInfomation,
  Title,
  Text,
} from './style';
import { FaCalendarAlt, FaUserAlt } from 'react-icons/fa';
import api from '../../services/api';
import { ClipLoader } from 'react-spinners';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';

const Post = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState([]);
  const [isValidPost, setIsValidPost] = useState(false);

  useEffect(() => {
    const fetchingPost = async () => {
      await api
        .get(`posts/${id}`)
        .then((res) => {
          setPost(res.data.posts);
          setIsLoading(true);
          setIsValidPost(true);
        })
        .catch((err) => {
          setIsValidPost(false);
        });

      setIsLoading(false);
    };
    fetchingPost();
  }, [isLoading]);

  const DoesNotExist = () => {
    if (!isLoading && !isValidPost) {
      return <p>This post does not exist</p>;
    }
  };

  return (
    <>
      {<HeaderChoice />}
      <Container>
        {<DoesNotExist />}
        {isLoading && <ClipLoader color="#f55050" speedMultiplier={0.7} />}
        {isValidPost && (
          <PostContainer>
            <Image src={post.banner} />
            <Title>{post.title}</Title>
            <Description>{post.description}</Description>
            <PostExtraInfomation>
              <CreateAt>
                <FaUserAlt size={23} />
                {post.author}
              </CreateAt>
              <CreateAt>
                <FaCalendarAlt size={23} />
                {post.createAt.replaceAll('•', '/')}
              </CreateAt>
            </PostExtraInfomation>
            <Text>{post.text}</Text>
          </PostContainer>
        )}
      </Container>
    </>
  );
};

const HeaderChoice = () => {
  const { isAuth, isAdmin } = useContext(AuthContext);
  if (isAdmin && isAuth) {
    return <Header displayAuth={'none'} displayAdmin={'block'} />;
  } else if (isAuth && !isAdmin) {
    return <Header displayAuth={'none'} displayAdmin={'none'} />;
  } else {
    return <Header displayAuth={'block'} displayAdmin={'none'} />;
  }
};

export default Post;
