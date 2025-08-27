import React from "react";
import PropTypes from "prop-types";
import ViewsTitle from "../../components/ViewsTitle";

const MapsContribution = ({ data: { heading, data } }) => {
    return (
        <div className="mk-maps">
            <div className="container h100per-min100vh d-flex">
                <div className="mk-maps-container">
                    <ViewsTitle text={heading} />
                    {data.map((item, index) => (
                        <div key={index} data-aos="fade-down-right">
                            <div className="mk-box">
                                <div className="row">
                                    <div
                                        data-aos="zoom-in-left"
                                        className="col-3 d-flex flex-column justify-content-center px-sm-3 p-0"
                                    >
                                        <img src={item.logo} className="mk-gsv-logo" alt={item.title} />
                                    </div>
                                    <div className="col-9 d-flex flex-column justify-content-center mt-2 mb-2">
                                        <div data-aos="zoom-in-right" className="mk-box-heading">
                                            {item.title}
                                        </div>
                                        <div data-aos="zoom-in-left" className="mk-box-subheading">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="zoom-in-right" className="mk-box-para">
                                    {item.paragraph}
                                </div>

                                {/* Render Links if Available */}
                                {item.links && (
                                    <div className="mk-links mt-3">
                                        {Object.entries(item.links).map(([key, url]) => (
                                            <p key={key} className="m-0">
                                                <a href={url} target="_blank" rel="noopener noreferrer">
                                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                                </a>
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

MapsContribution.propTypes = {
    data: PropTypes.shape({
        heading: PropTypes.string.isRequired,
        data: PropTypes.arrayOf(
            PropTypes.shape({
                logo: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                paragraph: PropTypes.string.isRequired,
                links: PropTypes.object, // Links are optional
            })
        ).isRequired,
    }).isRequired,
};

export default MapsContribution;
