import { MainPageContent } from './MainPageContent';
import { SamplePageContent } from './SamplePageContent';
import { SiteContent } from './SiteContent';
export * from './MainPageContent';
export * from './SamplePageContent';
export * from './SiteContent';
export type DataFieldType = 'string' | 'number';
export type DocumentContentContext = {
    mainPageContent?: MainPageContent;
    samplePageContent?: SamplePageContent;
    siteContent?: SiteContent;
};
export type DocumentsListField = {
    entriesByParent?: Array<{
        portion: Array<DocumentContentContext>;
        portionOrigin: any;
    }>;
    entries?: Array<DocumentContentContext>;
};
export type ImageField = {
    src: string;
    alt: string;
    focusX?: number;
    focusY?: number;
};
export type LinkField = { href: string; target: string };
