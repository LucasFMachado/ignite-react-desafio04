import { ReactNode } from 'react'

export interface FoodInterface {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  available: boolean;
}

export interface InputProps {
  name: string;
  placeholder: string;
  icon?: new () => React.Component<any, any>;
}

export interface FoodComponentProps {
  food: FoodInterface;
  handleEditFood: (food: FoodInterface) => void;
  handleDelete: (id: number) => void;
}

export interface ContainerProps {
  available: boolean;
}

export interface HeaderProps {
  openModal: () => void;
}

export interface ContainerInputProps {
  isFilled: boolean;
  isFocused: boolean;
}

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactNode;
}

export interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: FoodInterface) => void;
}

export interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: FoodInterface;
  handleUpdateFood: (food: FoodInterface) => void;
}