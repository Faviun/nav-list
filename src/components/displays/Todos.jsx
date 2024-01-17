import React from 'react';

const Todos = ({data}) => {
    return (
        <div>
            {data.map((item) => <div>
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.completed}</p>
            </div>)}
        </div>
    );
};

export default Todos;