import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'a123',
      email: 'a123@example.com',
      password: bcrypt.hashSync('a123'),
      isAdmin: true,
    },
    {
      name: 'asdf',
      email: 'asdf@example.com',
      password: bcrypt.hashSync('asdf'),
      isAdmin: true,
    },
  ],
  products: [
    {
      name: '셜록홈즈 X-파일',
      slug: 'book',
      category: 'books',
      image: '/images/book4.jpg',
      price: 9000,
      brand: '매월당',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular Novel Book',
    },
    {
      name: '칵테일, 러브, 좀비',
      slug: 'book',
      category: 'books',
      image: '/images/book3.jpg',
      price: 7500,
      brand: '안전가옥',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular Novel Book',
    },
    {
      name: '그리고 아무도 없었다',
      slug: 'book',
      category: 'books',
      image: '/images/book2.jpg',
      price: 10800,
      brand: '해문',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular Novel Book',
    },
    {
      name: '쉽게 배우는 알고리즘',
      slug: 'book',
      category: 'books',
      image: '/images/book1.jpg',
      price: 26190,
      brand: '한빛아카데미',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'IT&Imformation book',
    },
  ],
}

export default data
