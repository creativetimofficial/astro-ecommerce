interface Props {
  thumb_src: string;
  thumb_alt: string;
  title: string;
  color: string;
  size: string;
  price: number;
}

export default function CheckoutSingleItem({
  thumb_src,
  thumb_alt,
  title,
  color,
  size,
  price,

}: Props) {

  return (
    <>
      <div className="card card-product card-plain d-flex mb-4"> 
        <div className="row">
          <div className="col-4 col-md-2">
            <img className="w-100 max-height-100 rounded-3" src={`${import.meta.env.BASE_URL}${thumb_src}`} alt={thumb_alt} />
          </div>
          <div className="col-5 col-md-6">
            <h5 className="text-base mb-1">{title}</h5>
            <h6 className="text-sm font-weight-bold mb-0">${price.toLocaleString()}</h6>
            <p className="text-sm mb-0 opacity-8">{color}</p>
            <p className="text-sm mb-0 opacity-8">{size}</p>
          </div>
          <div className="col-2">
            <div className="d-block d-md-flex align-items-center">
              <button className="btn btn-link text-dark d-block d-md-none"><i className="fas fa-pen"></i></button>
              <button className="btn btn-dark btn-sm d-none d-md-block">Edit</button>
              <button className="btn btn-link text-dark d-block d-md-none"><i className="fas fa-trash"></i></button>
              <button className="btn btn-link text-dark d-none d-md-block">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
