/**
 * A utility file containing various constants and helper classes/functions used in Writer.AI
 */

/**
 * ---------------- GENERAL ----------------
 */
export enum LinkType {
    INTERNAL,
    EXTERNAL,
}


/**
 * ---------------- SIDEBAR ----------------
 */
export interface SidebarButton {
    id: string;
    label: string;
    ariaLabel: string;
    routerLink: string;
    linkType: LinkType;
}

export const sidebarButtons: SidebarButton[] = [
    {
        id: 'home-button',
        label: "Home",
        ariaLabel: "A button for toggling the Home page panel",
        routerLink: "https://www.askjeeves.com",
        linkType: LinkType.INTERNAL,
    },
    {
        id: 'browser-panel-toggle',
        label: 'Browser',
        ariaLabel: 'A button for toggling the integrated browser panel',
        routerLink: 'https://www.opera.com',
        linkType: LinkType.INTERNAL,
    },
    {
        id: 'story-bible-panel-toggle',
        label: 'Story Bible',
        ariaLabel: 'A button for toggling the integrated story bible panel',
        routerLink: 'https://www.yahoo.com',
        linkType: LinkType.INTERNAL,
    },
    {
        id: 'popout-widget-toggle',
        label: 'Popout panel',
        ariaLabel: 'A toggle button for the Writer.AI widget',
        routerLink: 'https://www.writing.com',
        linkType: LinkType.INTERNAL,
    },
];