export type productProps = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
};

// cart
type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

export interface CartState {
  cart: CartItem[];
  count: number;
  addToCart: (item: CartItem) => void;
  removeItem: (id: number) => void;
  removeFromCart: (id: number) => void;
  loading: boolean;
}
