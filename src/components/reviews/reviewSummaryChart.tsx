import ReviewComment from './reviewComment';
import ReviewRating from './reviewRating';
import ReviewProgress from './reviewProgress';

interface Props {
  reviews: {
    avatar: string;
    name: string;
    date: string;
    rating: number;
    comment: string;
    productID: number;
  }[]
}

export default function ReviewSummaryChart({
  reviews
}: Props) {

  let CommentsList = [];
  let rating = 0;  

  reviews.map(review => {  
    rating += review.rating;
    CommentsList.push(
      <ReviewComment review={review} /> 
    )
  });
  
  rating = Math.trunc(rating / reviews.length);

  return (
    <>
    <div className="row">
      <div className="col-12 col-lg-5">
        <div className="card shadow-xs mb-4">
          <div className="card-body p-md-5">
          <h4 className="mb-3">Customer Reviews</h4>
          <div className="d-flex">
            <ReviewRating rating={rating}/>
            <p className="mb-0 ms-2">Based on <b>{reviews.length}</b> reviews</p> 
          </div>
          <div className="my-4">
            <ReviewProgress reviews={reviews}/>
          </div>
          <h6>Share your thoughts</h6>
          <p>If you have used this product, share your thoughts with other customers.</p>
          <button className="btn btn-white btn-lg w-100 mb-0">Write a review</button>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-7 max-height-500 overflow-scroll shadow-xs rounded-3 pt-4">
        <div className="card card-plain">
          <div className="card-body">
            {CommentsList}
          </div>
        </div>
      </div>
    </div>

    </>
    
  );
};