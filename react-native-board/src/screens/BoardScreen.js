//게시판 메인페이지
import { Text,FlatList } from "react-native"
import styled from "styled-components";
import PostItem from "../components/PostItem";
import Data from "../data/Data";

const Container = styled.View`
    flex: 1;
    align-items: flex-start;
`

const BoardScreen = () => {

    const handlePress = (item) => {
        console.log("클릭")
        // navigation.navigate("DetailScreen", { post: item });
    };

    return(
        <Container>
            <FlatList
                data={Data}
                keyExtractor={(item) => item.id.toString()} //고유한 키를 id로 지정
                renderItem={({item}) => (
                    <PostItem item={item} onPress={handlePress} /> //배열에 들어있는 각 아이템을 렌더링
                )}
            />
            <Text style={{fontSize:24}}>BoardScreen</Text>
        </Container>
    )
}

export default BoardScreen;