import React from 'react';
import {useDispatch} from "react-redux";
import {count1Actions} from "../slices";


const Count1Tools = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(count1Actions.inc())}>inc</button>
            <button onClick={()=>dispatch(count1Actions.dec())}>dec</button>
            <button onClick={()=>dispatch(count1Actions.res())}>res</button>
            <button onClick={()=>dispatch(count1Actions.getUsers())}>users</button>
        </div>
    );
};

export default Count1Tools;