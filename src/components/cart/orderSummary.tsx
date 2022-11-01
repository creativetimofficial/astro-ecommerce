interface Props {
  subtotal: number;
  shipping: number;
  tax: number;
}

export default function OrderSummary({
  subtotal,
  shipping,
  tax
}: Props) {

  return (
    <>
      <ul className="list-unstyled">
        <li className="border-bottom mt-3">
          <div className="d-flex justify-content-between">
            <p>Subtotal</p>
            <p className="fw-bold">${subtotal}.00</p>
          </div>
        </li>
        <li className="border-bottom mt-3">
          <div className="d-flex justify-content-between">
            <p>Shipping estimate <span data-bs-toggle="tooltip" data-bs-placement="top" title="More information related to shipping" data-container="body" data-animation="true"><i className="fas fa-question-circle text-sm"></i></span></p>
            <p className="fw-bold">${shipping}.00</p>
          </div>
        </li>
        <li className="border-bottom mt-3">
          <div className="d-flex justify-content-between">
            <p>Tax estimate <span data-bs-toggle="tooltip" data-bs-placement="top" title="This may vary depending on the country you are in" data-container="body" data-animation="true"><i className="fas fa-question-circle text-sm"></i></span></p>
            <p className="fw-bold">${tax}.00</p>
          </div>
        </li>
        <li className="mt-4">
          <div className="d-flex justify-content-between">
            <h5>Order Total</h5>
            <p className="fw-bold text-dark text-lg">${(subtotal)+(shipping)+(tax)}.00</p>
          </div>
        </li>
      </ul>
    </>
  );
}