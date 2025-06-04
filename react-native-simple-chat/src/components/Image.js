import styled from "styled-components";

const Container = styled.View`
    align-self: center;
    margin-bottom: 20px;
`

const StyledImage = styled.Image.attrs(({imageStyle}) => ({
    style: imageStyle,
}))`
    background-color: ${({theme}) => theme.imageBackground};
    width: 100px;
    height: 100px;
    border-radius: ${({rounded}) => (rounded ? 50 : 0)}px;
`

const Image = ({url, imageStyle,rounded}) => {
    return(
        <Container>
            <StyledImage 
                source={{uri: url}} 
                style={imageStyle}
                rounded={rounded}
            />
        </Container>
    )
}

export default Image;