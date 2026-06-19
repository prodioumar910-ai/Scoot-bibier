export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
}

export interface Partner {
  id: string;
  name: string;
  role: string;
  logo: string;
}

export interface PhotoshootImage {
  id: string;
  url: string;
  title: string;
}
