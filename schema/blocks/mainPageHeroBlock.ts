import {BlockConfig} from '@sitebud/sdk-lib';

export const mainPageHeroBlock: BlockConfig = {
    label: 'Hero Block',
    description: 'A sample of the hero block for main page',
    imageName: 'block_mockup.webp',
    components: {
        heroTitle: {
            label: 'Hero Title',
            helpText: '',
            indexNumber: 0,
            props: {
                text: {
                    indexNumber: 0,
                    type: 'HeaderText',
                    fieldContent: {
                        htmlText: '<h1>Welcome to the starter template for SiteBud CMS</h1>'
                    }
                }
            }
        }
    }
};
