import Head from "next/head";
import styled from "styled-components";

const MainContainer = styled("div")`
  padding: 15px;
  width: 100%;
`;
const P = styled("p")`
  color: #d8cfcf;
  width: 50%;
  text-align: justify;
  font-size: 18px;
  font-weight: 600;
`;
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <P>
          The 1st Brick of the wall of failure of your complex project is
          selecting the wrong programmer avoid it and build the stairway for
          success with Ronald Lopez
        </P>
        <P>
          Here is a little description of myself and an explanatory version of
          why I am the proper professional to take care of your project
        </P>
        <P>
          My greatest professional impulse is the search for continuous
          improvement in my knowledge and experiences, I am a goal-oriented
          person, I rely heavily on prior planning as the main vehicle to
          achieve my individual goals and I am aware that the only way to
          success is it is the action, so I am always willing to make all the
          sacrifices concerned to achieve success.
        </P>
        <P>
          My main added value is my ability to commit to the individual goals of
          my client in their project, I am very clear about the fact that the
          success of my client is therefore my own success and that each project
          and request that I generate an ultra-satisfied client with the final
          product is an addiction to my professional background, which is why
          every time an estimate is entrusted to me, I dedicate 100% of my
          dedication, attention, commitment and performance, each task
          represents my own identity as a profession and my ambition is that
          this professional identity is synonymous with excellence and quality
          in execution.
        </P>
        <P>
          As a professional I am willing to invest the amount of time needed to
          fill any technological gap that my profile has with respect to the
          demands of the project, I am directly determined to become the best
          version with each estimate, I feel that each feedback from my client
          or any member of my team contributes greatly to my primary goal, which
          is to evolve as a professional either through the implementation of
          different practices or the stopping of behaviors and actions, whatever
          it takes to fill with satisfaction and bring my client the success
          that is my path to follow as a professional.
        </P>
      </MainContainer>
    </>
  );
}
