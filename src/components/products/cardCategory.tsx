interface Props {
  thumb_src: string;
  title: string;
  classList: string;
  cta: string;
}


export default function CardProduct({
  thumb_src,
  title,
  classList,
  cta,
}: Props) {

  const classBody = ((cta != null) ? "align-items-end d-flex" : "text-center w-100 pt-8" );

  return (
    <>
      <a href="#">
        <div className={`card card-background align-items-start mb-4 mb-lg-0 ${classList}`}>
          <div className="full-background" style={{backgroundImage: `url(${thumb_src})`, backgroundSize: 'cover'}}></div>
          <div className={`card-body ${classBody}`}>
            <div className="d-block mt-8">
              <h4 className="text-white">{title}</h4>
              {(cta != null) && 
                <a href="#" className="text-white mb-0">Shop now</a>  
              }
            </div>
          </div>
        </div>
      </a>
    </>
  );
};
