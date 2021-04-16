import React from 'react';

// style
import StyleComp from './style/button.module.css';

export default function ViewMoreBtn() {
    return (
        <button
            className={StyleComp.btn}
        >
            <div>
                <p
                    className={StyleComp.btn__content}
                >
                    View More
                </p>
            </div>
        </button>
    )
}