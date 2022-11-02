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
      <div className="d-flex mt-4">
        <img className="w-20 rounded-3 m-4" src={thumb_src} alt={thumb_alt} />
        <div className="w-50 pt-4 ps-4">
          <h6 className="text-lg mb-1">{title}</h6>
            <p className="mb-0">{color}</p>
            <p className="mb-0">{size}</p>

          <div className="d-flex align-items-center mt-6">
            <i className="fas fa-check text-lg text-success"></i>
            <p className="mb-0 ms-2 text-sm">{stock}</p>
          </div>
        </div>
        <div className="w-10 pt-4">
          <input type="text" className="form-control mb-3" placeholder="1" aria-label="amount" />
          <a className="text-primary" href="#">Remove</a>
        </div>
        <div className="w-20 pt-4 text-end">
          <h6 className="mb-1">${price}</h6>
        </div>
      </div>
    </>
  );
}
