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
        <img className="w-50 w-md-20 w-lg-10 rounded-3 shadow-xs m-4" src={thumb_src} alt={thumb_alt} />
        <div className="w-100 w-md-50 pt-4 ps-md-4">
          <h6 className="text-lg mb-1">{title}</h6>
            <p className="mb-0">{color}</p>
            <p className="mb-0">{size}</p>

          <div className="d-flex align-items-center mt-6">
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
        <div className="w-20 w-md-5 pt-4">
          <input type="number" min={0} className="form-control mb-3" placeholder="1" aria-label="amount" />
          <a className="text-primary" href="#">Remove</a>
        </div>
        <div className="w-25 pt-4 text-end">
          <h6 className="mb-1">${price.toFixed(2)}</h6>
        </div>
      </div>
    </>
  );
}
