import 'react';
import MainTextArea from './ui/components/main_text_area/main_text_editor';
import Sidebar from './ui/components/sidebar/sidebar';

export default function Home() {
  return (
    <div>
      <Sidebar></Sidebar>
      <MainTextArea></MainTextArea>
    </div>
  );
}
