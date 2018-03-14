/**
 * Created by tom on 3/6/2018.
 */
import React from 'react';


const Rank = ({name, entries}) => {
    return (
        <div>
            <div className="white f3">
                {`${name} ... your current entry count is... `}
            </div>
            <div className="white f1">
                {entries}
            </div>
        </div>
    )
};

export default Rank;