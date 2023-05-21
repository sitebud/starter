import React from 'react';
import {useAdaptedContent} from '@/adapters';

export function MainNavigationArea() {
    const {siteContent} = useAdaptedContent();
    if (siteContent) {
        const {documentAreas: {mainNavigation}} = siteContent;
        return (
            <section className="flex flex-row justify-between items-center py-3 border-b-[1px] border-gray-200">
                    {mainNavigation.map((mainNavigationBlockContent, idx) => {
                        const {siteLogoBlock} = mainNavigationBlockContent;
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
                        }
                    })}
                <div className="grow flex flex-row justify-end">

                </div>
            </section>
        );
    }
    return null;
}