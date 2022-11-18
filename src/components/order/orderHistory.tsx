import OrderHistoryCard from './orderHistoryCard';

interface Props {
  order: {
    avatar: string;
    name: string;
    date: string;
    rating: number;
    comment: string;
  }[];
  products: ({
    id: string;
    thumb_src: string;
    thumb_alt: string;
    title: string;
    price: number;
    description: string;
  })[];
}

export default function OrderSummary({
  order,
  products
}: Props) {

  // let ordersList = [];

  // products.map(product => {  

  //   ordersList.push(
  //     <OrderHistoryCard product={product} />
  //   )
  // });
  return (
    <>
    <div>
      <h3 className="mb-0">Order history</h3>
      <p>Check the status of recent orders, manage returns and download invoices.</p>

    <OrderHistoryCard />
    </div>

    </>
    
  );
};