import { Comment } from '@/interfaces/comment.interface';

export interface Product {
  name: string;
  brand: string;
  price: number;
  quantityAvailable: number;
  description: string;
  features: [
    {
      title: string;
      descrition: string;
    },
  ];
  comments: [Comment];
  // TODO: Add category and Discount support
}
