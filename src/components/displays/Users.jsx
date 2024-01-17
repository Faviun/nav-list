import React from 'react';

const Users = ({data}) => {
    return (
        <div className='user-body'>
            {data.map((item) => <div className='user-data'>
                <p>{item.name}</p>
                <p>{item.username}</p>
                <p>{item.email}</p>
                {/* <p>{JSON.stringify(item.adress)}</p> */}
                <p>{item.phone}</p>
                <p><a href={item.website}>{item.website}</a></p>
                {/* <p>{item.company}</p> */}
            </div>)}
        </div>
    );
};

export default Users;