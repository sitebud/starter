import { ContentAdapter } from '@sitebud/bridge-lib';
import { MainPageContent } from './types';
export class MainPageContentAdapter extends ContentAdapter<MainPageContent> {
    adapt(): MainPageContent {
        const { content, hasRestrictedAreas, baseUrl, path, locale } =
            this._documentData;
        const result: MainPageContent = {
            title: content?.title || 'undefined',
            slug: content?.slug || 'undefined',
            tags: content?.tags || {},
            dateUpdated: content?.dateUpdated,
            authors: content?.authors,
            path: path || '',
            locale,
            hasRestrictedAreas,
            baseUrl: baseUrl || '',
            dataFields: {},
        };
        result.dataFields = this.processDataFields();
        return result;
    }
}