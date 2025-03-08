// src/types/cart.ts
import { FoodItem } from './food';

export interface CartItemProps extends FoodItem {
  onAdd?: () => void;
  onRemove?: () => void;
}