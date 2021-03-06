import React from 'react';
import styled from 'styled-components';
import { Stars, constants } from '@ifixit/toolbox';
import { _js } from '@ifixit/localize';

const { color, spacing } = constants;

const RatingContainer = styled.a`
   display: flex;
   align-items: center;
   padding: ${spacing[2]} 0;
   cursor: pointer;
   color: inherit;
   text-decoration: none !important;
`;

const ReviewsCount = styled.h4`
   margin: 0 ${spacing[1]};
   font-size: 14px;
   font-weight: normal;
   color: inherit;
`;

const ReviewStars = ({
   numReviews,
   average,
   starSize,
}) => {
   return (
      <RatingContainer
         href="#productReviews"
         numReviews={numReviews}
      >
         <Stars
            rating={average}
            size={starSize}
            activeColor={color.blue[4]}
         />
         <ReviewsCount>
            {numReviews || ''}{' '}
            {numReviews === 1
               ? _js('review')
               : numReviews === 0
                  ? _js('No reviews yet')
                  : _js('reviews')}
         </ReviewsCount>
      </RatingContainer>
   );
}

export default ReviewStars;
