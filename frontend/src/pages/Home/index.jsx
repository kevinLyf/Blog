import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { Container, Main, BoxWrap } from './style';
import { ClipLoader } from 'react-spinners';
import api from '../../services/api';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('http://localhost:3333/posts');
        setPosts(res.data.posts);
      } catch (err) {
        console.log(err.message);
      }
      console.log(posts);
      setLoading(false);
    };
    fetchData();
  }, [loading]);

  const usePosts = posts.map((post) => (
    <Card
      key={post._id}
      title={post.title}
      tag={post.tag}
      description={post.description}
      banner={post.banner}
      createAt={post.createAt}
    />
  ));


  return (
    <Container>
      <Main>
        <BoxWrap>
          {loading && <ClipLoader color="#f55050" speedMultiplier={0.7} />}
          {!loading && usePosts}
        </BoxWrap>
      </Main>
    </Container>
  );
};

export default Home;
