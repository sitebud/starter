import React from 'react';
import {ContentAdapterProvider} from '@/adapters';
import {MainPage} from '@/components/MainPage/MainPage';

export function PageFacade() {
    return (
        <ContentAdapterProvider>
            <MainPage />
        </ContentAdapterProvider>
    );
}
