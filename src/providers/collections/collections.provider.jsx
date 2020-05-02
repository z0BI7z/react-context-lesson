import React, { createContext, useState, useEffect } from 'react';

import SHOP_DATA from '../../contexts/collections/shop.data';
import { getCollectionsForPreview } from '../../redux/shop/shop.utils';

export const CollectionsContext = createContext({
    collections: {},
    collectionsForPreview: []
});

const CollectionsProvider = ({ children }) => {
    const [collectionsForPreview, setCollectionsForPreview] = useState([]);
    const [collections, setCollections] = useState(SHOP_DATA);

    useEffect(() => {
        setCollectionsForPreview(getCollectionsForPreview(collections));
    }, [collections]);

    return (
        <CollectionsContext.Provider
            value={{
                collections,
                collectionsForPreview
            }}
        >
            {children}
        </CollectionsContext.Provider>
    )
}

export default CollectionsProvider;