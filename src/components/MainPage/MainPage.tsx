import React from 'react';
import {useAdaptedContent} from '@/adapters';
import {MainPageHead} from '@/components/MainPage/MainPageHead';

export function MainPage() {
    const {mainPageContent} = useAdaptedContent();
    if (mainPageContent) {
        return (
            <>
                <MainPageHead/>
                <main className="w-full container">
                    {mainPageContent.documentAreas.body.map((bodyBlockContext, idx) => {
                        const {mainPageHeroBlock} = bodyBlockContext;
                        if (mainPageHeroBlock) {
                            return (
                                <section key={`mainPageHeroBlock_${idx}`} className="py-32">
                                    <div className="w-full custom-prose" dangerouslySetInnerHTML={{__html: mainPageHeroBlock.heroTitle.text}} />
                                </section>
                            );
                        }
                    })}
                </main>
            </>
        );
    }
    return null;
}
