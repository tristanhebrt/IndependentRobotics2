import React, { useRef, useState } from 'react';
import styles from './InfoCard.module.css';

function InfoCard({ cards = [], flexDirection = 'row', justifyContent = "center", scrollable = true }) {
    // Create a ref for the container
    const containerRef = useRef(null);
    
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const cardContent = cards.map(item => (
        <div key={item.id}>
            <div className={styles.infoCard}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
            </div>
        </div>
    ));

    // Event handlers for dragging functionality
    const handleMouseDown = (e) => {
        if (!scrollable) return; // Only allow dragging if scrollable
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
        containerRef.current.style.cursor = 'grabbing'; // Change cursor on drag
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        if (containerRef.current) {
            containerRef.current.style.cursor = scrollable ? 'grab' : 'default'; // Set cursor based on scrollable prop
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (containerRef.current) {
            containerRef.current.style.cursor = scrollable ? 'grab' : 'default'; // Set cursor based on scrollable prop
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return; // Stop the function if mouse is not down
        e.preventDefault(); // Prevent text selection
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 1; // The amount to scroll
        containerRef.current.scrollLeft = scrollLeft - walk; // Scroll the container
    };

    return (
        <div
            className={styles.infoCardContainer}
            ref={containerRef}
            style={{ flexDirection, justifyContent, cursor: scrollable ? 'grab' : 'default' }} // Set cursor based on scrollable prop
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            {cardContent}
        </div>
    );
}

export default InfoCard;
