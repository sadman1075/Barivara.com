import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ToletCard from './ToletCard';

const Tolet = () => {
    const { data: posts=[], isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: () => fetch('http://localhost:5000/post')
            .then(res => res.json())
    })



    return (
        <div className='grid grid-cols-1 w-full  lg:w-1/2 mx-auto gap-10 mt-10'>
            {
                posts.map(post=><ToletCard key={post._id} post={post}></ToletCard>)
            }
        </div>
    );
};

export default Tolet;