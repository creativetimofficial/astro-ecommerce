import ProductRating from '../reviews/reviewRating'
import ProductGallery from './productGallery'
import ProductSizes from './productSizes'

interface Props {
  title: string;
  colors: string[];
  images: ({
    src: string;
    alt: string;
  })[];
  full_description: string;
  price: number;
  highlights: string[];
  details: string;
  rating: number;
  reviews: number;
  sizes: Map<string,number>
}

export default function ProductOverview({
  title,
  colors,
  images,
  full_description,
  price,
  highlights,
  details,
  rating,
  reviews,
  sizes
}: Props) {

  return (
    <>
    <div className="card card-product card-plain">
      <div className="row">
        {(images.length != 0) && 
          <ProductGallery images={images}/>
        }
        <div className="col-12 col-lg-6 ps-lg-5">
          {(title.length != 0) && 
            <h2 className="mt-4">{title}</h2>
          }
          {(full_description.length != 0) && 
            <p className="mb-5">{full_description}</p>
          }

          <form action="" method="post">
            {(price.length != 0) && 
              <div className="d-flex">
                <h3 className="font-weight-normal">${price.toLocaleString()}</h3>
                <input className="opacity-0" defaultValue={price} />
              </div>
            }

            {(rating != 0) && 
            <>
              <h3 className="sr-only">Reviews</h3>
              <div className="d-flex">
                <ProductRating rating={4} />
                <span className="ms-3">{reviews} reviews</span>
              </div>
            </>
            }
            
            {(sizes.size != 0) && 
              <ProductSizes sizes={sizes}/>
            }
            <button className="btn btn-dark btn-lg" type="submit">Add to cart</button>
          </form>
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-12 col-lg-6">
          <h4>Product Description</h4>
          <p>There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill. I’m not really specifically talented at anything except for the ability to learn. That’s what I do. That’s what I’m here for. Don’t be afraid to be wrong because you can’t learn anything from a compliment.</p>
          {(highlights.length != 0) && 
           <>
             <h6>Benefits</h6>
              <ul className="text-sm">
              {highlights.map(highlight => 
                <li className="mb-2">{highlight}</li>
              )}
              </ul>
           </>
          }
           {(details.length != 0) && 
            <>
              <h6>More about product</h6>
              <p>{details}</p>
            </>
           }
        </div>
      </div>
    </div>
    </>
  );
};
