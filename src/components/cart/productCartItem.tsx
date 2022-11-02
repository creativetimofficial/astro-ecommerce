interface Props {
  thumb_src: string;
  thumb_alt: string;
  title: string;
  color: string;
  size: string;
  price: number;
  stock: string;
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
      <div className="d-flex">
        <img className="w-30 rounded-3" src={thumb_src} alt={thumb_alt} />
        <div className="w-50 pt-2 ps-4">
          <h6 className="text-lg mb-1">{title}</h6>
          <div className="d-flex">
            <p className="pe-3 mb-0">{color}</p>
            <p className="border-start ps-3 mb-0">{size}</p>
          </div>
          <h6 className="mb-1">${price.toFixed(2)}</h6>
          <div className="d-flex align-items-center mt-6">
           {(title.length != 0) ? 
            <>
              <i className="fas fa-minus-circle text-lg"></i>
              <p className="mb-0 ms-2 text-sm">Out of Stock</p>
            </>
            :
            <>
              <i className="fas fa-check text-lg text-success"></i>
              <p className="mb-0 ms-2 text-sm">In Stock</p>
            </>
           }
            </div>
        </div>
        <div className="w-10">
          <input type="number" min={0} className="form-control" placeholder="1" aria-label="amount" />
        </div>
        <div className="w-10 text-end">
          <a href="#">
            <i className="fas fa-times ms-3"></i>
          </a>
        </div>
      </div>
    </>
  );
}
