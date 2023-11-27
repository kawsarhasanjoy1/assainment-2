interface Order {
  productName: string;
  price: number;
  quantity: number;
}

interface user {
  userId: string;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  Order?: Order[];
}

export { user };
