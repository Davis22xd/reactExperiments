import React from 'react';

export default ({title, type, value, required}) => {
        return (
            <div>
                <label>
                    {title}:
            <input type={type} value={value} required ={required} />
                </label>
            </div>
        );
}