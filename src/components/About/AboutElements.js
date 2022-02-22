import styled from "styled-components";

export const AboutSection = styled.section`
display: block;
position: relative;
overflow: hidden;
margin: 0;
padding: 50px 0;
background: #000;
`;

export const AboutContainer = styled.div`
max-width: 1140px;
width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

export const AboutRow = styled.div`
display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`;

export const AboutCol = styled.div`
flex: 0 0 100%;
max-width: 100%;
`;

export const ColBgWhite = styled.div`
padding: 110px 70px 50px 260px;
display: block;
    position: relative;
    z-index: 2;
    margin: 0 0 0 -25px;
    width: auto;
    max-width: 750px;
    margin-left: -80px;
    padding-left: 300px;
    border-radius: 3px;
    background: #fff;
`;

export const AboutArticle = styled.article`
display: block;
    margin: 0;
    padding: 0;
`;

export const AboutH6 = styled.h6`
font-size: 13px;
    letter-spacing: 3px;
    color: #14202a;
    font-weight: 400;
    margin-bottom: 18px;
`;

export const AboutH3 = styled.h3`
color: #14202a;
    padding-left: 25px;
    font-size: 39px;
    font-weight: 400;
    margin-bottom: 20px;
:before{
    content: "";
    position: absolute;
    top: 25%;
    bottom: 0.25em;
    left: 302px;
    width: 2px;
    height: 124px;
    background: #00eac7;
}
`;

export const AboutRightP = styled.p`

    color: #14202a;
    text-align: left;
    font-size: 18px;
    margin-bottom: 25px;
`;

export const AboutCenterP = styled.p`
color: #14202a;
text-align: left;
font-size: 18px;
:before{
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 2px;
    opacity: .1;
    margin: 0 10px 0 0;
    padding: 0;
    background: #000;
}
`;

export const RightImg = styled.div`
display: block;
    position: absolute;
    bottom: 0;
    z-index: -1;
    height: auto;
    right: auto;
    left: 0;
    margin-right: 0;
`;

export const TextureImg = styled.img`
display: block;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
`;