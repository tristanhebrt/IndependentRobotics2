import React, { useRef, useState } from 'react';
import styles from './InfoCard.module.css';

function InfoCard({ cards = [], flexDirection = 'row', justifyContent = "center", scrollable = true }) {
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

    // Mouse and touch event handlers for dragging
    const handleMouseDown = (e) => {
        if (!scrollable) return;
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
        containerRef.current.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        resetCursor();
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        resetCursor();
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 1; 
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    // Touch event handlers
    const handleTouchStart = (e) => {
        if (!scrollable) return;
        const touch = e.touches[0];
        setIsDragging(true);
        setStartX(touch.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const touch = e.touches[0];
        const x = touch.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 1;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const resetCursor = () => {
        if (containerRef.current) {
            containerRef.current.style.cursor = scrollable ? 'grab' : 'default';
        }
    };

    return (
        <div
            className={styles.infoCardContainer}
            ref={containerRef}
            style={{ flexDirection, justifyContent, cursor: scrollable ? 'grab' : 'default' }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
        >
            {cardContent}
        </div>
    );
}

export default InfoCard;
