
interface Props {
  bgImage: string;
  title: string;
  description: string;
  filterColor: string;
}

export default function PageHeader({
  bgImage,
  title,
  description,
  filterColor
}: Props) {

  const filter = "mask opacity-8 " + filterColor;

  return (
    <>
      <div className="page-header align-items-center min-vh-50" style={{backgroundImage: `url(${bgImage})`}}>
        <span className={filter}></span>
        <div className="container">
          <div className="row justify-content-center">
            <div className="mx-auto text-center col-lg-7">
              <h1 className="mb-2 text-white">{title}</h1>
              <p className="text-white text-lead mb-4">
                {description}
              </p>
              <button className="btn btn-outline-white">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


