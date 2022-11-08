interface Props {
  featuresDetails: Map<string,string>
}

export default function ProductAccordion({
  featuresDetails
}: Props) {

  const prodFeatures = [];

  Object.entries(featuresDetails).map(([title,value]) => {    
    prodFeatures.push(
      <div className="col-12 col-md-6 w-md-50">
        <div className="p-3 border-top">
          <h6>{title}</h6>
          <p>{value}</p>
        </div>
      </div>
    )
  })

  return (
    <>
      {prodFeatures}
    </>
  );
}





