import {DocumentConfig} from '@sitebud/sdk-lib';
import {siteFields} from '../dataFields/siteFields';

export const Site: DocumentConfig = {
    type: 'site',
    label: 'Site',
    description: 'Global site content refers to elements consistently applied to each page on a website, ensuring a cohesive browsing experience. This may include headers, footers, navigation menus, logos, and contact information, which provide uniformity and easy access to essential resources.',
    dataFields: siteFields,
    documentAreas: {
    }
};
