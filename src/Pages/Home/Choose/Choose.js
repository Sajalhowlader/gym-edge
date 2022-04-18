import React from 'react';
import chooseLogo from '../../../images/body-.jpg'
const Choose = () => {
    return (
        <div className='container mx-auto my-5'>
            <h2 className='my-5 text-center text-uppercase '>Experience</h2>
            <div className='d-md-flex d-sm-row  align-items-center'>
                <div className='chooses-info col-md-6 mb-5'>
                    <h1>WHY CHOOSE ME</h1>
                    <p>I have 12 years expreance in Gym and Yoga.There are a huge clints works with me. I will ensure your body building and Yoga practice.Thank you</p>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed choose-btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Addition of Energy
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Addition energy and magnetization of 3-D multicarrier anisotropic quantum dots in magnetic field by exact multi-pole expansion of coulomb correlations</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Beauty of Body
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Addition energy and magnetization of 3-D multicarrier anisotropic quantum dots in magnetic field by exact multi-pole expansion of coulomb correlations</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Mind and Soul
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Addition energy and magnetization of 3-D multicarrier anisotropic quantum dots in magnetic field by exact multi-pole expansion of coulomb correlations</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='choose-logo col-md-6 text-center'>
                    <img className='img-fluid' src={chooseLogo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Choose;