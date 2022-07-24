import React from 'react';
import {useSelector} from "react-redux";


const ShowCounts = () => {
    const {count1,users,isLoading,serverError} = useSelector(state => state.count1Reducer)
    return (
        <div>
            <h1>Count1:{count1}</h1>
            <hr/>
            {isLoading&& <h1>Loading</h1>};
            {serverError&& <h1>{serverError}</h1>}
            {JSON.stringify(users)}
        </div>
    );
};

export default ShowCounts;