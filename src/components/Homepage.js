import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

const textColor = "black";
const fontFamily = "roboto";
const backgroundColor = "rgb(248,248,248)"

const AppWrapper = styled.div`
    background-color: ${backgroundColor};
    object-fit: cover;
    min-height: calc(100vh - 48px);
    max-width: 100vw;
`

const TextWrapper = styled.div`
    padding: 32px;
    max-width: 720px;
`

const Hello = styled.h1`
    color: ${textColor};
    font-size: 48px;
    margin: 0px;
    font-family: ${fontFamily};
`

const BioParagraph = styled.p`
    color: ${textColor};
    font-size: 20px;
    font-weight: 400;
    line-height: 1.825;
    font-family: ${fontFamily};
`

const ProfileImage = styled(Grid)`
    min-height: 400px;
    width: 100%;
    background-size: cover;
    background-position-y: center;
    background-position-x: center;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/brianlichliter-2018.appspot.com/o/Assets%2FNorthwesternHeadshots-113.jpg?alt=media&token=d56b6ace-45ff-4bdf-88cb-f8bfb1bc8c17);
    @media(max-width: 960px) {
        background-position-y: -205px;
    }
    @media(max-width: 480px) {
        background-position-y: top;
    }
`

const StyledA = styled.a`
    text-decoration: none;
    color: rgb(54, 91, 151);
    font-weight: bold;
`


class Homepage extends React.Component {
    render() {
        return (
            <AppWrapper>
                <Grid container spacing={0} alignItems="stretch" style={{minHeight: "calc(100vh - 48px)"}}>
                    <ProfileImage item sm={12} md={5}>
                    </ProfileImage>
                    <Grid item sm={12} md={7} style={{'display':'flex', 'alignItems': 'center', 'justifyContent':'center'}}>
                    <TextWrapper>
                        <Hello>
                            Hello.
                        </Hello>
                        <BioParagraph>
                            My name is Brian Lichliter and I am an experience designer currently working at <StyledA rel="noopener noreferrer" target="_blank" href="http://www.drawn.com">Drawn</StyledA>, a strategy and design firm. Previous intern at Visa and Motorola Mobility.
                        </BioParagraph>
                        <BioParagraph>
                            I have a passion for bringing user needs to the forefront of any and every endeavor. Having worked at various levels of abstraction in computing, technology, and design, I enjoy tackling problems both board and narrow in scope.
                        </BioParagraph>
                        <BioParagraph>
                            Currently spending my time learning tennis and continuously starting side projects with new web technologies <StyledA rel="noopener noreferrer" target="_blank" href="https://github.com/BrianLichliter/Portfolio-2018">like this one</StyledA>!
                        </BioParagraph>          
                        <Link style={{"color": "white", "textDecoration": "unset", 'marginRight': 16}} to="/projects">
                            <Button variant="contained" color="primary" size="large">
                                PROJECTS
                            </Button>
                        </Link>
                        <Button rel="noopener noreferrer" href="https://firebasestorage.googleapis.com/v0/b/brianlichliter-2018.appspot.com/o/BrianLichliter_Resume.pdf?alt=media&token=b8e5f759-3708-4837-96c4-c1253ae02fd1" target="_blank" variant="contained" color="secondary" size="large">
                            RÉSUMÉ
                        </Button>
                    </TextWrapper>
                    </Grid>
                </Grid>            
            </AppWrapper>
        )
    }
}

export default Homepage