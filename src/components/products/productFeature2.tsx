interface Props {
  title: string;
  full_description: string;
  data: Map<string,string>;
}

export default function ProductOverview({
  title,
  full_description,
  data,
}: Props) {

  return (
    <>
    <div className="card card-product card-plain">
      <div className="row mt-5">
        <div className="col-12 ">
          {(title.length != 0) && 
            <h2 className="mb-3">{title}</h2>
          }
          {(full_description.length != 0) && 
            <p className="mb-5 w-lg-70">{full_description}</p>
          }
          
          <div className="nav-wrapper position-relative end-0 pb-4 border-bottom">
            <ul className="nav nav-pills nav-fill p-1 w-lg-50" role="tablist">
              <li className="nav-item">
                <a className="nav-link mb-0 px-0 py-1 active" data-bs-toggle="tab" href="#first-tab" role="tab" aria-controls="material" aria-selected="true">
                  Material
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" href="#second-tab" role="tab" aria-controls="function" aria-selected="false">
                  Function
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" href="#third-tab" role="tab" aria-controls="warranty" aria-selected="false">
                  Warranty
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" href="#fourth-tab" role="tab" aria-controls="instructions" aria-selected="false">
                  Instructions
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content tab-space">
            <div
              className="tab-pane active show"
              id="first-tab"
              role="tabpanel"
              aria-labelledby="#material"
            >
              <div className="row mt-5">
                <div className="col-12 col-lg-6 mb-lg-0 mb-4 pe-lg-10">
                  <h5 className="mt-5 mb-4">Material</h5>
                  <p>If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. 
                    <br/><br/>
                    Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.
                  </p>
                </div>
              
                <div className="col-12 col-lg-6 mb-lg-0 mb-4">
                  <div className="row">
                    <div className="col-6 mb-4">
                      <img className="w-100 rounded-3" src={`${import.meta.env.BASE_URL}/images/product10.jpg`} alt="" />
                    </div>
                    <div className="col-6 mb-4">
                      <img className="w-100 rounded-3" src={`${import.meta.env.BASE_URL}/images/product11.jpg`} alt="" />
                    </div>
                    <div className="col-6 mb-4">
                      <img className="w-100 rounded-3" src={`${import.meta.env.BASE_URL}/images/product12.jpg`} alt="" />
                    </div>
                    <div className="col-6">
                      <img className="w-100 rounded-3" src={`${import.meta.env.BASE_URL}/images/product13.jpg`} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane"
              id="second-tab"
              role="tabpanel"
              aria-labelledby="#function"
            >
              <div className="row mt-5">
                <div className="col-12 col-lg-6 mb-lg-0 mb-4">
                  <h5 className="mt-5 mb-4">Function</h5>
                  <p>The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. 
                    <br/>
                    Would you believe in what you believe in, if you were the only one who believed it? People are so scared to lose that they don't even try. 
                  </p>
                </div>
              
                <div className="col-12 col-lg-6 mb-lg-0 mb-4">
                  <img className="w-100 rounded-3" src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="" />
                </div>
              </div>
            </div>
            <div
              className="tab-pane"
              id="third-tab"
              role="tabpanel"
              aria-labelledby="#warranty"
            >
              <div className="row mt-5">
                <div className="col-12 col-lg-6 mb-lg-0 mb-4">
                  <h5 className="mt-5 mb-4">Warranty</h5>
                  <p>I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves.
                    <br/><br/>
                    If you're taught you can’t do anything, you won’t do anything. I was taught I could do everything.
                  </p>
                </div>
              
                <div className="col-12 col-lg-6 mb-lg-0 mb-4">
                  <img className="w-100 rounded-3" src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="" />
                </div>
              </div>
            </div>
            <div
              className="tab-pane"
              id="fourth-tab"
              role="tabpanel"
              aria-labelledby="#instructions"
            >
              <div className="row mt-5">
                <div className="col-12 col-lg-6 mb-lg-0 mb-4">
                  <h5 className="mt-5 mb-4">Instructions</h5>
                  <p>We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams.
                    <br/>
                    If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.
                  </p>
                </div>
              
                <div className="col-12 col-lg-6 mb-lg-0 mb-4">
                  <img className="w-100 rounded-3" src="https://images.unsplash.com/photo-1611849362103-5c99622adf18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};



