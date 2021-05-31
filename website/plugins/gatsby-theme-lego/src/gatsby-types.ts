export interface SidebarItem {
    label: string;
    path: string;
    id?: string;
    badge?: string;
    __skip?: boolean;
}

export interface SidebarSection {
    label: string;
    items: SidebarItem[];
}

export interface Frontmatter {
    id?: string;
    title?: string;
}

export interface PageContext {
    sidebar?: SidebarSection[];
    frontmatter?: Frontmatter;
}

export interface Location {
    pathname: string;
}
