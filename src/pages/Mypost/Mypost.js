import React, { useContext } from 'react';
import { Authcontext } from '../../Context/Context';
import { useQuery } from '@tanstack/react-query';
import MypostCard from './MypostCard';

const Mypost = () => {
    const { user } = useContext(Authcontext)
    const url = `http://localhost:5000/mypost?email=${user?.email}`;
    // const { data: myposts, isLoading } = useQuery({
    //     queryKey: ['myposts', user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         return data;
    //     }

    // })

    const {data: myposts,isLoading}=useQuery({
        queryKey:['myposts',user?.email],
        queryFn: ()=>fetch(url)
        .then(res=>res.json())
        
        }
    )

    if (isLoading) {
        return <p>loading...</p>
    }
    return (
        <div className='grid grid-cols-1 lg:w-1/2 mx-auto gap-10 mt-10'>
            {
                myposts.map(mypost=><MypostCard key={mypost._id} mypost={mypost}></MypostCard>)
            }
        </div>
    );
};

export default Mypost;