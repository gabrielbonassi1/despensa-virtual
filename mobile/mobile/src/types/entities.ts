export interface InventoryItem {
  id: string; // UUID
  quantity: number;
  expirationDate: number;
  priceCents: number;
  productId: string;
  storageLocationId?: string; // UUID
  storeId?: string; // UUID
  householdId: string; // UUID
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
};

export interface Product {
  id: string; // UUID
  name: string;
  brand?: string;
  barcode?: string;
  categoryId: string; // UUID
  createdByHouseholdId?: string; // UUID
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
};

export interface StorageLocation {
  id: string; // UUID
  householdId: string; // UUID
  name: string;
  maxCapacity: number;
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
};

export interface Store {
  id: string; // UUID
  name: string;
  zipCode: string;
  address: string;
  city: string;
  state: string;
  notes?: string;
  createdByHouseholdId?: string; // UUID
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
};

export interface Household {
  id: string; // UUID
  name: string;
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
};

export interface User {
  id: string; // UUID
  name: string;
  householdId: string // UUID
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
};

export interface HouseholdMember {
  id: string; // UUID
  householdId: string;
  userId: string;
  role: 'admin' | 'member';
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
};

export interface Category {
  id: string; // UUID
  householdId: string;
  name: string;
  createdAt: number;
  updatedAt: number;
  isDeleted: boolean;
}