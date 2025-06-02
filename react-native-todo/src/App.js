import styled,{ThemeProvider} from "styled-components";
import { theme } from "./theme";
import { Alert, StatusBar, useWindowDimensions } from "react-native";
import Input from "./components/Input";
import { useState, useRef, useEffect } from "react";
import { images } from "./Image";
import IconButton from "./components/IconButton";
import Task from "./components/Task";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Container = styled.SafeAreaView`
    flex: 1;
    background-color:${({theme}) => theme.background};
    alignItems: center;
    justify-content: flex-start;
`

const Title = styled.Text`
    font-size: 40px;
    font-weight: 600;
    color: ${({theme}) => theme.main};
    align-self: flex-start;
    margin: 20px;
`

const List = styled.ScrollView`
    flex : 1;
    width : ${({width}) => width -40}px;
`

export default App = () => {
    //새 할일이 담길 state
    const [newTask, setNewTask] = useState('');

    const inputRef = useRef(null);

    //가짜데이터
    const [tasks, setTasks] = useState({
        // '1':{id:'1',text:'Hanbit',completed:false},
        // '2':{id:'2',text:'React Native',completed:true},
        // '3':{id:'3',text:'Study',completed:false},
        // '4':{id:'4',text:'Game',completed:false},
    })

    //todo를 AsyncStorage에 저장한다.
    const _saveTasks = async (tasks) => {
        try {
            await AsyncStorage.setItem('tasks',JSON.stringify(tasks));
            setTasks(tasks);
        } catch (error) {
            
        }
    }

    //저장된 내용을 꺼내온다.
    const _loadTasks = async () => {
        const loadTasks = await AsyncStorage.getItem('tasks');
        console.log("Loaded Tasks from AsyncStroage : " , loadTasks);
        setTasks(JSON.parse(loadTasks || '{}'));
    }

    useEffect(() => {
        _loadTasks();
    },[]);

    const width = useWindowDimensions().width;

    const _handleTextChange = (text) => {
        setNewTask(text);
    }

    const _addTask = () => {
        //_addTask 함수가 호출되면 task에 새로운 할 일이 추가되도록 기능을 만들어보자
        //'4':{id:'4',text:'Game',completed:false},
        //ID값은 Date.now().toString();으로 넣기
        const ID = Date.now().toString();
        const newTaskObject = {[ID]:{id:ID, text:newTask, completed:false}};

        setNewTask('');
        _saveTasks({...tasks, ...newTaskObject});
        //setTasks({...tasks, ...newTaskObject});
        // alert(`Add: ${newTask}`)
        
    }

    //Object.assign(target, ...source)
    //target : 속성을 복사할 객체
    //source : 속성을 복사할 하나 이상의 원본 객체들
    const _deleteTask = (id) => {

        Alert.alert("삭제","삭제하시겠습니까?",
            [{text:'취소'},
             {text:'확인', onPress: () => {
                const currentTasks = Object.assign({},tasks);
                delete currentTasks[id];
                _saveTasks(currentTasks);
                // setTasks(currentTasks);
             }}]
        ) 
    }

    const _toggleTask = (id) => {
        const currentTasks = Object.assign({},tasks);
        currentTasks[id]['completed'] = !currentTasks[id]['completed'];
        _saveTasks(currentTasks);
        // setTasks(currentTasks);
    }

    const _updateTask = (item) => {
        // if(inputRef.current){
        //     inputRef.current.focus();
        // }
        //현재 배열을 복사해서 가져오고 변경된 내용을 넣고 다시 state에 반영하기
        const currentTasks = Object.assign({},tasks);
        currentTasks[item.id] = item;
        _saveTasks(currentTasks);
        // setTasks(currentTasks);
    }

    const _onBlur = () => {
        setNewTask('');
    }

    const _onKeyPress = (e) => {
        if(e.key === 'Enter'){
            _addTask;
        }
    }

    return(
        <ThemeProvider theme={theme}>
            <Container>
                <Title>TODO List</Title>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={theme.background}
                />
                <Input 
                    placeholder="+ Add a Task"
                    value={newTask}
                    onChangeText={_handleTextChange}
                    onSubmitEditing={_addTask}
                    onBlur={_onBlur}
                    onKeyPress={_onKeyPress}
                />
                {/* Task의 수 만큼 Task 컴포넌트가 만들어져야함 
                Object.values(value) : 인자로 전달된 값이 객체 형식인 경우 내부 값들만 배열로 추출*/}
                <List width={width}>
                    {/* 할일의 개수만큼 Task 출력하기
                    단, 아이디가 클수록 맨위로 출력하기 */}
                    {Object.values(tasks).reverse().map(item => (
                        <Task 
                            key={item.id} 
                            item={item} 
                            deleteTask={_deleteTask} 
                            toggleTask={_toggleTask}
                            updateTask={_updateTask}
                        />
                    ))}
                </List>
            </Container>
        </ThemeProvider>
    )
}
