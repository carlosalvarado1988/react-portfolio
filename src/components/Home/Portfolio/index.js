import React from 'react';
import { FoldersList } from './FoldersList';

export const Portfolio = ({ resumeData }) => {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            <FoldersList />
          </div>
        </div>
      </div>
    </section>
  );
};

// {
/* {resumeData.portfolio &&
  resumeData.portfolio.map((item) => {
    return (
      <div className="columns portfolio-item">
        <div className="item-wrap">
          <a href="#modal-01">
            <img
              src={`${item.imgurl}`}
              className="item-img"
              alt="porfolio"
            />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{item.name}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  })} */
// }
