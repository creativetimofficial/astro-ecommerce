import ProductBadge from './productBadge';
import ProductRating from './productRating'
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
      {(images.length != 0) && 
      <ProductGallery images={images}/>
      }
      <div className="row mt-5">
        <div className="col-12 col-lg-8 border-end">
          {(title.length != 0) && 
            <h2>{title}</h2>
          }
          {(full_description.length != 0) && 
            <p>{full_description}</p>
          }
          {(highlights.length != 0) && 
           <>
             <h6>Highlights</h6>
              <ul className="text-sm">
              {highlights.map(highlight => 
                <li className="mb-2">{highlight}</li>
              )}
              </ul>
           </>
          }
           {(details.length != 0) && 
            <>
              <h6>Details</h6>
              <p>{details}</p>
            </>
           }

        </div>
        <div className="col-12 col-lg-4 ps-4">
          <form action="" method="post">
            {(price.length != 0) && 
            <div className="d-flex">
              <h3 className="font-weight-normal">${price.toFixed(2)}</h3>
              <input className="opacity-0" defaultValue={price} />
            </div>
            }
            {(rating != 0) && 
            <>
              <h3 className="sr-only">Reviews</h3>
              <ProductRating rating={rating} reviews={reviews} />
            </>
            }
            {(colors.length != 0) && 
            <>
            <h6 className="mt-4">Colors:</h6>
            <div className="d-flex">
              {(colors) &&
                <ProductBadge colors={colors} />
              }
            </div>
            </>
            }
            
            {(sizes.size != 0) && 
              <ProductSizes sizes={sizes}/>
            }
            <button className="btn btn-primary btn-lg w-100" type="submit">Add to cart</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};
