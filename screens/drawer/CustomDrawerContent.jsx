// CustomDrawerContent.js
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* Add custom items or UI here */}
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
