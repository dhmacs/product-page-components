import React from 'react';
import { Au, Ca, De, Eu, Fr, Gb, Us } from './flags';

const StoreFlag = ({ storeCode, style, id = null }) => {
   const svgProps = {
      style,
      id,
      'data-country': storeCode,
   };

   switch (storeCode.toUpperCase()) {
      case 'AU':
         return <Au {...svgProps} />;
      case 'CA':
         return <Ca {...svgProps} />;
      case 'DE':
         return <De {...svgProps} />;
      case 'FR':
         return <Fr {...svgProps} />;
      case 'GB':
         return <Gb {...svgProps} />;
      case 'EU':
         return <Eu {...svgProps} />;
      case 'US':
      default:
         return <Us {...svgProps} />;
   }
};

export default StoreFlag;
