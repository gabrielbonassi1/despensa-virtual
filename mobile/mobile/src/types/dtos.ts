export interface PantryItemDTO {
  id: string;
  name: string;
  brand?: string;
  categoryName: string;
  quantity: number;
  unit: string;
  displayPrice?: string; // already formatted
  expirationDate: string;
  expirationStatus?: 'valid' | 'warning' | 'expired';
  daysUntilExpiration?: number;
}

