import ReviewRating from './reviewRating';

interface Props {
  review: {
    avatar: string;
    name: string;
    date: string;
    rating: number;
    comment: string;
  }
}

export default function ReviewComment({
  review
}: Props) {

  return (
    <>
      <div className="d-flex">
        <a href="#" className="avatar avatar-xl rounded-circle min-width-50 min-height-50">
          <img alt="Image placeholder" src={review.avatar} />
        </a>
        <div className="ps-4">
          <h6 className="mb-0">{review.name}</h6>
          <p className="text-sm mb-2">{review.date}</p>
          <ReviewRating rating={review.rating}/>
          <p className="text-sm mt-4">{review.comment}</p>
        </div>
      </div>
      <hr className="dark horizontal" />
    </>
  );
};