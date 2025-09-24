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
    iconHref?: string;
    className?: string;
    containerClassName?: string,
    ariaLabel: string;
    routerLink: string;
    linkType: LinkType;
}

/**
 * The className of the sidebar button container
 */
export const SIDEBAR_BUTTON_CONTAINER_CLASSNAME = "sidebar-button-container";

/**
 * The className of all sidebar buttons
 */
export const SIDEBAR_BUTTON_CLASSNAME = "sidebar-button";

/**
 * The className of the hide sidebar button container
 */
export const HIDE_SIDEBAR_TOGGLE_CONTAINER_CLASSNAME = "hide-sidebar-toggle-container";

/**
 * The className of the hide sidebar button
 */
export const HIDE_SIDEBAR_TOGGLE_CLASSNAME = "hide-sidebar-toggle"

/**
 * Collection of buttons that appear in the sidebar
 */
export const sidebarButtons: SidebarButton[] = [
    {
        id: 'home-button',
        label: "Home",
        ariaLabel: "A button for toggling the Home page panel",
        routerLink: "https://www.askjeeves.com",
        linkType: LinkType.INTERNAL,
    },
    {
        id: 'research-panel-toggle',
        label: 'Research',
        ariaLabel: 'A button for toggling the integrated research resources panel',
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
        id: 'saved-notes-panel-toggle',
        label: 'Saved Notes',
        ariaLabel: 'A button for toggling the saved notes panel',
        routerLink: 'https://www.bing.com',
        linkType: LinkType.INTERNAL,
    },
    {
        id: 'hide-sidebar-toggle',
        label: 'Hide sidebar',
        className: HIDE_SIDEBAR_TOGGLE_CLASSNAME,
        containerClassName: HIDE_SIDEBAR_TOGGLE_CONTAINER_CLASSNAME,
        ariaLabel: 'A toggle button to hide the sidebar',
        routerLink: 'https://www.writing.com',
        linkType: LinkType.INTERNAL,
    },
];