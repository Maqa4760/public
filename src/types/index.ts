export interface Ad {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  location: string;
  images: string[];
  createdAt: Date;
  userId: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}