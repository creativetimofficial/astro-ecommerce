interface Props {
  subtotal: number;
}

export default function OrderSummary({
  subtotal,
}: Props) {

  const tax = 7;
  const shipping = (subtotal >= 100) ?  0 : 25;
  let sum = 0;
  sum+=subtotal;
  
  return (
    <>
      <ul className="list-unstyled">
        <li className="border-bottom mt-3">
          <div className="d-flex justify-content-between">
            <p>Subtotal</p>
            <p className="fw-bold">${sum.toFixed(2)}</p>
          </div>
        </li>
        <li className="border-bottom mt-3">
          <div className="d-flex justify-content-between">
            <p>Shipping estimate <span data-bs-toggle="tooltip" data-bs-placement="top" title="More information related to shipping" data-container="body" data-animation="true"><i className="fas fa-question-circle text-sm"></i></span></p>
            <p className="fw-bold">${shipping.toFixed(2)}</p>
          </div>
        </li>
        <li className="border-bottom mt-3">
          <div className="d-flex justify-content-between">
            <p>Tax estimate <span data-bs-toggle="tooltip" data-bs-placement="top" title="This may vary depending on the country you are in" data-container="body" data-animation="true"><i className="fas fa-question-circle text-sm"></i></span></p>
            <p className="fw-bold">${tax.toFixed(2)}</p>
          </div>
        </li>
        <li className="mt-4">
          <div className="d-flex justify-content-between">
            <h5>Order Total</h5>
            <p className="fw-bold text-dark text-lg">${(subtotal + shipping + tax).toFixed(2)}</p>
          </div>
        </li>
      </ul>
    </>
  );
}