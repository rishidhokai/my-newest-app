// components of BG3
import React from 'react';
import BG3Element from './Bg3element';

const BG3 = () => (
  <div className="bg3">
    <div className="bg3_content">
      <h1>Meet Truxt</h1>
      <div className="bg3elements" style={{ display: 'flex' }}>
        <BG3Element 
          heading="OUR VISION" 
          paragraph="Pioneering the evolution of AI-driven Customer Operations, Truxt is dedicated to delivering innovative, scalable, high accuracy solutions for global business challenges." 
          image="https://static.wixstatic.com/media/cf9793_de55e69a364442e5997f9cda2346a3b1~mv2.png/v1/fill/w_130,h_118,al_c,lg_1,q_85,enc_auto/our_story_edited.png" 
        />
        <BG3Element 
          heading="OUR STORY" 
          paragraph="Truxt was founded by Customer Experience industry veterans with an aim to help enterprises transform Customer Experience, especially Support with world-class generative AI technology. Truxt is committed to providing exceptional accurate, secure, and scalable intelligent automation catered to each client's specific business needs."
          image="https://static.wixstatic.com/media/cf9793_6d54086dcd634c668016c53d3aea4121~mv2.png/v1/fill/w_88,h_126,al_c,lg_1,q_85,enc_auto/our_vision_edited.png"         
        />
        <BG3Element 
          heading="OUR TECHNOLOGY" 
          paragraph="Our advanced, pre-trained Generative AI Platform integrates diverse data for tailored, intelligent interactions, thereby redefining enterprise support efficiency with higher accuracy and eliminating hallucinations. It customizes experiences to meet individual customer needs, ensuring each interaction is both intelligent and responsive." 
          image="https://static.wixstatic.com/media/cf9793_e1d407d6a6ce4213a9d874efdb11e1ff~mv2.png/v1/fill/w_129,h_129,al_c,lg_1,q_85,enc_auto/our_technology_edited.png" 
        />
      </div>
    </div>
  </div>
);

export default BG3;
