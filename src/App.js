import Proplay from './Proplay';
import Button from './Button';
import Border from './Border';
import './App.css';
import { useState } from 'react';

// random으로 올 숫자 함수구하기
const randomDate = (value)=>{
    return Math.ceil(Math.random() * value)
}
// 
let count = 0;
function App(){
    // 기록에 대한 useState
    const [ahistory,setAhistory] = useState([]);
    const [bhistory,setBhistory] = useState([]);

    // playClick()함수
    const playClick = ()=>{
        // console.log(1)
        if(count <= 4){
            // console.log(1)
            let aaa = randomDate(9);
            let bbb = randomDate(9);
            count++;
            setAhistory([...ahistory,aaa]);
            setBhistory([...bhistory,bbb]);
        } else if(count === 5){
            // console.log(1)
            count=0;
            setAhistory([])
            setBhistory([])
        }
    }
    
    // resetClick()함수
    const resetClick = ()=>{
        // console.log(1)
        setAhistory([]);
        setBhistory([]);
    }

    return(
        <div id='Wrap'>
            <div>
                <div className='practice'>
                <Proplay/>
                </div>
                <div className='btn'>
                <Button onClick={playClick}>start</Button>
                <Button onClick={resetClick}>reset</Button>
                </div>
                <div className='contain'>
                <Border name='A' myteam={ahistory}></Border>
                <Border name='B' myteam={bhistory}></Border>
                </div>    
            </div>
        </div>
    )
} 

export default App;