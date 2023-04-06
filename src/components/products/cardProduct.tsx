import ProductBadge from './productBadge';

interface Props {
  thumb_src: string;
  thumb_alt: string;
  title: string;
  description: string;
  price: number;
  color: string;
  colors: string[];
  position: string;
  imageHeight: string;
}

export default function CardProduct({
  thumb_src,
  thumb_alt,
  title,
  description,
  price,
  color,
  colors,
  position,
  imageHeight
}: Props) {

  const classList = "card-body " + "text-" + position;
  const height = imageHeight == null ? "height-300" : imageHeight

  return (
    <>
      <div className="card card-product border border-white mb-5 shadow-xs">
        <a href="#">
          <div className={height + " rounded-2"} style={{backgroundImage: `url(${thumb_src})`, backgroundSize: "cover", backgroundPosition: "center"}}>

          </div>
          <div className={classList}>
            {(color) && 
              <p className="text-sm mb-1 text-body">{color}</p>
            }
            {(title) && 
              <h5 className="font-weight-bold">
                {title}
              </h5>
            }

            {(description) && 
              <p className="text-body text-sm">{description}</p>
            }
           
            {(price) && 
              <p className="mb-0 text-sm text-body mt-1 mb-3">
                ${price.toFixed(2)}
              </p>
            }
           
            {(colors) &&
              <ProductBadge colors={colors} />
            }

            {!(description || colors || color) &&
              <a href="#" className="font-weight-normal text-body text-sm">Shop Now</a>
            }
          </div>
        </a>
      </div>
    </>
  );
};
