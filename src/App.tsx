import React, { useState } from 'react';
import './App.css';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';

interface Customer {
    id: string;
    name: string;
    title: string;
    address: string;
    photos: string[];
}

const App: React.FC = () => {
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

    const handleCustomerSelect = (customer: Customer) => {
        setSelectedCustomer(customer);
    };

    return (
        <div className="app-container">
            <header className="app-header">
               <h1>Cube Demo App</h1>
            </header>
            <div className="content">
                <div className="customer-list-container">
                    <CustomerList onSelectCustomer={handleCustomerSelect} />
                </div>
                <div className="customer-details-container">
                    {selectedCustomer ? (
                        <CustomerDetails customer={selectedCustomer} />
                    ) : (
                        <p>Please select a customer to view details.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;