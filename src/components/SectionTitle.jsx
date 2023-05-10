import React from 'react';
import './SectionTitle.scss'

function SectionTitle(props){
    return (
        <div className='sectionTitle'>
            <h1>{props.sectionName}</h1>
        </div>
    );
};

export default SectionTitle;