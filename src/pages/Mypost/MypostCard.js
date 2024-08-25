import React, { useContext, useState } from 'react';
import DeleteModal from '../Modal/DeleteModal';
import { useQuery } from '@tanstack/react-query';
import { Authcontext } from '../../Context/Context';

const MymypostCard = ({ mypost }) => {
const {user}=useContext(Authcontext)
    const [deletepost, setdeletepost] = useState(null)
    const closemodal = () => {
        setdeletepost(null);
    }
    const handlepost = event => {
        fetch(`http://localhost:5000/mypost/${mypost._id}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch();
            })

    }


    const { data: posts=[], refetch,isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => fetch(`http://localhost:5000/mypost`)
            .then(res => res.json())

    })

    if(isLoading){
        <p>Loading....</p>
    }
    return (
        <div>

            <div>
                <div className="card  bg-base-100 shadow-xl ">
                    <div className="card-body">
                        <h2 className="card-title">{mypost.name}</h2>
                        <p>Phone Number: {mypost.Phone_No}</p>
                        <p>Email: {mypost.email}</p>
                        <p>Address: {mypost.address}</p>
                        <p>Street And House No: {mypost.street}</p>
                        <p>Room Details: {mypost.roomDetails}</p>
                        <p>Price: {mypost.price}</p>
                    </div>
                    <figure><img src={mypost.image} alt="Shoes" /></figure>
                    {
                        posts.map(post =>

                            < div className='text-center mb-2'>
                                <label onClick={() => setdeletepost(post)} htmlFor="my_modal_6" className="btn">Delete</label>

                            </div>
                        )}
                </div>
            </div>
            {
                <DeleteModal
                    title={`Are You Sure You Want TO Delete The Post?`}
                    message={`If You delete the post you can not be undone`}
                    closemodal={closemodal}
                    success={handlepost}
                    modaldata={deletepost}
                >

                </DeleteModal>
            }
        </div >
    );
};

export default MymypostCard;