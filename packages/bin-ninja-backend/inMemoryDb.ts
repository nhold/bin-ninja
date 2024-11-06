import { Customer } from '../types/Customer';

class InMemoryDb {
  private customers: Map<string, Customer> = new Map();

  addCustomer(customer: Customer): void {
    this.customers.set(customer.id, customer);
  }

  getCustomer(id: string): Customer | undefined {
    return this.customers.get(id);
  }

  getAllCustomers(): Customer[] {
    return Array.from(this.customers.values());
  }

  updateCustomer(id: string, customer: Customer): void {
    this.customers.set(id, customer);
  }

  deleteCustomer(id: string): boolean {
    return this.customers.delete(id);
  }
}

export const db = new InMemoryDb();