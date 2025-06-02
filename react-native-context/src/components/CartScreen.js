import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { View, Button, Text, ScrollView } from "react-native";

const CartScreen = () => {

    const {cart,dispatch} = useContext(CartContext);

    return(
        <View style={{flex:1, padding : 20}}>
            <Button 
                title="상품 추가" 
                onPress={() => dispatch({type:"ADD_ITEM"})}/>
            <ScrollView style={{marginTop: 20}}>
                {cart.map((item) => (              
                    <View style={{
                        flexDirection:"row",
                        alignItems: 'center',
                        justifyContent : 'space-between',
                        margin : 5,
                        padding : 10,
                        borderWidth : 1,
                        borderColor : '#ccc',
                        borderRadius : 5,
                        }}>
                        <Text key={item.id}>{item.name}</Text>
                        <Button 
                            title="삭제" 
                            onPress={() => dispatch({type:"REMOVE_ITEM",payload:item.id})}/>
                    </View>        
                ))}
            </ScrollView>
            
        </View>
    )
}

export default CartScreen;