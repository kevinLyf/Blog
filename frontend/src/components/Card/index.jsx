import {
  CardBox,
  CardDescription,
  CardExtraInformation,
  CardImage,
  CardInformation,
  CardTag,
  CardTime,
  CardTitle,
} from './style';

const Card = ({ id, title, tag, description, createAt, banner  }) => {
  return (
    <CardBox key={id}>
      <CardImage src={banner} />
      <CardInformation>
        <CardExtraInformation>
          <CardTag>{tag}</CardTag>
          <CardTime>{createAt}</CardTime>
        </CardExtraInformation>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
        {description}
        </CardDescription>
      </CardInformation>
    </CardBox>
  );
};

export default Card;
