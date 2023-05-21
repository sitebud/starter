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
                            const {heroImage, heroTitle} = mainPageHeroBlock;
                            return (
                                <section key={`mainPageHeroBlock_${idx}`} className="py-32">
                                    <div className="w-full mb-8 flex flex-col items-center">
                                        <img
                                            src={heroImage.image.src}
                                            alt={heroImage.image.alt}
                                            className="h-52"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: `${heroImage.image.focusX || 50}% ${heroImage.image.focusY || 50}%`
                                            }}
                                        />
                                    </div>
                                    <div className="w-full custom-prose" dangerouslySetInnerHTML={{__html: heroTitle.text}} />
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
