import StoreNavbar from './storeNavbar';
import UpperNavbar from './upperNavbar';

interface Props {
  title: string;
}

export default function StoreNavigation({
  title,
}: Props) {

  return (
    <>
    <nav className="navbar navbar-expand-lg shadow-none flex-wrap top-0 px-0 py-0">
      <UpperNavbar title={title} />
      <StoreNavbar title={title} />
      <hr className="horizontal w-100 my-0 dark" />
    </nav>
  </>
    
  );
};