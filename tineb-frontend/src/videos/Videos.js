import "./Videos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import styled from '@emotion/styled';
import { More, Vtitle, YoutubeEmbed } from "./More";
const StyledHeaderDiv = styled('div')`
  font-size:42px;
  font-family:Domine;
  font-weight:400;
  text-align:center;
  color:#58451E;
`;
const Moreheader = styled('div')`
    padding: 20px;
    background: #234A8D;
    line-height: 21px;
    height: 54px;
    font-size: 28px;
    font-weight: 600;
    font-style: normal;
    text-align: center;
    color: #FFA800;
    font-family: 'League Spartan', sans-serif;
`;
function Videos() {
    return (
        <>
            <StyledHeaderDiv>
                Videos
            </StyledHeaderDiv>
                <YoutubeEmbed embedId="Ql23uQza7Qo" />
                <Vtitle
                    vtitle="Eco-friendly tips for students"
                    vdesc="As a student fight for online exams and stop writing exams in papers lol"
                />
                <YoutubeEmbed embedId="taQSopdaVQA" />
                <Vtitle
                    vtitle="Climate Change is affecting you personally. Here's how"
                    vdesc="Do you know Climate change is making you late for work? It is also making you unhealthy and your coffee expensive. WION's Palki tells you how Climate Change is affecting us personally in ways we don't realise."
                />
                <YoutubeEmbed embedId="GR-rm5FC8IA" />
                <Vtitle
                    vtitle="Sanjay Van"
                    vdesc="Aarna, our 9-year-old climate warrior talks about her favorite spot in the city. She comes here often with her parents for morning walks and cleanup drives. According to a recent notification issued by the Delhi
					development authority, there are plans to convert the Sanjay van area into an eco-tourism hub."
                />

            <Moreheader>
                Watch more videos
            </Moreheader>
                <More title="Video title" href="https://example.com" />
                <More title="Video title" href="https://example.com" />
                <More title="Video title" href="https://example.com" />
                <More title="Video title" href="https://example.com" />
            <More title="Video title"href="https://example.com" />
            
        </>
    );
}
export default Videos;
