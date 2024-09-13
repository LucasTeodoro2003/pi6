import '../../../index';
import React, { useState, useEffect } from 'react';
import { showMessage } from '../lib';

function ButtonDarkorWhite() {
    const [isDark, setIsDark] = useState(false);

    const toggleDarkMode = () => {
        document.body.classList.toggle('dark');
        setIsDark(document.body.classList.contains(`dark`));
    };

    return (
        <button
            onClick={() => {
                toggleDarkMode();
                showMessage();
            }}
            className="bg-white dark:bg-gray-800 rounded-full w-12 h-12 fixed bottom-4 right-4 z-50 border-2 border-gray-900 flex items-center justify-center"
        >
            <img
                src={isDark ? "lua.png" : "sol.png"}
                alt={isDark ? "Lua" : "Sol"}
                className={`w-6 h-6 ${isDark ? 'filter invert' : ''}`}
            />
        </button>
    );
}

export {ButtonDarkorWhite};