import {
    DocumentContentContext,
    DocumentsListField,
    ImageField,
    LinkField,
} from './types';
/**
 * From Site_MainNavigation
 */
export type Site_MainNavigation_SiteLogoBlock = {
    __accessLevel?: number;
    logoImage: { image: ImageField };
    logoTitle: { text: string };
};
/**
 * From Document Areas
 */
export type Site_MainNavigation = Array<{
    siteLogoBlock?: Site_MainNavigation_SiteLogoBlock;
}>;
/**
 * Document Areas
 */
export type Site_DocumentAreas = {
    mainNavigation: Site_MainNavigation;
};
/**
 * Document Content
 */
export type SiteContent = {
    hasRestrictedAreas?: boolean;
    baseUrl: string;
    availableLocales: Array<string>;
    documentAreas: Site_DocumentAreas;
};