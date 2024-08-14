// /lib/richTextRenderers.tsx

import React from 'react';
import { RichTextRendererComponent } from '@uniformdev/canvas-react';
import { RichTextNode } from '@uniformdev/richtext';

// Custom renderer for ordered lists
export const MyOrderedListNode: RichTextRendererComponent<RichTextNode> = ({ children }) => {
  return <ol className="list-decimal">{children}</ol>;
};

// Custom renderer for list items
export const MyListItemNode: RichTextRendererComponent<RichTextNode> = ({ children }) => {
  return <li className="mb-2">{children}</li>;
};

// Resolve the custom renderers based on node type
export function resolveRichTextRenderer(node: RichTextNode): RichTextRendererComponent<RichTextNode> | undefined {
  if (node.type === 'list') {
    return MyOrderedListNode;
  }
  if (node.type === 'listitem') {
    return MyListItemNode;
  }
  if (node.type === 'paragraph') {
    return ({ children }) => <p className="text-red">{children} </p>;
  }

  return undefined;
}
