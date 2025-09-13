'use client'

import {useState} from 'react';

export default function MainTextArea() {
    const [ text, setText ] = useState('');

    return (
        <div>
            <textarea value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
    );
}