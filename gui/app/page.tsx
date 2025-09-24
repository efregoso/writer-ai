import 'react';
import './page.css';
import MainTextArea from './ui/components/main_text_area/main_text_editor';
import Sidebar from './ui/components/sidebar/sidebar';

export default function Home() {
  return (
    <div className="app-container">
      <div className="sidebar-area">
        <Sidebar></Sidebar>
      </div>
      <div className="main-text-editor-area">
        <MainTextArea></MainTextArea>
      </div>
    </div>
  );
}
