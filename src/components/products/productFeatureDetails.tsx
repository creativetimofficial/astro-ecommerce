interface Props {
  featuresDetails: Map<string,string>
}

export default function ProductAccordion({
  featuresDetails
}: Props) {

  const prodFeatures = [];

  Object.entries(featuresDetails).map(([title,value]) => {    
    prodFeatures.push(
      <div className="col-12">
        <div className="d-flex mb-4">
          <svg className="me-2" width="30" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 23C14.4183 23 18 19.4183 18 15C18 10.5817 14.4183 7 10 7C5.58172 7 2 10.5817 2 15C2 19.4183 5.58172 23 10 23ZM13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929C13.3166 11.9024 12.6834 11.9024 12.2929 12.2929L9 15.5858L7.70711 14.2929C7.31658 13.9024 6.68342 13.9024 6.29289 14.2929C5.90237 14.6834 5.90237 15.3166 6.29289 15.7071L8.29289 17.7071C8.68342 18.0976 9.31658 18.0976 9.70711 17.7071L13.7071 13.7071Z" fill="#111827"/>
          </svg>
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





