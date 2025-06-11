//FlatList에 들어갈 게시글 하나의 컴포넌트 -> PostItem
import styled from "styled-components"
import {MaterialIcons} from '@expo/vector-icons'

const ItemContainer = styled.Pressable`
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-color: black;
    padding: 15px 20px;
`

//텍스트를 감싸는 영역(제목+설명)
const ItemTextContainer = styled.View`
    flex: 1;
    flex-direction: column;
`

//제목 스타일
const ItemTitle = styled.Text`
    font-size: 20px;
    font-weight: 600;
`

//설명 스타일
const ItemDescription = styled.Text`
    font-size: 16px;
    margin-top: 5px;
`

const PostItem = ({item,onPress}) => {

    return(
        <ItemContainer onPress={() => onPress(item)}> {/* 요소를 가로로 배치 */}
            <ItemTextContainer> 
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
            </ItemTextContainer>
            <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
            />
        </ItemContainer>
    )
}

export default PostItem;