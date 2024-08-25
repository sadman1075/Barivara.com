import React from 'react';

const ToletCard = ({post}) => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="card-title">{post.name}</h2>
                    <p>Phone Number: {post.Phone_No}</p>
                    <p>Address: {post.address}</p>
                    <p>Street And House No: {post.street}</p>
                    <p>Room Details: {post.roomDetails}</p>
                    <p>Price: {post.price}</p>
                </div>
                <figure><img src={post.image} alt="Shoes" /></figure>
            </div>
        </div>
    );
};

export default ToletCard;