interface Props {
  images: ({
    src: string;
    alt: string;
  })[];
  data: Map<string,string>
}

export default function ProductAccordion({
  images,
  data
}: Props) {

  const tabs = [];
  let i = 0;

  Object.entries(data).map(([title,value],i) => {    
    if (i != 0) {
      tabs.push(
        <div
          className="tab-pane active show"
          id={"tab" + i}
          role="tabpanel"
          aria-labelledby="#profile"
        >
          <div className="row mt-5">
            <div className="col-12 col-lg-6 mb-lg-0 mb-4 pe-10">
              <h5 className="mt-5 mb-4">{title}</h5>
              <p>{value}</p>
            </div>
          
            <div className="col-12 col-lg-6 mb-lg-0 mb-4">
              <img className="w-100 rounded-3" src={images[0].src} alt={images[0].alt} />
            </div>
          </div>
        </div>
      )
    } else {
      tabs.push()
    }
  })

  return (
    <>
      <div className="accordion mt-5" id="accordionEcommerce">
        {tabs}
      </div>
    </>
  );
}





