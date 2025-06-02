import { Button } from "react-native"

const Child = ({changeCount}) => {
    return(
        <Button title="+1" onPress={() => changeCount(prev=>prev+1)}/>
    )
}

export default Child;