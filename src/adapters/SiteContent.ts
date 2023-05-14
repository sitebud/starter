import { DocumentContentContext, DataFieldType } from './types';
/**
 * Data Fields
 */
export type Site_DataFields = {
    siteTitle?: { value: string; type: DataFieldType };
    siteLogo?: { value: string; type: DataFieldType };
};
/**
 * Document Content
 */
export type SiteContent = {
    hasRestrictedAreas?: boolean;
    baseUrl: string;
    availableLocales: Array<string>;
    tagsLinks: Record<string, string>;
    authorProfiles: Record<string, DocumentContentContext>;
    dataFields: Site_DataFields;
};