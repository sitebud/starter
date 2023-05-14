import { ContentAdapter } from '@sitebud/bridge-lib';
import { SiteContent } from './types';
export class SiteContentAdapter extends ContentAdapter<SiteContent> {
    adapt(): SiteContent {
        const {
            content,
            hasRestrictedAreas,
            baseUrl,
            tagsLinks,
            availableLocales,
        } = this._documentData;
        const result: SiteContent = {
            hasRestrictedAreas,
            baseUrl: baseUrl || '',
            availableLocales: availableLocales || [],
            tagsLinks: tagsLinks || {},
            authorProfiles: {},
            dataFields: {},
        };
        result.dataFields = this.processDataFields();
        result.authorProfiles = this.processAuthorsProfiles();
        return result;
    }
}