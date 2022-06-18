import styled from "@emotion/styled";
import React from "react";

interface IQuestionsProps{
    questionTitle:string
}

const StyledDiv = styled('div')`
    color:#234A8D;
    font-size:18px;
    font-weight:700;
    font-family:Domine;
    padding-bottom:1rem;
`;

export default class Questions extends React.Component<IQuestionsProps> {
    public render(){
        return(
            <>
            <StyledDiv>
                <i className="bi bi-arrow-up-right" style={{padding:'5px'}} />
                <span style={{ paddingLeft: '0.5rem' }}>
                    {this.props.questionTitle}
                </span>
            </StyledDiv>
            </>
        )
    }
}