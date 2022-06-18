import React from "react";
import styled from '@emotion/styled';
import { Box, CardMedia, Grid, Typography } from "@material-ui/core";
import Questions from "./Questions.tsx";

const StyledGrid = styled(Grid)`
    font-family:Domine;
    color:#58451E;
    font-size:30px;
    padding-left:1rem;
    padding-top:4rem;
    font-weight:700;
`;

const QuestionsContainer = styled('div')`
    padding:1rem;
`;

const StyledTypography = styled(Typography)`
    color:white;
    font-size:35px;
    font-weight:700;
    font-style:normal;
    font-family:Domine;
    width:180px;
    line-height:40px;
    padding-left:1rem;
    position:absolute;
    padding-top:1rem;
`;

export default class HowToGuides extends React.Component {
    public render() {
        return (
            <>
                <Grid container>
                    <StyledGrid item xs={5}>
                        How To? Guides
                    </StyledGrid>
                    <Grid item xs={7}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={process.env.PUBLIC_URL + `img/cleanup.jpg`}
                            style={{ objectFit: 'inherit', borderRadius: '0px 0px 235px 235px', height: '166px', width: '200px' }} />
                    </Grid>
                </Grid>
                <QuestionsContainer>
                    <Questions questionTitle="What I as an individual can do for the environment?" />
                    <Questions questionTitle="How to organize a cleanup drive?" />
                    <Questions questionTitle="How To Organize a planting drive?" />
                    <Questions questionTitle="How to setup a natural farm?" />
                </QuestionsContainer>
                <Grid>
                    <Box style={{backgroundColor:'#234A8D', width:'inherit', height:'253px'}}>
                        <StyledTypography>
                            What are "how to" guides?
                        </StyledTypography>
                        <Typography style={{color:'#FFA800', fontWeight:'700', fontSize:'22px', position:'absolute', top:'595px', lineHeight:'29px', fontFamily:'inherit', textAlign:'right'}}>
                            A how-to guide is an informative piece of writing that instructs a reader on how to perform a task by giving step by step instructions.
                        </Typography>
                    </Box>
                </Grid>
                <QuestionsContainer>
                    <Questions questionTitle="What I as an individual can do for the environment?" />
                    <Questions questionTitle="How to organize a cleanup drive?" />
                    <Questions questionTitle="How To Organize a planting drive?" />
                    <Questions questionTitle="How to setup a natural farm?" />
                </QuestionsContainer>
                
            </>
        )
    }
}