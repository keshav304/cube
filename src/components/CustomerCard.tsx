import React from 'react';
import { Customer } from '../types/Customer';

interface CustomerCardProps {
    customer: Customer;
    isSelected: boolean;
    onSelect: () => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer, isSelected, onSelect }) => {
    return (
        <div className={`customer-card ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
            <h3>{customer.name}</h3>
            <p>{customer.title}</p>
        </div>
    );
};

export default CustomerCard;
