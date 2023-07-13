
interface Props {
  // order: string;
}

export default function incentiveLarge({
  order
}: Props) {

  return (
    <>
     <div>
        <h2>We build our business on customer service</h2>
        <p className="pe-md-12 me-lg-7"> It’s like a little kid, a little boy, looking at colors, and no one told him what colors are good, before somebody tells you you shouldn’t like pink because that’s for girls, or you’d instantly become a gay two-year-old. Why would anyone pick blue over pink? Pink is obviously a better color.</p>
        <div className="row mt-5">
          <div className="col-12 col-md-4">
            <i className="fas fa-shipping-fast text-5xl mb-4"></i>
            <h6 className="text-sm">Free Shipping</h6>
            <p className="text-sm opacity-8">There’s nothing I really wanted to do in life that I wasn’t able to get good at. That’s my skill.</p>
          </div>
          <div className="col-12 col-md-4 my-3 my-md-0">
            <i className="fas fa-user text-5xl mb-4"></i>
            <h6 className="text-sm">10 Years Warranty</h6>
            <p className="text-sm opacity-8">I’m not really specifically talented at anything except for the ability to learn.</p>
          </div>
          <div className="col-12 col-md-4">
            <i className="fas fa-sync-alt text-5xl mb-4"></i>
            <h6 className="text-sm">Exchange</h6>
            <p className="text-sm opacity-8">Then we lose family over time. What else could rust the heart more over time? Blackgold.</p>
          </div>
        </div>
      </div>
    </>
  );
};