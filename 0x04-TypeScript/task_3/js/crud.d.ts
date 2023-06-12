import { rowID } from './interface.ts';
import { RowElement } from './interface.ts';

// Function signature for create operation
type CreateRow<T> = (data: T) => Promise<T>;
// Function signature for read operation
type ReadFunction<T> = (id: string) => Promise<T | null>;
// Function signature for update operation
type UpdateRow<T> = (id: string, data: Partial<T>) => Promise<T | null>;
// Function signature for delete operation
type DeleteRow = (id: rowID) => Promise<boolean>;
