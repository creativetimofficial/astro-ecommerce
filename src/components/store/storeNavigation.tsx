import StoreNavbar from './storeNavbar';
import UpperNavbar from './upperNavbar';

export default function StoreNavigation() {

  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-none flex-wrap top-0 px-0 py-0">
        <UpperNavbar />
        <StoreNavbar />
        <hr className="horizontal w-100 my-0 dark" />
      </nav>
    </>
  );
};