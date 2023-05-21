import { ContentAdapter } from '@sitebud/bridge-lib';
import { SamplePageContent, SamplePage_DocumentAreas } from './types';
export class SamplePageContentAdapter extends ContentAdapter<SamplePageContent> {
    adapt(): SamplePageContent {
        const { content, hasRestrictedAreas, baseUrl, path, locale } =
            this._documentData;
        const result: SamplePageContent = {
            title: content?.title || 'undefined',
            slug: content?.slug || 'undefined',
            dateUpdated: content?.dateUpdated,
            authors: content?.authors,
            path: path || '',
            locale,
            hasRestrictedAreas,
            baseUrl: baseUrl || '',
            documentAreas: {
                metaData: [],
                body: [],
            },
        };
        result.documentAreas = this.processDocumentAreas({
            metaData: {
                basicSeoDataBlock: {
                    metaDataFields: [
                        { name: 'description', type: 'StringValue' },
                        { name: 'robots', type: 'StringValue' },
                    ],
                },
            },
            body: {
                mainPageHeroBlock: {
                    heroTitle: [{ name: 'text', type: 'HeaderText' }],
                    heroImage: [{ name: 'image', type: 'Image' }],
                },
            },
        }) as SamplePage_DocumentAreas;
        return result;
    }
}