import React, {useContext} from 'react';

import { DirectoryContext } from '../../contexts/directory/directory.context';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = () => {
  const {directory} = useContext(DirectoryContext);

  return (
    <div className='directory-menu'>
      {directory.sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}

export default Directory;
