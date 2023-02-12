import { Link } from 'react-router-dom';
import {
  CardBox,
  CardDescription,
  CardExtraInformation,
  CardImage,
  CardInformation,
  CardLink,
  CardTag,
  CardTime,
  CardTitle,
} from './style';

const Card = ({ id, title, tag, description, createAt, banner }) => {
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
      </CardInformation>
    </CardBox>
  );
};

export default Card;
