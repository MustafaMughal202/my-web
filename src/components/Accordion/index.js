import React from "react";
import Accordion from "../Accordion/accordion";
import { accordionData } from "../Accordion/data";

const Index = () => {
  return (
      <section>
      <div className="container">
          <div className="row">
              <div className="top-content">
                  <article class="art1">
                      <h6>Core benefits</h6>
                      <h3 class="h3">That's 
                          <br></br>why it works</h3>
                  </article>
                </div>
    <ul className="accordion">
      {accordionData.map(({ heading, content }) => (
        <Accordion heading={heading} content={content} />
      ))}
    </ul>
    </div>
    </div>
    </section>
  );
};

export default Index;