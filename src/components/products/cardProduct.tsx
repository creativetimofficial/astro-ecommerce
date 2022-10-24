import React from 'react';

interface Props {
  img_src: string;
  img_alt: string;
  title: string;
  price: string;
  color: string;
  colors: string[];
  position: string;
}

function badge(color:string) {
  const badgeClass = "badge filter bg-" + color;
  const badge = <span className={badgeClass}></span>
  
  return badge;
}

export default function CardProduct({
  img_src,
  img_alt,
  title,
  price,
  color,
  colors,
  position
}: Props) {

  const classList = "card-body " + "text-" + position;
  const badges = <div>{colors.map(color => badge(color))}</div>;

  return (
    <>
      <div className="card card-product border border-white mb-5 shadow-xs">
        {/* <div className="height-300 w-100 rounded-top" style={{backgroundImage: `url(${img_src})`, backgroundSize: 'cover'}}></div> */}
        <a href="#">
          <div className="height-300">
            <img className="w-100 h-100 rounded-top" src={img_src} alt={img_alt} />
          </div>
          <div className={classList}>
            <p className="text-sm mb-1 text-body">{color}</p>
            <h5 className="mb-0 font-weight-bold">
              {title}
            </h5>
            <p className="mb-0 text-sm text-body mt-1">
              {price}
            </p>
            <div className="mt-4">
              {badges}
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
