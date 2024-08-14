import React, { useEffect, useState } from 'react';

interface PhotoGridProps {
    userId: string; // This will help in changing images when the user changes
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ userId }) => {
    const [currentPhotos, setCurrentPhotos] = useState<string[]>([]);

    useEffect(() => {
        fetchPhotos();
    }, [userId]);    
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            fetchPhotos();
        }, 10000); // change photos every 10 seconds

        return () => clearInterval(intervalId);
    }, []);


    const fetchPhotos = async () => {
        try {
            const photos = Array.from({ length: 9 }, () => {
                const randomId = Math.floor(Math.random() * 200) + 1;
                return `https://picsum.photos/id/${randomId}/300/400`;
            });
            setCurrentPhotos(photos);
        } catch (error) {
            console.error('Error fetching initial photos:', error);
        }
    };


    return (
        <div className="photo-grid">
            {currentPhotos.map((photo, index) => (
                <img key={index} src={photo} alt={`photo-${index}`} />
            ))}
        </div>
    );
};

export default PhotoGrid;
