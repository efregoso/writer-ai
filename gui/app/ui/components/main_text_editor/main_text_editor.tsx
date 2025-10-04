'use client'

import { useEffect, useRef } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Blockquote } from "@tiptap/extension-blockquote";
import { Bold } from "@tiptap/extension-bold";
import { BulletList } from "@tiptap/extension-bullet-list";
import { Code } from "@tiptap/extension-code";
import { CodeBlock } from "@tiptap/extension-code-block";
import { Document } from "@tiptap/extension-document";
import { Dropcursor } from "@tiptap/extension-dropcursor";
import { Gapcursor } from "@tiptap/extension-gapcursor";
import { HardBreak } from "@tiptap/extension-hard-break";
import { History } from "@tiptap/extension-history";
import { Italic } from "@tiptap/extension-italic";
import { Link } from "@tiptap/extension-link";
import { ListItem } from "@tiptap/extension-list-item";
import { OrderedList } from "@tiptap/extension-ordered-list";
import { Paragraph } from "@tiptap/extension-paragraph";
import { Placeholder } from "@tiptap/extension-placeholder";
import { Strike } from "@tiptap/extension-strike";
import { Subscript } from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import { TableRow } from "@tiptap/extension-table-row";
import { TaskItem } from "@tiptap/extension-task-item";
import { TaskList } from "@tiptap/extension-task-list";
import { Text } from "@tiptap/extension-text";
import {
    HeadingWithAnchor,
    LinkBubbleMenuHandler,
    MenuButtonAddTable,
    MenuButtonBlockquote,
    MenuButtonBold,
    MenuButtonBulletedList,
    MenuButtonCode,
    MenuButtonCodeBlock,
    MenuButtonEditLink,
    MenuButtonItalic,
    MenuButtonOrderedList,
    MenuButtonRemoveFormatting,
    MenuButtonStrikethrough,
    MenuButtonSubscript,
    MenuButtonSuperscript,
    MenuButtonTaskList,
    MenuControlsContainer,
    MenuDivider,
    MenuSelectHeading,
    ResizableImage,
    RichTextEditor,
    TableImproved,
    type RichTextEditorRef,
} from "mui-tiptap";

import { 
    MAIN_TEXT_EDITOR_CONTAINER_ID,
    MAIN_TEXT_EDITOR_ID,
} from '../utils/constants';
import './main_text_editor.css';

export default function MainTextEditor({}) {
    const rteRef = useRef<RichTextEditorRef>(null);

    const extensions = [
        // Tiptap dev note: the Table extension must come before other nodes.
        TableImproved.configure({
            resizable: true,
        }),
        TableRow,
        TableHeader,
        TableCell,
        BulletList,
        Button,
        Box,
        CodeBlock,
        Divider,
        Document,
        HardBreak,
        Link,
        ListItem,
        OrderedList,
        Paragraph,
        Text,
        // Tiptap dev note: Blockquote must come after Bold, since we want the "Cmd+B" shortcut to
        // have lower precedence than the Blockquote "Cmd+Shift+B" shortcut. See
        // README
        Bold,
        Blockquote,
        Code,
        Italic,
        Strike,
        Subscript,
        Superscript,
        LinkBubbleMenuHandler,
        // Extensions
        Gapcursor,
        HeadingWithAnchor.configure({
            // Tiptap dev note: People shouldn't typically need more than 3 levels of 
            // headings, so keep a more minimal set (than the default 6) to keep things
            // simpler and less chaotic.
            levels: [1, 2, 3],
        }),
        ResizableImage,
        // Tiptap dev note: When images are dragged, we want to show the "drop cursor" 
        // for where they'll land
        Dropcursor,
        TaskList,
        TaskItem.configure({
            nested: true,
        }),
        Placeholder.configure({
            placeholder: "Add your own content here...",
        }),
        // Tiptap dev note: We use the regular `History` (undo/redo) extension when 
        // not using collaborative editing
        History,
    ];

    useEffect(() => {
        // DEBUG
        console.log(rteRef.current);
    });

    return (
        <div className={MAIN_TEXT_EDITOR_CONTAINER_ID}>
            <RichTextEditor
                className={MAIN_TEXT_EDITOR_ID}
                immediatelyRender={false}
                ref={rteRef}
                extensions={extensions}
                content={"<p>Welcome to Writer.AI!  Start typing here</p>"}
                renderControls={() => (
                <MenuControlsContainer>
                    <MenuSelectHeading />

                    <MenuDivider />

                    <MenuButtonBold />
                    <MenuButtonItalic />
                    <MenuButtonStrikethrough />
                    <MenuButtonSubscript />
                    <MenuButtonSuperscript />

                    <MenuDivider />

                    <MenuButtonEditLink />

                    <MenuDivider />

                    <MenuButtonOrderedList />
                    <MenuButtonBulletedList />
                    <MenuButtonTaskList />

                    <MenuDivider />

                    <MenuButtonBlockquote />

                    <MenuDivider />

                    <MenuButtonCode />

                    <MenuButtonCodeBlock />

                    <MenuDivider />

                    <MenuButtonAddTable />

                    <MenuDivider />

                    <MenuButtonRemoveFormatting />
                </MenuControlsContainer>
            )}
        />
        </div>
    );
}