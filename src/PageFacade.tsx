import React from 'react';
import {ContentAdapterProvider} from '@/adapters';

export function PageFacade() {
    return (
        <ContentAdapterProvider>
            <div>Starter Page</div>
        </ContentAdapterProvider>
    );
}
