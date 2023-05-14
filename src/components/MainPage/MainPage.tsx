import React from 'react';
import {useAdaptedContent} from '@/adapters';
import {MainPageHead} from '@/components/MainPage/MainPageHead';

export function MainPage() {
    const {mainPageContent} = useAdaptedContent();
    if (mainPageContent) {
        return (
            <>
                <MainPageHead/>
                <div>
                    <code>
                        <pre>
                            {JSON.stringify(mainPageContent, null, 4)}
                        </pre>
                    </code>
                </div>
            </>
        );
    }
    return null;
}
