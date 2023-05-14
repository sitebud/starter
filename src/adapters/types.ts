import { MainPageContent } from './MainPageContent';
import { SiteContent } from './SiteContent';
export * from './MainPageContent';
export * from './SiteContent';
export type DataFieldType = 'string' | 'number';
export type DocumentContentContext = {
    mainPageContent?: MainPageContent;
    siteContent?: SiteContent;
};
