interface Props {
  product: ({
    id: string;
    thumb_src: string;
    thumb_alt: string;
    title: string;
    price: number;
    description: string;
  });
  status: string;
  dateModified: string;
}

export default function OrderSummary({
  product,
  status,
  dateModified

}: Props) {

  return (
    <>
      <tr>
        <td scope="row" className="d-flex align-items-center text-sm text-body py-3">
          <img className="w-20 w-lg-10 rounded-3" src={`${import.meta.env.BASE_URL}${product.thumb_src}`} alt={product.thumb_alt} />
          <p className="text-sm text-dark font-weight-bold mb-0 ms-3">{product.title}</p>
        </td>
        <td className="text-sm text-body align-middle pt-3 w-20">${product.price.toLocaleString()}</td>
        <td className="text-sm text-body align-middle pt-3  w-20">{status}</td>
        <td className="text-sm text-body align-middle pt-3 w-20">{dateModified}</td>
        <td className="text-sm text-body align-middle pt-3 text-end">
          <a href="#" className="text-dark font-weight-bold">Download</a>
        </td>
      </tr>
    </>
  );
};