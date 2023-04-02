import React, {useState} from 'react';

function UserDetails(){

    let obj = 
        {
            name : '',
            country : '',
            gender : '1',
            degree : {
                deg1:false,
                deg2:false,
                deg3:true,
            },
        }
    
        
    const [userObj,setUserObj] = useState(obj);

    const handleInputChange = (e) => 
    {
        // let copy = {...userObj};
        // copy[e.target.name] = e.target.value
        // setUserObj(copy);

        const { value, name, id } = e.target;

        setUserObj({
            ...userObj,
            [name] : value
        });
    }

   


    const handleInputClick = (e,degree='') => 
    {
        let copy = {...userObj};
        if(degree!='')
        {
            
            if(degree=='BSC')
            {
                copy['degree']['deg1'] = !copy['degree']['deg1'];
            } else if(degree=='MSC')
            {
                copy['degree']['deg2'] = !copy['degree']['deg2'];
            } else if(degree=='BE')
            {   
                copy['degree']['deg3'] = !copy['degree']['deg3'];
            }
            
            
        } else {
            copy[e.target.name] = e.target.value
        }
        setUserObj(copy);
    }

    const handleSubmit = (e) => {
        console.log(userObj);
    }
    
    return(
        
        <div className='container'>
            <form>
            <div className='row'>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" value={userObj.name} name='name' placeholder="Email" onChange={(e)=>handleInputChange(e)}/>
                </div>
            </div>
            <div className='row'>
                <label htmlFor="exampleInputEmail1">Degree</label>&emsp;
                <label className="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1"  name='deg1' onChange={(e)=>handleInputClick(e,'BSC')} checked={userObj.degree.deg1}/> BSC
                </label>
                <label className="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox2"  name='deg2' onChange={(e)=>handleInputClick(e,'MSC')} checked={userObj.degree.deg2}/> MSC
                </label>
                <label className="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox3"  name='deg3' onChange={(e)=>handleInputClick(e,'BE')} checked={userObj.degree.deg3}/> BE
                </label>
            </div>
            <div className='row'>
                <label htmlFor="exampleInputEmail1">Gender</label>&emsp;
                <label className="radio-inline">
                    <input type="radio" name="gender" id="inlineRadio1"  value="1" onChange={handleInputClick} checked={userObj.gender == '1' ? true : false} /> Male
                </label>
                <label className="radio-inline">
                <input type="radio" name="gender" id="inlineRadio2" value="2" onChange={handleInputClick} checked={userObj.gender == '2' ? true : false}/> Female
                </label>
            </div>
            <div className='row'>
                <label>Country</label>&emsp;
                <select className="form-control" name="country" onChange={handleInputChange}>
                    <option>select</option>
                    <option>India</option>
                    <option>Pakistan</option>
                    <option>UAE</option>
                </select>
            </div>
            <div className='row'>
                <br></br>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </div>
            </form>
        </div>
    );
}
export default UserDetails;