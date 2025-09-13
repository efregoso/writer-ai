'use client'

import 'react';
import { sidebarButtons } from '../utils/constants';

export default function Sidebar() {
    return (
        <div className="sidebar-container">
            {sidebarButtons.map((button) => (
                <a key={button.id} href={button.routerLink}>
                    <button>
                        {button.label}
                    </button>
                </a>
            ))}
        </div>
    );
}