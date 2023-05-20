import {DocumentConfig} from '@sitebud/sdk-lib';
import {siteLogoBlock} from '../blocks';

export const Site: DocumentConfig = {
    type: 'site',
    label: 'Site',
    description: 'Global site content refers to elements consistently applied to each page on a website, ensuring a cohesive browsing experience. This may include headers, footers, navigation menus, logos, and contact information, which provide uniformity and easy access to essential resources.',
    documentAreas: {
        metaData: {
            indexNumber: 0,
            label: 'Meta Data',
            blocks: {
                siteLogoBlock
            }
        }
    }
};
