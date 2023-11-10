import React,{useState, useEffect} from 'react'

export default function Form({list}) {
console.log(list);
const[state, setState] = useState({
    name : list?.name || "",
    uid : list?.uid || "",
    gender : list?.gender || "",

})

useEffect(() =>{
setState({
    name : list?.name || "",
    uid : list?.uid || "",
    gender : list?.gender || "",

});
},[list?.gender, list?.name, list?.uid, state]);

function handleChange(e){
    const {name , value }= e.target;
    setState({...state,[name]:value});
}

  return (
    <div>
        <form action="">
            <input type="text" name='name' value={state.name || ""} onChange={handleChange} />
            <input type="text" name='uid' value={state.uid || ""} onChange={handleChange} />
            <input type="text" name='gender' value={state.gender || ""} onChange={handleChange} />
            {/* <input type="text" name='vtc' value={props.list?.vtc || ""} onChange={handleChange} />
            <input type="text" name='dist' value={props.list?.dist || ""} onChange={handleChange} />
            <input type="text" name='state' value={props.list?.state || ""} onChange={handleChange} />
            <input type="text" name='pc' value={props.list?.pc || ""} onChange={handleChange} /> */}
        </form>

    </div>
  )
}
