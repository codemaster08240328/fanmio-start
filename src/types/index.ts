export interface ItemPrice {
  amount: number;
  currency: string;
};

export interface CartItem {
  id: string;
  title: string;
  subtitle: string;
  quantity: number;
  price: ItemPrice;
};
