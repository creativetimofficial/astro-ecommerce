import React from 'react';
import ProductBadge from './productBadge';

interface Props {
  img_src: string;
  img_alt: string;
  title: string;
  description: string;
  price: string;
  color: string;
  colors: string[];
  position: string;
}

export default function CardProduct({
  img_src,
  img_alt,
  title,
  description,
  price,
  color,
  colors,
  position
}: Props) {

  const classList = "card-body " + "text-" + position;

  return (
    <>
      <div className="card card-product border border-white mb-5 shadow-xs">
        <a href="#">
          <div className="height-300">
            <img className="w-100 h-100 rounded-top" src={img_src} alt={img_alt} />
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
                {price}
              </p>
            }
           
            {(colors) &&
              <ProductBadge colors={colors} />
            }
          </div>
        </a>
      </div>
    </>
  );
};
