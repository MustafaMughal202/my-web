import React from 'react'
import {AboutSection, AboutContainer, AboutRow, AboutCol, ColBgWhite, AboutArticle, AboutH6, AboutH3, AboutRightP, AboutCenterP, RightImg, TextureImg} from './AboutElements'
import textureImg from '../../assets/texture.png';

const About = () => {
  return (
    <>
    <AboutSection>
        <AboutContainer>
            <AboutRow>
                <AboutCol>
                    <ColBgWhite>
                    <AboutArticle>
                        <AboutH6>MEET ALEPH ZERO</AboutH6>
                        <AboutH3>Privacy-enhancing public blockchain with <b>instant</b> finality</AboutH3>
                        <AboutRightP>Aleph Zero is built for enterprise, Web 3.0, and DeFi use-cases.</AboutRightP>
                        <AboutCenterP>Aleph Zero is a Proof-of-Stake public blockchain with private smart contracts built from the first principles. We combined an <span style={mystyle}><b>original, aBFT consensus protocol</b></span> with a <span style={mystyle}><b>privacy framework</b></span> based on Zero-knowledge Proofs (ZKPs) and secure Multi-Party Computation (sMPC) with the <span style={mystyle}><b>Substrate</b></span> stack.</AboutCenterP>
                    </AboutArticle>
                        {/*this is Rameez here*/}
                    <RightImg>
                        <TextureImg src={textureImg} />
                    </RightImg>
                    </ColBgWhite>
                </AboutCol>
            </AboutRow>
        </AboutContainer>
    </AboutSection>
    </>
  )
}

export default About

      const mystyle = {
        color: "#00eac7",
      };