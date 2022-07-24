import React from 'react';
import ShowCounts from "./redux/components/showCounts";
import Count1Tools from "./redux/components/Count1Tools";

const App = () => {
    return (
        <div>
            <ShowCounts/>
            <hr/>
            <Count1Tools/>
        </div>
    );
};

export default App;