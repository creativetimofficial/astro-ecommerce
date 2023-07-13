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
      <div className="d-block d-md-flex md-max-height-300">
        <img className="w-100 w-md-45 me-4 rounded-3 mb-4 mb-md-0 ms-auto" src={images[0].src} alt={images[0].alt} />
        <img className="w-100 w-md-45 rounded-3" src={images[1].src} alt={images[1].alt} />
      </div>
      <div className="d-block d-md-flex md-max-height-300 mt-4">
        <img className="w-100 w-md-45 me-4 rounded-3 mb-4 mb-md-0 ms-auto" src={images[2].src} alt={images[2].alt} />
        <img className="w-100 w-md-45 rounded-3" src={images[3].src} alt={images[3].alt} />
      </div>
    </>
  );
}