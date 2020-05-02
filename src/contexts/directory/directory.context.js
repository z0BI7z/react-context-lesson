import {createContext} from 'react';

import DIRECTORY_DATA from './directory.data';

export const DirectoryContext = createContext({
    directory: DIRECTORY_DATA,
});