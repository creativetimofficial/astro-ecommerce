import data from '../../public/data.json';
import StoreDoubleColumn from '../components/store/storeDoubleColumn';

export default function ComplexFooter() {
  return (
    <>
      <footer>
        <div className="row">
          <div className="col-12 col-md-4">
            <h5 className="mt-5">Astro Ecommerce</h5>
            <p className="text-body text-sm pe-5">The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out.</p>
          </div>
          <div className="col-12 col-md-8">
            <StoreDoubleColumn title={data.products[1].title}/>
          </div>
          <div className="col-12 mt-5 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-body">
              Copyright © 
              <script>
                document.write(new Date().getFullYear())
              </script>
              &nbsp;Astro Ecommerce by &nbsp;
              <a href="https://www.creative-tim.com" className="text-dark" target="_blank">Creative Tim</a>.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}


