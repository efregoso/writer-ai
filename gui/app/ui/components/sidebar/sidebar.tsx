'use client'

import 'react';
import {
    sidebarButtons,
    SIDEBAR_BUTTON_CLASSNAME,
    SIDEBAR_BUTTON_CONTAINER_CLASSNAME,
} from '../utils/constants';
import './sidebar.css';

/**
 * This side bar fills the div container is it placed in.
 * @returns The Sidebar component for Writer AI
 */
export default function Sidebar() {
    // Each sidebar button acts as a collapsible tab.
    // User can click and drag any one sidebar component to turn it into either
    // a standalone window or an element in the existing HTML grid.

    return (
        <div className="sidebar-container">
            {sidebarButtons.map((button) => (
                <div className={`${SIDEBAR_BUTTON_CONTAINER_CLASSNAME} ${(button.containerClassName ?? '')}`} 
                    key={button.id}
                >
                    <a href={button.routerLink}>
                        <button id={button.id} 
                            className={`${SIDEBAR_BUTTON_CLASSNAME} ${(button.className ?? '')}`}
                        >
                            {button.label}
                        </button>
                    </a>
                </div>
            ))}
        </div>
    );
}