import { create, getAllPosts } from '../services/postService.js';

export const createPost = async (req, res) => {
  try {
    const { title, description, text, tag, banner } = req.body;

    if (!title || !description || !text || !tag || !banner) {
      return res.status(400).json({
        message: 'Title, description, text, tag, banner are required',
      });
    }

    function addZero(numero) {
      if (numero <= 9) return '0' + numero;
      else return numero;
    }
    let date = new Date();
    let FormatedDate =
      addZero(date.getDate().toString()) +
      '•' +
      addZero(date.getMonth() + 1).toString() +
      '•' +
      date.getFullYear();
    const body = {
      title,
      description,
      text,
      tag,
      banner,
      createAt: FormatedDate,
    };

    const post = await create(body);

    res.status(201).json({ message: 'Post created', post });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const GetAll = async (req, res) => {
  try {
    const posts = await getAllPosts();

    res.status(200).json({ posts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
