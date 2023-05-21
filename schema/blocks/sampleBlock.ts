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
                icon: {
                    indexNumber: 4,
                    label: 'Icon',
                    type: 'Icon',
                    fieldContent: {
                        isRequired: true
                    },
                    fieldContentVariants: [
                        {
                            label: 'Key Icon',
                            fieldContent: {
                                iconName: 'key',
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">\n' +
                                    '    <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>\n' +
                                    '    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>\n' +
                                    '</svg>',
                                isRequired: true
                            }
                        },
                        {
                            label: 'Trash Icon',
                            fieldContent: {
                                iconName: 'trash',
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">\n' +
                                    '    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>\n' +
                                    '    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>\n' +
                                    '</svg>',
                                isRequired: true
                            }
                        }
                    ]
                },
                stringValue: {
                    indexNumber: 5,
                    type: 'StringValue',
                    label: 'String Value',
                    fieldContent: {
                        value: 'Arbitrary string value',
                        isRequired: true
                    }
                }
            }
        }
    }
};
