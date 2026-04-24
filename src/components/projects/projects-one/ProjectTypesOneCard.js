import React, {useState} from "react";
import {Link} from "react-router-dom";
import FsLightbox from 'fslightbox-react';

const ProjectTypesOneCard = ({data, extraClass}) => {

    const rootPath =  window.location.origin
    const [toggler, setToggler] = useState(false);

    return (
      <>
          <FsLightbox
              toggler={toggler}
              sources={[`${rootPath}/images/projects/${data.image}`]}
          />

          <div className={`${extraClass}`}>
              <div className="item">
                  <div className="project-thumb">
                      <img src={`/images/projects/${data.image}`} alt={data.title} />
                  </div>
                  <div className="project-hoverlay">
                      <div className="project-text">

                          <button
                              type="button"
                              onClick={() => setToggler(!toggler)}
                              style={{
                                  cursor: 'pointer',
                                  marginRight: '5px',
                                  background: 'transparent',
                                  border: 0,
                                  padding: 0
                              }}
                              aria-label="Expand project image"
                          >
                              <i className="fa fa-expand" />
                          </button>
                          <Link to={`/project-details/${data.id}`}>
                              <i className="fa fa-link" />
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </>
    );
}

export default ProjectTypesOneCard;