import { ContentAdapter } from '@sitebud/bridge-lib';
import { SiteContent, Site_DocumentAreas } from './types';
export class SiteContentAdapter extends ContentAdapter<SiteContent> {
    adapt(): SiteContent {
        const { content, hasRestrictedAreas, baseUrl, availableLocales } =
            this._documentData;
        const result: SiteContent = {
            hasRestrictedAreas,
            baseUrl: baseUrl || '',
            availableLocales: availableLocales || [],
            documentAreas: {
                mainNavigation: [],
            },
        };
        result.documentAreas = this.processDocumentAreas({
            mainNavigation: {
                siteLogoBlock: {
                    logoImage: [{ name: 'image', type: 'Image' }],
                    logoTitle: [{ name: 'text', type: 'StringValue' }],
                },
                navigationMenuBlock: {
                    navigationMenu: [
                        { name: 'documentsList', type: 'DocumentsList' },
                    ],
                },
            },
        }) as Site_DocumentAreas;
        return result;
    }
}