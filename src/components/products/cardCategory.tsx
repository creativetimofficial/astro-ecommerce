import React from 'react';

interface Props {
  img_src: string;
  title: string;
}

export default function CardProduct({
  img_src,
  title,

}: Props) {

  return (
    <>
      <a href="#">
        <div className="card card-background">
          <div className="full-background" style={{backgroundImage: `url(${img_src})`, backgroundSize: 'cover'}}></div>
          <div className="card-body pt-12 text-center">
            <h4 className="text-white">{title}</h4>
          </div>
        </div>
      </a>
    </>
  );
};
