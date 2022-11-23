interface Props {
  images: ({
    src: string;
    alt: string;
  })[];
}

export default function ProductImages({
  images,
}: Props) {

  return (
    <>
      <div className="col-12 col-lg-6">
        <img className="w-90 rounded-2" src={images[0].src} alt={images[0].alt} />
        <div className="d-flex mt-4">
          <img className="w-20 me-4 rounded-2" src={images[0].src} alt={images[0].alt} />
          <img className="w-20 me-4 rounded-2" src={images[1].src} alt={images[1].alt} />
          <img className="w-20 me-4 rounded-2" src={images[2].src} alt={images[2].alt} />
          <img className="w-20 rounded-2" src={images[3].src} alt={images[3].alt} />
        </div>
      </div> 
    </>
  );
}