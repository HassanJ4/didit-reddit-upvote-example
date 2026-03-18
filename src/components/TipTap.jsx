'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function Tiptap({ value, onChange }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value || '',
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getText());
    }
  })

  return (
    <div className="border rounded p-2 bg-white text-black">
      <EditorContent editor={editor} />
    </div>
  )
}