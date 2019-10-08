import React from 'react';
import styled from 'styled-components';
import { space, color, lineHeight, fontSize } from '@core-ds/primitives';
import Label from './label.js';
import { Checkbox } from '@ifixit/toolbox';
import { _js } from '@ifixit/localize';

const ProductLabel = styled.span`
   color: ${props => props.isSelected ? color.gray8 : color.gray5};
   font-size: ${fontSize[2]};
   text-align: left;
   font-weight: bold;
   line-height: ${lineHeight.tight};
   margin-bottom: ${space[2]};
   display: block;
`;

const checkboxMargin = space[2];

const ProductLabelWithCheckbox = styled(ProductLabel)`
   position: relative;
   cursor: pointer;
`;

const ProductName = styled.span`
   position: relative;
`;

const ThisItem = styled(Label)`
   margin-right: ${checkboxMargin};
`;

const Price = styled.span`
   color: ${props => props.isSelected ? color.red : color.gray5};
   padding: 0 5px;
   font-weight: normal;
`;

const formatPrice = (price) => price.toLocaleString(undefined, {
   minimumFractionDigits: 2,
   maximumFractionDigits: 2
});

function SelectableProduct({product, isSelected, isInitialProduct, onSelectedChange}) {
   return (
   <ProductLabelWithCheckbox isSelected={isSelected(product)}>
      <Checkbox
         checked={isSelected(product)}
         labelMargin={checkboxMargin}
         onChange={({checked}) => onSelectedChange(product.sku, checked)}>
         {isInitialProduct && (<ThisItem>{_js("This Item")}</ThisItem>)}
         <ProductName>{product.name}</ProductName>
         <Price isSelected={isSelected(product)}>${formatPrice(product.price)}</Price>
      </Checkbox>
   </ProductLabelWithCheckbox>);
}

function SelectableProductList({
   initialProduct,
   relatedProducts,
   isSelected,
   onSelectedChange}) {

   return (<React.Fragment>
      {relatedProducts.map((product, key) =>
         <SelectableProduct
            product={product}
            isSelected={isSelected}
            isInitialProduct={product.sku === initialProduct.sku}
            onSelectedChange={onSelectedChange}
            key={key}/>
      )}
   </React.Fragment>);
}

export default SelectableProductList;
