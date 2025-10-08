export interface BoxContent {
  name: string;
  quantity: number;
}

export interface ProductResponse {
  boxContent: BoxContent[];
  description: string;
  featureImage: string[];
  features: string;
  mainImage: string;
  name: string;
  price: number;
  _id: string;
  category: string;
}
