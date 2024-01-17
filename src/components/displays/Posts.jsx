import React from 'react';

const Posts = ({data}) => {
    return (
        <div>
            {data.map((item) => <div>
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.body}</p>
            </div>)}
        </div>
    );
};

export default Posts;