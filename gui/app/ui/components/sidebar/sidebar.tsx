'use client'

import 'react';
import { sidebarButtons } from '../utils/constants';
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
                <div className='sidebar-button-container' key={button.id}>
                    <a href={button.routerLink}>
                        <button id={button.id} className="sidebar-button">
                            {button.label}
                        </button>
                    </a>
                </div>
            ))}
        </div>
    );
}