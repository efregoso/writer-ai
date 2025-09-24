'use client'

import {useState} from 'react';
import './main_text_editor.css';

export default function MainTextArea() {
    const [ text, setText ] = useState('');

    return (
        <div className="main-text-editor-container">
            <textarea className="main-text-editor"
                      value={text} 
                      onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
}