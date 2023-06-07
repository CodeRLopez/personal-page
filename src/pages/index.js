import FilledCircle from "@/components/Elements/Geometric/FilledCircle";
import Triangle from "@/components/Elements/Geometric/Triangle";
import Cards from "@/components/pageBlocks/Cards";
import Head from "next/head";
import styled from "styled-components";

const Slider = styled("div")`
  display: flex;
  height: 500px;
  padding: 0px 15px;
  background-color: #222;
  position: relative;
  @media(max-width: 1200px) {
    flex-direction: column;
    height: 800px;
    align-items: center;
  }
`;
const MainContainer = styled('div')`
  padding: 15px;
`
const Text = styled("div")`
  display: flex;
  width: 55%;
  flex-direction: column;
  justify-content: center;
  @media(max-width: 1200px) {
    width: 100%;
    height: 50%;
  }
`;
const Photo = styled("div")`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-left: 80px;
  @media(max-width: 1200px) {
    height: 50%;
    padding-top: 25px;
    padding-left: 0px;
  }
  @media(max-width: 428px) {
    width: 100%;
  }
`;
const H4 = styled("h4")`
  color: #d8cfcf;
  font-weight: 700;
  text-align: justify;
  padding: 0px 100px;
  font-size: 20px;
  @media(max-width: 768px) {
    padding: 0px 18px;
  }
`;
const H2 = styled("h2")`
  color: #ed6c54;
  font-weight: 700;
  text-align: justify;
  padding: 0px 100px;
  margin-top: 100px;
  font-style: italic;
  @media(max-width: 1200px) {
    margin: 0;
  }
  @media(max-width: 768px) {
    padding: 0px 15px;
  }
`;
const BackgroundPhoto = styled(FilledCircle)`
  width: 400px;
  height: 400px;
  background-color: #2f2f2f;
  @media(max-width: 1200px) {
    left: auto;
  }
  @media(max-width: 768px) {
    max-width: 350px;
    max-height: 350px;
  }
  @media(max-width: 425px) {
    max-width: 80%;
    max-height: 70%;
  }
`;
const StyledTriangle = styled(Triangle)`
  bottom: 100%;
  @media(max-width: 1200px) {
    bottom: 40px;
    left: 75%;
  }
`;
const StyledCircule = styled(FilledCircle)`
  bottom: 100%;
  top: 5px;
  margin-left: 100px;
  &::before {
    background-color: #06F6B8;
  }
  @media(max-width: 1200px) {
    top: -44px;
    left: 77%;
  }
`;
const Name = styled('div')`
  position: absolute;
  left: 100px;
  top: 100px;
  color: #d8cfcf;
  font-size: 50px;
  font-weight: 800;
  z-index: 999;
  @media(max-width: 1200px) {
    left: auto;
    right: 80%;
  }
  @media(max-width: 768px) {
    font-size: 35px;
    font-weight: 800;
    right: 85%;
  }
  @media(max-width: 428px) {
    right: 60%;
  }
`
const LastName = styled(Name)`
 top: 150px;
 left: 150px;
 @media(max-width: 1200px) {
  left: auto;
  right: 80%;
 }
 @media(max-width: 428px) {
  right: 60%;
 }
`
const GeometricContainer = styled('div')`
 position: relative;
 @media(max-width: 768px) {
  display: none;
}
`
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider>
        <Photo>
            <Name>
              Ronald
            </Name>
            <LastName>
              Lopez
            </LastName>
          <BackgroundPhoto />
        </Photo>
        <Text>
          <GeometricContainer>
            <StyledTriangle />
            <StyledCircule />
          </GeometricContainer>
            <H2>FULL STACK DEVELOPER</H2>
          <H4>
            I&apos;m a skilled full stack web developer experienced in front-end
            and back-end technologies. I create responsive websites with
            user-centric designs and optimized performance. Let&apos;s bring
            your web project to life together!
          </H4>
        </Text>
      </Slider>
      <MainContainer>
        <H2>
          Technologies I work with
        </H2>
        <Cards />
      </MainContainer>
    </>
  );
}
