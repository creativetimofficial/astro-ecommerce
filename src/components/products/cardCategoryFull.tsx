import React from 'react';

interface Props {
  img_src: string;
  title: string;
  classList: string;
}

export default function CardProduct({
  img_src,
  title,
  classList,
}: Props) {

  return (
    <>
      <a href="#">
        <div className={`card card-background align-items-start ${classList}`}>
          <div className="full-background" style={{backgroundImage: `url(${img_src})`, backgroundSize: 'cover'}}></div>
          <div className="card-body align-items-end d-flex">
            <div className="d-block mt-8">
              <h4 className="text-white">{title}</h4>
              <p className="mb-0">Shop now</p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};
