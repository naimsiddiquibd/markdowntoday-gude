import React from 'react';

const OutletLayout = ({title, headline, subtitle, img, description}) => {
    return (
        <div>
            <h5 className='font-bold text-base font-title'>{title}</h5>
            <h2 className='font-bold text-4xl mt-2'>{headline}</h2>
            <p className='font-normal text-lg font-title mt-2'>{subtitle}</p>
            <img src={img} alt="" />
            <p className='mt-2' dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
    );
};

export default OutletLayout;
