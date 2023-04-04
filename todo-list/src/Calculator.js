import React,{useState,useEffect} from 'react';
import './Calculator.css';
function Calculator(){

    const [displayValue,setDisplayValue] = useState(0);
    

    const inputValues = [];
    const inputHandler = (e,val)=>{
        inputValues.push(val);
        
        if(val=="=" && inputValues[1]=='+')
        {
            setDisplayValue(inputValues[0]+inputValues[2]);
        }
        console.log(inputValues);

    }
    return(
        <div>
            <table className="calculator" >
                <tr>
                <td colSpan={3}> <input value={displayValue} className="display-box" type="text" id="result" disabled /> 
                </td>
                <td> <input type="button" value="C"   /> </td>
                </tr>
                <tr>
                <td> <input type="button" value="1" onClick={(e) => inputHandler(e,1)} /> </td>
                <td> <input type="button" value="2"  onClick={(e) => inputHandler(e,2)}/> </td>
                <td> <input type="button" value="3" onClick={(e) => inputHandler(e,3)} /> </td>
                <td> <input type="button" value="/"  onClick={(e) => inputHandler(e,'/')}/> </td>
                </tr>
                <tr>
                <td> <input type="button" value="4"  onClick={(e) => inputHandler(e,4)}/> </td>
                <td> <input type="button" value="5" onClick={(e) => inputHandler(e,5)} /> </td>
                <td> <input type="button" value="6" onClick={(e) => inputHandler(e,6)}/> </td>
                <td> <input type="button" value="-" onClick={(e) => inputHandler(e,'-')} /> </td>
                </tr>
                <tr>
                <td> <input type="button" value="7" onClick={(e) => inputHandler(e,7)} /> </td>
                <td> <input type="button" value="8"  onClick={(e) => inputHandler(e,8)}/> </td>
                <td> <input type="button" value="9" onClick={(e) => inputHandler(e,9)} /> </td>
                <td> <input type="button" value="+" onClick={(e) => inputHandler(e,'+')} /> </td>
                </tr>
                <tr>
                <td> <input type="button" value="."  onClick={(e) => inputHandler(e,'.')}/> </td>
                <td> <input type="button" value="0"  onClick={(e) => inputHandler(e,0)}/> </td>
                <td> <input type="button" value="="  onClick={(e) => inputHandler(e,'=')}  /> </td>
                <td> <input type="button" value="*" onClick={(e) => inputHandler(e,'*')} /> </td>
                </tr>
                </table>
        </div>
    );
}

export default Calculator;