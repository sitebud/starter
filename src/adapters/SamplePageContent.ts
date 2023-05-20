import {
    DocumentContentContext,
    DocumentsListField,
    ImageField,
    LinkField,
} from './types';
/**
 * From SamplePage_MetaData
 */
export type SamplePage_MetaData_BasicSeoDataBlock = {
    __accessLevel?: number;
    metaDataFields: { description: string; robots: string };
};
/**
 * From Document Areas
 */
export type SamplePage_MetaData = Array<{
    basicSeoDataBlock?: SamplePage_MetaData_BasicSeoDataBlock;
}>;
/**
 * From SamplePage_Body
 */
export type SamplePage_Body_MainPageHeroBlock = {
    __accessLevel?: number;
    heroTitle: { text: string };
};
/**
 * From Document Areas
 */
export type SamplePage_Body = Array<{
    mainPageHeroBlock?: SamplePage_Body_MainPageHeroBlock;
}>;
/**
 * Document Areas
 */
export type SamplePage_DocumentAreas = {
    metaData: SamplePage_MetaData;
    body: SamplePage_Body;
};
/**
 * Document Content
 */
export type SamplePageContent = {
    title: string;
    slug: string;
    dateUpdated?: number;
    authors?: Record<string, number>;
    path: string;
    locale?: string;
    hasRestrictedAreas?: boolean;
    baseUrl: string;
    documentAreas: SamplePage_DocumentAreas;
};