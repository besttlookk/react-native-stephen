// import React, {useState} from 'react'
// import {View, Text, StyleSheet} from 'react-native'

// import ColorCounter from '../components/ColorCounter'

// const COLOR_INCREMENT = 15

// const SquareScreen = () => {
//     const [red, setRed] = useState(0)
//     const [green, setGreen] = useState(0)
//     const [blue, setBlue] = useState(0)

//     console.log(red)
//     console.log(green)
//     console.log(blue)

//     const setColor = (color, change)=>{
//         switch(color){
//             case 'red':
//                 red + change > 255  || red + change < 0 ? null : setRed(red + change);
//                 return;

//             case 'green':
//                 green + change > 255  || green + change < 0 ? null : setGreen( green + change);
//                 return;

//             case 'blue':
//                 blue + change > 255  || blue + change < 0 ? null : setBlue(blue + change);
//                 return;

//             default: 
//                 return

//         }
//     }

//     return <View>
//         <ColorCounter     
//             color="Red"
//             // onIncrease={()=> setRed(red + COLOR_INCREMENT)}
//             // onDecrease={()=> setRed(red - COLOR_INCREMENT)}
//             onIncrease={()=> setColor('red', COLOR_INCREMENT)}
//             onDecrease={()=> setColor('red', -1*COLOR_INCREMENT)}
//         />
//         <ColorCounter
//             color="Blue"
//             onIncrease={()=> setColor('blue', COLOR_INCREMENT)}
//             onDecrease={()=> setColor('blue', -1*COLOR_INCREMENT)}    
//         />
//         <ColorCounter 
//             color="Green"
//             onIncrease={()=> setColor('green',  COLOR_INCREMENT)}
//             onDecrease={()=> setColor('green', -1*COLOR_INCREMENT)}    
//         />

//         <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
//     </View>
// }

// const styles = StyleSheet.create({})

// export default SquareScreen



// ========================Same thing using reducer ============================
// import React, {useReducer} from 'react'
// import {View, Text, StyleSheet} from 'react-native'

// import ColorCounter from '../components/ColorCounter'

// const COLOR_INCREMENT = 15

// const reducer = (state, action) => {
//     switch(action.colorToChange){

//         case 'red':
//             if(state.red + action.amount > 255 || state.red + action.amount < 0){
//                 return state;
//             }else{
//                 return {...state, red: state.red + action.amount}
//             }
//         case 'green':
//             if(state.green + action.amount > 255 || state.green + action.amount < 0){
//                 return state;
//             }else{
//                 return {...state, green: state.green + action.amount}
//             }
//         case 'blue':
//             if(state.blue + action.amount > 255 || state.blue + action.amount < 0){
//                 return state;
//             }else{
//                 return {...state, blue: state.blue + action.amount}
//             }

//         default:
//             return state;

//     }
// }

// const SquareScreen = () => {

//     const [state, dispatch] = useReducer(reducer, {red: 0, blue: 0, green: 0})
//     const {red, green, blue} = state

//     return <View>
//         <ColorCounter     
//             color="Red"
//             onIncrease={()=> dispatch({colorToChange:'red', amount: COLOR_INCREMENT})}
//             onDecrease={()=> dispatch({colorToChange: 'red', amount: -1* COLOR_INCREMENT})}
//         />
//         <ColorCounter
//             color="Blue"
//             onIncrease={()=> dispatch({colorToChange:'blue', amount: COLOR_INCREMENT})}
//             onDecrease={()=> dispatch({colorToChange: 'blue', amount: -1* COLOR_INCREMENT})} 
//         />
//         <ColorCounter 
//             color="Green"
//             onIncrease={()=> dispatch({colorToChange:'green', amount: COLOR_INCREMENT})}
//             onDecrease={()=> dispatch({colorToChange: 'green', amount: -1* COLOR_INCREMENT})}
//         />

//         <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
//     </View>
// }

// const styles = StyleSheet.create({})

// export default SquareScreen

// ==========================================updating above code

import React, {useReducer} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15

const reducer = (state, action) => {
    switch(action.type){

        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 ?
                state : {...state, red: state.red + action.payload}
        
        case 'change_green':
            if(state.green + action.payload > 255 || state.green + action.payload < 0){
                return state;
            }else{
                return {...state, green: state.green + action.payload}
            }
        case 'change_blue':
            if(state.blue + action.payload > 255 || state.blue + action.payload < 0){
                return state;
            }else{
                return {...state, blue: state.blue + action.payload}
            }

        default:
            return state;

    }
}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, {red: 0, blue: 0, green: 0})
    const {red, green, blue} = state

    return <View>
        <ColorCounter     
            color="Red"
            onIncrease={()=> dispatch({type:'change_red', payload: COLOR_INCREMENT})}
            onDecrease={()=> dispatch({type: 'change_red', payload: -1* COLOR_INCREMENT})}
        />
        <ColorCounter
            color="Blue"
            onIncrease={()=> dispatch({type:'change_blue', payload: COLOR_INCREMENT})}
            onDecrease={()=> dispatch({type: 'change_blue', payload: -1* COLOR_INCREMENT})} 
        />
        <ColorCounter 
            color="Green"
            onIncrease={()=> dispatch({type:'change_green', payload: COLOR_INCREMENT})}
            onDecrease={()=> dispatch({type: 'change_green', payload: -1* COLOR_INCREMENT})}
        />

        <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
    </View>
}

const styles = StyleSheet.create({})

export default SquareScreen