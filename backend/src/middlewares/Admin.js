import jwt from 'jsonwebtoken';

const admin = (req, res, next) => {
  try {
    const authHeader = req.headers['x-access-token'];
    const token = authHeader && authHeader.split(' ');

    if (!token || token[0] !== 'Bearer') {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const isAdmin = jwt.decode(token[1]).isAdmin;

    if (!isAdmin) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    next();
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export default admin;