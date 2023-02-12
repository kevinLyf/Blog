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
import { FaCalendarAlt } from 'react-icons/fa';
import api from '../../services/api';
import { ClipLoader } from 'react-spinners';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';

const Post = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState([]);
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    const fetchingPost = async () => {
      await api.get(`posts/${id}`).then((res) => {
        setPost(res.data.posts);
        setIsLoading(true);
      });

      setIsLoading(false);
    };
    fetchingPost();
  }, [isLoading]);

  return (
    <>
      {isAuth && <Header displayAuth={'none'} />}
      {!isAuth && <Header />}
      <Container>
        {isLoading && <ClipLoader color="#f55050" speedMultiplier={0.7} />}
        {!isLoading && (
          <PostContainer>
            <Image src={post.banner} />
            <PostExtraInfomation>
              <CreateAt>
                <FaCalendarAlt size={23} />
                {post.createAt.replaceAll('•', '/')}
              </CreateAt>
            </PostExtraInfomation>
            <Title>{post.title}</Title>
            <Description>{post.description}</Description>
            <Text>{post.text}</Text>
          </PostContainer>
        )}
      </Container>
    </>
  );
};

export default Post;
