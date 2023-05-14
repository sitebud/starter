import {DocumentConfig} from '@sitebud/sdk-lib';
import {pageFields} from '../dataFields/pageFields';

export const MainPage: DocumentConfig = {
    type: 'main_page',
    label: 'Main Page',
    defaultTitle: 'Home',
    defaultSlug: 'home',
    description: 'The main page, often called the "homepage," is the entry point and central hub of a website. It provides an overview of the site\'s purpose, features key content and sections, and offers intuitive navigation.',
    dataFields: pageFields,
    imageName: '',
    documentAreas: {
    }
};
