interface Props {
  images: string[];
}

export default function ProductImages({
  images,
}: Props) {

  return (
    <>
      <div className="col-12 col-md-6">
        <img className="w-90 rounded-2" src={images[0]} alt="first image" />
        <div className="d-flex mt-4">
          <img className="w-20 me-4 rounded-2" src={images[0]} alt="first image" />
          <img className="w-20 me-4 rounded-2" src={images[1]} alt="first image" />
          <img className="w-20 me-4 rounded-2" src={images[2]} alt="first image" />
          <img className="w-20 rounded-2" src={images[3]} alt="first image" />
        </div>
      </div> 
    </>
  );
}