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
        <th scope="row" className="d-flex align-items-center text-sm text-secondary py-3">
          <img className="w-20 w-lg-10 rounded-3 shadow-xs" src={product.thumb_src} alt={product.thumb_alt} />
          <p className="text-sm text-dark font-weight-bold mb-0 ms-3">{product.title}</p>
        </th>
        <td className="text-sm text-secondary align-middle pt-3">${product.price.toFixed(2)}</td>
        <td className="text-sm text-secondary align-middle pt-3">{status} {dateModified}</td>
        <td className="text-sm text-secondary align-middle pt-3 text-end">
          <a href="#" className="text-primary">ViewProduct</a>
        </td>
      </tr>
    </>
  );
};