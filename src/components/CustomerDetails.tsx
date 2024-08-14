import React from 'react';
import PhotoGrid from './PhotoGrid';

interface CustomerDetailsProps {
    customer: {
        id: string;
        name: string;
        title: string;
        address: string;
    };
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
    return (
        <div className="customer-details">
            <h2>{customer.name}</h2>
            <h3>{customer.title}</h3>
            <p>{customer.address}</p>
            <PhotoGrid userId={customer.id} />
        </div>
    );
};

export default CustomerDetails;
