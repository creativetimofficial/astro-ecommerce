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
            <img className="w-100 max-height-100 rounded-3 shadow-xs" src={thumb_src} alt={thumb_alt} />
          </div>
          <div className="col-6 col-md-6">
            <h5 className="text-base mb-1">{title}</h5>
            <h6 className="text-sm font-weight-bold mb-0">${price.toFixed(2)}</h6>
            <p className="text-sm mb-0 opacity-8">{color}</p>
            <p className="text-sm mb-0 opacity-8">{size}</p>
          </div>
          <div className="col-2">
            <div className="d-flex">
              <a href="#">
                <i className="fas fa-edit d-block d-md-none me-2"></i>
                <h6 className="text-primary text-sm pe-3 border-end d-none d-md-block">Edit</h6>
              </a>
              <a href="#">
                <i className="fas fa-times d-block d-md-none ms-2"></i>
                <h6 className="text-primary text-sm ps-3 d-none d-md-block">Remove</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
