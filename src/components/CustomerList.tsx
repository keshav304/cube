import React, { useEffect, useState } from 'react';

interface Customer {
    id: string;
    name: string;
    title: string;
    address: string;
    photos: string[];
}

interface CustomerListProps {
    onSelectCustomer: (customer: Customer) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({ onSelectCustomer }) => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [selectedCustomerId, setSelectedCustomerId] = useState<string | null>(null);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        fetchCustomers(page);
    }, [page]);

    const fetchCustomers = async (page: number) => {
        const response = await fetch(`https://randomuser.me/api/?results=10&page=${page}`);
        const data = await response.json();
        
        const newCustomers = data.results.map((user: any) => ({
            id: user.login.uuid,
            name: `${user.name.first} ${user.name.last}`,
            title: user.name.title,
            address: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}`,
            photos: Array(9).fill(user.picture.large) // Using the user's picture for demo purposes
        }));

        setCustomers(newCustomers);
    };

    const handleCustomerClick = (customer: Customer) => {
        setSelectedCustomerId(customer.id);
        onSelectCustomer(customer);
    };

    const handleNextPage = () => {
        setPage(page + 1);
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div className="customer-list">
            {customers.map(customer => (
                <div
                    key={customer.id}
                    className={`customer-card ${customer.id === selectedCustomerId ? 'selected' : ''}`}
                    onClick={() => handleCustomerClick(customer)}
                >
                    <h3>{customer.name}</h3>
                    <p>{customer.title}</p>
                </div>
            ))}
            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={page === 1}>
                    Previous
                </button>
                <button onClick={handleNextPage}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default CustomerList;
