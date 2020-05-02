export const getCollectionsForPreview = collections => {
    return Object.keys(collections).map(key => collections[key]);
}