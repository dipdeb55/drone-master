import React from 'react';
import useTools from '../../Hooks/useTools';
import OurTools from './OurTools'


const Tools = () => {
    const [tools, setTools] = useTools([]);
    return (
        <div>
            <h2 className='text-2xl text-accent text-center bold my-8'>Tools {tools.length}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    tools?.map(tool => <OurTools
                        tool={tool}
                        key={tool._id}
                    ></OurTools>)
                }
            </div>
        </div>
    );
};

export default Tools;