import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Review from './review/index.js';
import Visualizer from './visualizer';
import { Button, constants } from '@ifixit/toolbox';
import { _js } from '@ifixit/localize';

const { spacing } = constants;
const breakpointSm = '@media screen and (max-width: 650px)';

const Container = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;

   ${breakpointSm} {
      // Switch to non-flex because IE11 and column mode don't
      // play well.
      display: block;
      margin: auto;
   }
`;

const ReviewsContainer = styled.div`
   flex: 1;
   margin-left: 18px;

   ${(props) =>
      props.noReviews &&
      css`
         display: flex;
         justify-conent: center;
         align-items: center;
         padding-left: ${spacing[4]};
         min-height: 70px;
      `};

   ${breakpointSm} {
      padding-left: 0;
      margin-left: 0;
   }
`;

const NoReviewsText = styled.h3``;

const ShowMore = styled.div`
   margin: 24px 0;
`;

// Number of reviews that are revealed each time "Show More" is clicked.
const increment = 3;

class ProductReviews extends Component {
   state = {
      itemLimit: increment,
   };

   showMore = () => {
      this.setState((prevState) => {
         return {
            itemLimit: prevState.itemLimit + increment,
         };
      });
   };

   get reviewsWithText() {
      const { reviews } = this.props.productReviews;

      return reviews.filter((review) => review.body || review.headline);
   }

   render() {
      const { itemcode, productReviews, reviewsLink } = this.props;
      const reviewsUrl = reviewsLink && itemcode && `${reviewsLink}/${itemcode}`;
      const { itemLimit } = this.state;
      const reviewsWithText = this.reviewsWithText;
      const noReviews = reviewsWithText.length === 0;

      return (
         <Container id="productReviews">
            <Visualizer productReviews={productReviews} reviewsUrl={reviewsUrl} />
            <ReviewsContainer noReviews={noReviews}>
               {noReviews && <NoReviewsText>{_js('No comments to show yet')}</NoReviewsText>}
               {reviewsWithText.map((review, index) => {
                  if (index < itemLimit) {
                     return (
                        <Review
                           key={`${review.author.name}-${index}`}
                           review={review}
                           showBorder={
                              reviewsWithText.length > 1 && index < reviewsWithText.length - 1
                           }
                           reviewsUrl={reviewsUrl}
                        />
                     );
                  }
                  return null;
               })}
               {itemLimit < reviewsWithText.length && (
                  <ShowMore>
                     <Button fullWidth onClick={this.showMore}>
                        {_js(
                           'Show %1 more',
                           itemLimit < reviewsWithText.length - increment
                              ? increment
                              : reviewsWithText.length - itemLimit
                        )}
                     </Button>
                  </ShowMore>
               )}
            </ReviewsContainer>
         </Container>
      );
   }
}

ProductReviews.propTypes = {
   productReviews: PropTypes.object.isRequired,
   itemcode: PropTypes.string,
   reviewsLink: PropTypes.string,
};

export default ProductReviews;
