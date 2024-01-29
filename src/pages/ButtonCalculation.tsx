import React from 'react';
import {SetterOrUpdater, useRecoilState} from 'recoil';
import { numState } from '../recoil/recoil';


const ButtonCalculation = () =>  {
    return (
        <div>
          <ButtonZone />
        </div>
      );
}



const ButtonZone = () => {

    const [num,setNum]:[number,SetterOrUpdater<number>] = useRecoilState(numState);


    const addSomeNum = () => {
        // HTMLInputElement 로 하는 이유는 HTMLElement 로 했을때에 value 값을 찾을 수 없다고 뜨기 때문에 HTMLInputElement 로 좁혀준다. 
        const newNumId = document.getElementById('newNum') as HTMLInputElement ;
        const value= parseInt(newNumId.value,10); 

        setNum(num=>num+value);
    }

    const minusSomeNum = () => {
        // HTMLInputElement 로 하는 이유는 HTMLElement 로 했을때에 value 값을 찾을 수 없다고 뜨기 때문에 HTMLInputElement 로 좁혀준다. 
        const newNumId = document.getElementById('newNum') as HTMLInputElement ;
        const value= parseInt(newNumId.value,10); 

        setNum(num=>num-value);
    }


    return (
        <div>
            <p className="nowNum">현재 결과 : <span id="resultNum">{num}</span></p>
            <br/>
            <input type="text" id="newNum" defaultValue="0"></input>
            <button className='addNum' onClick={addSomeNum}>ADD</button>
            <button className='MiunsNum' onClick={minusSomeNum}>MINUS</button>
        </div>
    );

   
}



export default ButtonCalculation;