export default function StoreNavbar() {
  return (
    <>
      <div className="container py-2">
        <nav className="d-flex align-items-center" aria-label="breadcrumb">
          <div className="d-flex w-10">
            <img className="w-100" src="/logo-ct-dark.png" alt="logo-ct" />
          </div>
          <h5 className="mb-0 ms-3">
            <span className="fw-normal">Components </span> &#8594; 
            <span className="fw-bold">Products</span></h5>
        </nav>
        <div className="ms-auto" id="navbar">
          <a href="https://creative-tim.com/">www.creative-tim.com</a>
        </div>
      </div>
      <div className="d-flex align-items-center my-4">
        <h2 className="mb-0">Store Navigation</h2>
        <span className="badge badge-pill badge-md badge-success mx-3">&#x2713; Auto Layout</span>
        <span className="badge badge-pill badge-md badge-success">&#x2713; Components</span>
      </div>
    </>
  );
};
