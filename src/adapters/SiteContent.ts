import {
    DocumentContentContext,
    DocumentsListField,
    ImageField,
    LinkField,
} from './types';
/**
 * From Site_MetaData
 */
export type Site_MetaData_SiteLogoBlock = {
    __accessLevel?: number;
    logoImage: { image: ImageField };
    logoTitle: { text: string };
};
/**
 * From Document Areas
 */
export type Site_MetaData = Array<{
    siteLogoBlock?: Site_MetaData_SiteLogoBlock;
}>;
/**
 * Document Areas
 */
export type Site_DocumentAreas = {
    metaData: Site_MetaData;
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