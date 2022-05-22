import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import useTools from '../../Hooks/useTools';

const Purchase = () => {
    const { id } = useParams()
    const [tool, setTool] = useState({});

    // const { data: items, isLoading } = useQuery(['tools'], () => fetch(`http://localhost:5000/tools/${id}`)).isFetchedAfterMount(res => res.json())

    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [])



    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{tool.name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;