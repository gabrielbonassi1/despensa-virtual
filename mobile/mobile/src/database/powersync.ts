import { Schema, Table, Column, ColumnType } from '@powersync/react-native';

export const APP_SCHEMA = new Schema ([
  new Table({
    name: 'inventory_items',
    columns: [
      new Column({ name: 'quantity', type: ColumnType.TEXT }),
      new Column({ name: 'expiration_date', type: ColumnType.TEXT }),
      new Column({ name: 'price_cents', type: ColumnType.TEXT }),
      new Column({ name: 'product_id', type: ColumnType.TEXT }),
      new Column({ name: 'storage_location_id', type: ColumnType.TEXT }),
      new Column({ name: 'store_id', type: ColumnType.TEXT }),
      new Column({ name: 'household_id', type: ColumnType.TEXT }),
      new Column({ name: 'created_at', type: ColumnType.TEXT }),
      new Column({ name: 'updated_at', type: ColumnType.TEXT }),
      new Column({ name: 'is_deleted', type: ColumnType.TEXT }),
    ],
  }),
  new Table({
    name: 'products',
    columns: [
      new Column({ name: 'name', type: ColumnType.TEXT }),
      new Column({ name: 'brand', type: ColumnType.TEXT }),
      new Column({ name: 'barcode', type: ColumnType.TEXT }),
      new Column({ name: 'category_id', type: ColumnType.TEXT }),
      new Column({ name: 'created_by_household_id', type: ColumnType.TEXT }),
      new Column({ name: 'created_at', type: ColumnType.TEXT }),
      new Column({ name: 'updated_at', type: ColumnType.TEXT }),
      new Column({ name: 'is_deleted', type: ColumnType.TEXT }),
    ],
  }),
  new Table({
    name: 'storage_locations',
    columns: [
      new Column({ name: 'household_id', type: ColumnType.TEXT }),
      new Column({ name: 'name', type: ColumnType.TEXT }),
      new Column({ name: 'max_capacity', type: ColumnType.TEXT }),
      new Column({ name: 'created_at', type: ColumnType.TEXT }),
      new Column({ name: 'updated_at', type: ColumnType.TEXT }),
      new Column({ name: 'is_deleted', type: ColumnType.TEXT }),
    ],
  }),
  new Table({
    name: 'stores',
    columns: [
      new Column({ name: 'name', type: ColumnType.TEXT }),
      new Column({ name: 'zip_code', type: ColumnType.TEXT }),
      new Column({ name: 'address', type: ColumnType.TEXT }),
      new Column({ name: 'city', type: ColumnType.TEXT }),
      new Column({ name: 'state', type: ColumnType.TEXT }),
      new Column({ name: 'notes', type: ColumnType.TEXT }),
      new Column({ name: 'created_by_household_id', type: ColumnType.TEXT }),
      new Column({ name: 'created_at', type: ColumnType.TEXT }),
      new Column({ name: 'updated_at', type: ColumnType.TEXT }),
      new Column({ name: 'is_deleted', type: ColumnType.TEXT }),
    ],
  }),
  new Table({
    name: 'households',
    columns: [
      new Column({ name: 'name', type: ColumnType.TEXT }),
      new Column({ name: 'created_at', type: ColumnType.TEXT }),
      new Column({ name: 'updated_at', type: ColumnType.TEXT }),
      new Column({ name: 'is_deleted', type: ColumnType.TEXT }),
    ],
  }),
  new Table({
    name: 'users',
    columns: [
      new Column({ name: 'name', type: ColumnType.TEXT }),
      new Column({ name: 'household_id', type: ColumnType.TEXT }),
      new Column({ name: 'created_at', type: ColumnType.TEXT }),
      new Column({ name: 'updated_at', type: ColumnType.TEXT }),
      new Column({ name: 'is_deleted', type: ColumnType.TEXT }),
    ],
  }),
  new Table({
    name: 'household_members',
    columns: [
      new Column({ name: 'household_id', type: ColumnType.TEXT }),
      new Column({ name: 'user_id', type: ColumnType.TEXT }),
      new Column({ name: 'role', type: ColumnType.TEXT }),
      new Column({ name: 'created_at', type: ColumnType.TEXT }),
      new Column({ name: 'updated_at', type: ColumnType.TEXT }),
      new Column({ name: 'is_deleted', type: ColumnType.TEXT }),
    ],
  }),
]);