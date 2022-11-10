import StoreNavbar from './storeNavbar';

interface Props {
  title: string;
  full_description: string;
}

export default function TestimonialsFade({
  title,
  full_description,
}: Props) {

  return (
    <>
      <section>
        <div className="page-header min-vh-75 rounded-3" style={styles.pageHeader}>
          <span className="mask bg-gradient-dark opacity-8"></span>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-sm-9 text-center mx-auto">
                <h1 className="text-white mb-4">{title}</h1>
                <p className="lead text-white mb-sm-6 mb-4">{full_description}</p>
                <button className="btn btn-white btn-lg">Show new arrivals</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    
  );
};

  const styles = {
    pageHeader: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2789&q=80)'
    },
  } as const;
