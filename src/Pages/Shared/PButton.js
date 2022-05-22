import React from 'react';

const PButton = ({ children }) => {
    return (
        <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-info to-secondary">
            {children}</button>
    );
};

export default PButton;