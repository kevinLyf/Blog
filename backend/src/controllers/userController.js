import { create, findUserByEmail } from '../services/userService.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: 'Name, email and password are required' });
    }

    const hasEmail = await findUserByEmail({ email: email });

    if (hasEmail) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const body = {
      name,
      email,
      password,
    };

    const user = await create(body);

    res.status(201).json({ user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Email and password are required' });
    }

    const user = await findUserByEmail({ email: email }).select('+password');

    if (!user) {
      return res.status(400).json({ message: 'Email or password incorrect' });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ message: 'Email or password incorrect' });
    }

    const payload = {
      name: user.name,
      isAdmin: user.isAdmin,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);

    res.status(200).json({ message: 'Logged', token: token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const auth = async (req, res) => {
  try {
    const authHeader = req.headers['x-access-token'];
    const token = authHeader && authHeader.split(' ');

    if (!token || token[0] !== 'Bearer') {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const checkToken = jwt.verify(token[1], process.env.JWT_SECRET);

    if (!checkToken) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    res.status(200).json({ message: 'Authorized' });
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
