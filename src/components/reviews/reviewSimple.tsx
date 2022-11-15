import ReviewComment from './reviewComment';

interface Props {
  reviews: {
    avatar: string;
    name: string;
    date: string;
    rating: number;
    comment: string;
  }[]
}

export default function ReviewSimple({
  reviews
}: Props) {

  let CommentsList = [];

  reviews.map(review => {  

    CommentsList.push(
      <ReviewComment review={review} /> 
    )
  });
  return (
    <>
    <div className="w-50 mx-auto">
      {CommentsList}
    </div>

    </>
    
  );
};