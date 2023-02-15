import { Link } from 'react-router-dom';
import {
  CardAdminTools,
  CardBox,
  CardDescription,
  CardExtraInformation,
  CardImage,
  CardInformation,
  CardLink,
  CardTag,
  CardTime,
  CardTitle,
  ButtonAdmin,
} from './style';
import { FaEdit, FaTrash } from 'react-icons/fa';
import api from '../../services/api';
import { toast } from 'react-toastify';

const Card = ({ id, title, tag, description, createAt, banner, isAdmin }) => {
  const token = localStorage.getItem('token');
  const deletePost = async () => {
    if (!token) {
      toast.error('Unauthorized');
      return window.location.reload();
    } 
    await api
      .delete(`/posts/${id}`, {
        headers: {
          'x-access-token': `Bearer ${token}`,
        },
      }).then(() => {
        toast.success('Post deleted successfully');
      })
      .catch((err) => {
        toast.error('Unauthorized');
      });
  };

  return (
    <CardBox key={id}>
      <CardImage src={banner} />
      <CardInformation>
        <CardExtraInformation>
          <CardTag>{tag}</CardTag>
          <CardTime>{createAt}</CardTime>
        </CardExtraInformation>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardLink>
          <Link to={`/post/${id}`}>READ MORE</Link>
        </CardLink>
        {isAdmin && (
          <CardAdminTools>
            <ButtonAdmin>
              <FaTrash onClick={deletePost} />
            </ButtonAdmin>
            <ButtonAdmin>
              <FaEdit />
            </ButtonAdmin>
          </CardAdminTools>
        )}
      </CardInformation>
    </CardBox>
  );
};

export default Card;
