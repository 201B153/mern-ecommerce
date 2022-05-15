import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: '201b153',
      email: 'admin@test.com',
      password: bcrypt.hashSync('mayankm698'),
      isAdmin: true,
    },
    {
      name: 'john',
      email: 'user@test.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'flower-1',
      slug: 'flower-1',
      image: '/assets/pic1.png', //679x x 829x
      price: 120,
      countInStock: 10,
      category: 'Day',
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'best quality',
    },
    {
      //_id: '2',
      name: 'flower-2',
      slug: 'flower-2',
      image: '/assets/pic2.png',
      price: 120,
      countInStock: 0,
      category: 'Night',
      brand: 'hike',
      rating: 4.5,
      numReviews: 10,
      description: 'best quality',
    },
    {
      //_id: '3',
      name: 'flower-3',
      slug: 'flower-3',
      image: '/assets/pic3.png',
      price: 120,
      countInStock: 0,
      category: 'Day',
      brand: 'like',
      rating: 2.5,
      numReviews: 10,
      description: 'best quality',
    },
  ],
};

export default data;
