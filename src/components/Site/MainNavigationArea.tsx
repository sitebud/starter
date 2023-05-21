import React from 'react';
import {useAdaptedContent} from '@/adapters';
import Link from 'next/link';

export function MainNavigationArea() {
    const {siteContent} = useAdaptedContent();
    if (siteContent) {
        const {documentAreas: {mainNavigation}} = siteContent;
        return (
            <section className="flex flex-row justify-between items-center py-3 border-b-[1px] border-gray-200">
                    {mainNavigation.map((mainNavigationBlockContent, idx) => {
                        const {siteLogoBlock, navigationMenuBlock} = mainNavigationBlockContent;
                        if (siteLogoBlock) {
                            const {logoImage, logoTitle} = siteLogoBlock;
                            return (
                                <div key={`siteLogoBlock_${idx}`} className="flex flex-row items-center">
                                    <img
                                        className="h-12 w-12"
                                        style={{objectFit: 'cover', objectPosition: '50% 50%'}}
                                        src={logoImage.image.src}
                                        alt={logoImage.image.alt}
                                    />
                                    <div className="ml-5">
                                        <h5>{logoTitle.text}</h5>
                                    </div>
                                </div>
                            )
                        } else if (navigationMenuBlock) {
                            const {navigationMenu} = navigationMenuBlock;
                            return (
                                <div key={`navigationMenuBlock_${idx}`} className="flex flex-row items-center">
                                    {navigationMenu.documentsList.entries?.map((documentContext, contextIdx) => {
                                        const {mainPageContent, samplePageContent} = documentContext;
                                        if (mainPageContent || samplePageContent) {
                                            return (
                                                <div key={`navItem_${contextIdx}`}>
                                                    <Link href={mainPageContent?.path || samplePageContent?.path || '#'}>
                                                        {mainPageContent?.title || samplePageContent?.title || '#'}
                                                    </Link>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            );
                        }
                    })}
                <div className="grow flex flex-row justify-end">

                </div>
            </section>
        );
    }
    return null;
}