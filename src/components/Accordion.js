import React from 'react'

function Accordion() {
  return (
    <div>
  <div className="container">
      <div className="row" >
        <div className=" col-sm-12 col-xs-12" >
          <div className="accordion" id="accordionPlusMinus" >
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button customclassfaq collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Heading One
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionPlusMinus"
              >
                <div className="accordion-body text-bidgray">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, suscipit natus dolore voluptatum quasi id odit!
                    Ducimus at laudantium adipisci tempore blanditiis a animi
                    quaerat voluptatum dignissimos, quia inventore nesciunt?
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button customclassfaq collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Heading Two
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionPlusMinus"
              >
                <div className="accordion-body text-bidgray">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem quaerat quisquam laboriosam, incidunt eos cumque
                    reiciendis necessitatibus ipsa neque iusto fugit odio
                    impedit, beatae accusamus dolorem libero dolore explicabo
                    illo facilis nemo quasi ipsum omnis quod. Doloremque cum
                    molestiae consequatur harum ea laboriosam provident facilis,
                    ducimus quas dolor saepe nemo?
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button customclassfaq collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Heading Three
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionPlusMinus"
              >
                <div className="accordion-body text-bidgray">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                    dolores laborum, commodi similique ipsa facilis porro id sit
                    nam excepturi.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button customclassfaq collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Heading Four
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionPlusMinus"
              >
                <div className="accordion-body text-bidgray">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat inventore quis qui aperiam quae facilis!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}
export default Accordion
