import { DocumentContentContext, DataFieldType } from './types';
/**
 * Data Fields
 */
export type MainPage_DataFields = {
    metaRobots?: { value: string; type: DataFieldType };
};
/**
 * Document Content
 */
export type MainPageContent = {
    title: string;
    slug: string;
    tags: Record<string, number>;
    dateUpdated?: number;
    authors?: Record<string, number>;
    path: string;
    locale?: string;
    hasRestrictedAreas?: boolean;
    baseUrl: string;
    dataFields: MainPage_DataFields;
};