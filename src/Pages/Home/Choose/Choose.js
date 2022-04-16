import React from 'react';
import chooseLogo from '../../../images/body-.jpg'
const Choose = () => {
    return (
        <div className='choose-container'>
            <div className='choose-info'>
                <h1>WHY CHOOSE ME</h1>
                <p>I have 12 years expreance in Gym and Yoga.There are a huge clints works with me. I will ensure your body building and Yoga practice.Thank you</p>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed choose-btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Addition of Energy
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Addition energy and magnetization of 3-D multicarrier anisotropic quantum dots in magnetic field by exact multi-pole expansion of coulomb correlations</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Beauty of Body
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Addition energy and magnetization of 3-D multicarrier anisotropic quantum dots in magnetic field by exact multi-pole expansion of coulomb correlations</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Mind and Soul
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Addition energy and magnetization of 3-D multicarrier anisotropic quantum dots in magnetic field by exact multi-pole expansion of coulomb correlations</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='choose-logo'>
                <img src={chooseLogo} alt="" />
            </div>
        </div>
    );
};

export default Choose;