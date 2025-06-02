import styled from "styled-components";

const Container = styled.View`
    align-self: center;
    margin-bottom: 30px;
`

const StyledImage = styled.Image.attrs(({imageStyle}) => ({
    style: imageStyle,
}))`
    background-color: ${({theme}) => theme.imageBackground};
    width: 100px;
    height: 100px;
`

const Image = ({url, imageStyle}) => {
    return(
        <Container>
            <StyledImage source={{uri: url}} style={imageStyle} />
        </Container>
    )
}

export default Image;