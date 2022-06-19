import "./Videos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import styled from "@emotion/styled";
import More from "./More";
import VideoDetails from "./VideoDetails";
import YoutubeEmbed from "./YoutubeEmbed";
const StyledHeaderDiv = styled("div")`
  font-size:42px;
  font-family:Domine;
  font-weight:400;
  text-align:center;
  color:#58451E;
`;

const Moreheader = styled("div")`
    padding: 20px;
    background: #234A8D;
    line-height: 21px;
    height: 54px;
    font-size: 28px;
    font-weight: 600;
    font-style: normal;
    text-align: center;
    color: #FFA800;
    font-family:Domine;
   
`;
function Videos() {
  return (
    <>
      <StyledHeaderDiv>Videos</StyledHeaderDiv>
      <YoutubeEmbed embedId="Ql23uQza7Qo" />
      <VideoDetails
        VideoTitle="Eco-friendly tips for students"
        VideoDescription="As a student fight for online exams and stop writing exams in papers lol"
      />
      <YoutubeEmbed embedId="taQSopdaVQA" />
      <VideoDetails
        VideoTitle="Climate Change is affecting you personally. Here's how"
        VideoDescription="WION's Palki tells you how Climate Change is affecting us personally in ways we don't realise."
      />
      <YoutubeEmbed embedId="GR-rm5FC8IA" />
      <VideoDetails
        VideoTitle="Sanjay Van"
        VideoDescription="Aarna, our 9-year-old climate warrior talks about her favorite spot in the city."
      />

      <Moreheader>Watch more videos</Moreheader>
      <More
        title="Video title"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
      <More
        title="Video title"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
      <More
        title="Video title"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
      <More
        title="Video title"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
      <More
        title="Video title"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
    </>
  );
}
export default Videos;
