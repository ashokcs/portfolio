import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row projects">
          <div className="twelve columns collapsed">
            <h1>Our Awesome works so far.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/rammazzoti2000/final-capstone" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/09.png" alt="final-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Expense Manager app:</h3>
                      <p>App that tracks domestic power consumption. It can register measurements across rooms in the house. The measurements will be accessible in a separate page and will represent useful information on total power consuming, the available units left and what has been saved in percentages.</p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/rammazzoti2000/pic-some-react" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/08.png" alt="pic-some" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Mp3 Player App</h3>
                      <p>Common People who loves to listen song on the go!.</p>
                    </div>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/rammazzoti2000/react_capstone" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/07.png" alt="react-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Shoppers' Shop - Ecommerce</h3>
                      <p>Helps people to buy and sell products online. </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
   </section>
    );
  }
}

export default Portfolio;
