interface Props {
  images: string[];
}

export default function ProductGallery({
  images,
}: Props) {

  return (
    <>
      <div className="row">
        <div className="col-4">
          <img className="w-100 rounded-2" src={images[0]} alt="first image" />
        </div>
        <div className="col-4">
          <img className="w-100 rounded-2" src={images[1]} alt="first image" />
          <img className="w-100 mt-4 rounded-2" src={images[2]} alt="first image" />
        </div>
        <div className="col-4">
          <img className="w-100 rounded-2" src={images[3]} alt="first image" />
        </div>
      </div>  
    </>
  );
}