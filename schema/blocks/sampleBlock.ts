import {BlockConfig} from '@sitebud/sdk-lib';

export const sampleBlock: BlockConfig = {
    label: 'Sample Block With Single Component',
    description: 'This block consists of a single component, encompassing all available properties in the CMS.',
    components: {
        sampleComponent: {
            indexNumber: 0,
            helpText: 'This block consists of a single component, encompassing all available properties in the CMS. While this block includes a single component, it\'s not limited to one. Blocks can house multiple components. The interplay of numerous components and their respective properties allows for the creation of diverse web page content.',
            label: 'Component With All Props',
            props: {
                heading: {
                    indexNumber: 0,
                    type: 'HeaderText',
                    label: 'Header Text Property',
                    fieldContent: {
                        htmlText: '<h1>Type some heading...</h1>',
                    }
                },
                paragraph: {
                    indexNumber: 1,
                    type: 'ParagraphText',
                    label: 'Paragraph Text Property',
                    fieldContent: {
                        htmlText: '<p>Type some text...</p>',
                    }
                },
                image: {
                    indexNumber: 2,
                    type: 'Image',
                    label: 'Image Property',
                    fieldContent: {
                        isRequired: true
                    }
                },
                documentsList: {
                    indexNumber: 3,
                    type: 'DocumentsList',
                    label: 'Documents List',
                    fieldContent: {
                        selectionMode: 'selectDocuments',
                        isRequired: true,
                    },
                    fieldContentVariants: [
                        {
                            label: 'Select Documents By One',
                            fieldContent: {
                                selectionMode: 'selectDocuments',
                                isRequired: true
                            }
                        },
                        {
                            label: 'Select Documents By Parent',
                            fieldContent: {
                                selectionMode: 'selectChildrenDocuments',
                                isRequired: true
                            }
                        }
                    ]
                },
                stringValue: {
                    indexNumber: 4,
                    type: 'StringValue',
                    fieldContent: {
                        value: 'Arbitrary string value',
                        isRequired: true
                    }
                }
            }
        }
    }
};
