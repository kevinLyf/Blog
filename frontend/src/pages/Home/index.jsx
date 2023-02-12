import { useEffect, useState } from 'react';
import { Container, Main, BoxWrap } from './style';
import { ClipLoader } from 'react-spinners';
import Card from '../../components/Card';
import api from '../../services/api';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';

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
      id={post._id}
    />
  ));

  return (
    <>
      {<HeaderChoice />}
      <Container>
        <Main>
          <BoxWrap>
            {loading && <ClipLoader color="#f55050" speedMultiplier={0.7} />}
            {!loading && usePosts}
          </BoxWrap>
        </Main>
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


export default Home;
