interface Props {
  thumb_src: string;
  thumb_alt: string;
  title: string;
  color: string;
  size: string;
  price: number;
  stock: boolean;
}

export default function CartItem({
  thumb_src,
  thumb_alt,
  title,
  color,
  size,
  price,
  stock,

}: Props) {

  return (
    <>
      <div className="d-block d-md-flex mt-4">
        <img className="w-50 w-md-20 w-lg-10 rounded-3 m-4" src={`${import.meta.env.BASE_URL}${thumb_src}`} alt={thumb_alt} />
        <div className="w-100 w-md-50 pt-4 ps-md-4">
          <div className="d-flex align-items-center mb-2">
            <h6 className="text-lg mb-0">{title}</h6>

            <div className="d-flex align-items-center ms-3">
              {(stock) ? 
                <>
                  <i className="fas fa-check text-lg text-success"></i>
                  <p className="mb-0 ms-2 text-sm">In Stock</p>
                </>
                :
                <>
                  <i className="fas fa-minus-circle text-lg"></i>
                  <p className="mb-0 ms-2 text-sm">Out of Stock</p>
                </>
              }
            </div>
          </div>
          <div className="d-flex align-items-center">
            <p className="mb-0">{color}</p>
            <span className="me-2">,</span>
            <p className="mb-0">{size}</p>
          </div>
          <h6 className="mb-1 mt-5">${price.toLocaleString()}</h6>
        </div>
        <div className="w-40 w-md-5 pt-4 ms-auto me-4">
          <input type="number" min={0} className="form-control mb-3" placeholder="1" aria-label="amount" />
        </div>
        <div className="w-5 pt-4 mt-1 text-end">
          <a className="text-dark" href="#">Remove</a>
        </div>
      </div>
    </>
  );
}
