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
      <div className="d-block d-md-flex">
        <img className="w-100 max-height-200 rounded-3 mb-4 mb-md-0" src={`${import.meta.env.BASE_URL}images/product7.jpg`} alt={images[0].alt} />
      </div>
      <div className="row mt-4">
        <div className="col-6">
          <img className="w-100 max-height-200 rounded-3" src={`${import.meta.env.BASE_URL}images/product8.jpg`} alt={images[2].alt} />
        </div>
        <div className="col-6">
          <img className="w-100 max-height-200 rounded-3" src={`${import.meta.env.BASE_URL}images/product9.jpg`} alt={images[3].alt} />
        </div>
      </div>
    </>
  );
}