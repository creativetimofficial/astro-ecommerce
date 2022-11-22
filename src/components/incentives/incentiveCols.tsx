
interface Props {
  // order: string;
}

export default function incentiveCols({
  order
}: Props) {

  return (
    <>
     <div className="row mt-5">
        <div className="col-12 col-md-4 d-flex align-items-center">
          <i className="fas fa-shipping-fast text-3xl text-primary me-4"></i>
          <div>
            <p className="text-sm mb-1 opacity-8">We'll replace it with a new one</p>
            <h6 className="text-sm">10 Years Warranty</h6>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex align-items-center my-4 my-md-0">
          <i className="fas fa-user text-3xl text-primary me-4"></i>
          <div>
            <p className="text-sm mb-1 opacity-8">Send it back for free</p>
            <h6 className="text-sm">Free shipping on returns</h6>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex align-items-center">
          <i className="fas fa-sync-alt text-3xl text-primary me-4"></i>
          <div>
            <p className="text-sm mb-1 opacity-8">This shipping is on us</p>
            <h6 className="text-sm">Free, contactless payment</h6>
          </div>
        </div>
      </div>
    </>
  );
};