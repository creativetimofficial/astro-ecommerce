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
      <div className="d-block d-md-flex">
        <img className="w-50 w-md-30 rounded-3" src={`${import.meta.env.BASE_URL}${thumb_src}`} alt={thumb_alt} />
        <div className="w-100 w-md-50 ps-md-4">
          <h6 className="text-lg mb-1">{title}</h6>
          <div className="d-flex">
            <p className="pe-3 mb-0">{color}</p>
            <p className="border-start ps-3 mb-0">{size}</p>
          </div>
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
        <div className="w-20 w-md-10 mt-4 mt-md-0">
          <input type="number" min={0} className="form-control" placeholder="1" aria-label="amount" />
        </div>
        <h4 className="ms-3">${price.toLocaleString()}</h4>

        <div className="w-10 text-end">
          <a href="#">
            <i className="fas fa-times ms-3"></i>
          </a>
        </div>
      </div>
    </>
  );
}
