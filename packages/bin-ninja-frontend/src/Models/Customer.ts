export interface Customer {
    id: string;
    name: string;
    email: string;
    address: string;
    phone: string;
    paymentFrequency: 'monthly' | 'weekly';
    paymentMethod: 'stripe' | 'cash';
  }