interface Props {
  images: ({
    src: string;
    alt: string;
  })[];
}

export default function ProductGallery({
  images,
}: Props) {

  return (
    <>
      <div className="row">
        <div className="col-4">
          <img className="w-100 rounded-2" src={images[0].src} alt={images[0].alt} />
        </div>
        <div className="col-4">
          <img className="w-100 rounded-2" src={images[1].src} alt={images[1].alt} />
          <img className="w-100 mt-4 rounded-2" src={images[2].src} alt={images[2].alt} />
        </div>
        <div className="col-4">
          <img className="w-100 rounded-2" src={images[3].src} alt={images[3].alt} />
        </div>
      </div>  
    </>
  );
}