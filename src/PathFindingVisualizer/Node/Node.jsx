import React from 'react';

const Node = ({row, col}) => {
    const handleClick = () => {
        console.log(`Node clicked: Row ${row}, Col ${col}`);
    };
    return (
        <div className="block w-10 h-10 bg-gray-200 border border-gray-400 rounded-md" onClick={handleClick}> 
        </div>
    );
}

export default Node;