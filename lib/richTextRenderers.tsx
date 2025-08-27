// /lib/richTextRenderers.tsx

import React from 'react';
import { RichTextRendererComponent } from '@uniformdev/canvas-react';
import { ListNode, RichTextNode } from '@uniformdev/richtext';

// Custom renderer for ordered lists
export const MyOrderedListNode: RichTextRendererComponent<RichTextNode> = ({ children }) => {
  return <ol className="list-decimal">{children}</ol>;
};

// Custom renderer for unordered lists
export const MyUnorderedListNode: RichTextRendererComponent<RichTextNode> = ({ children }) => {
  return <ul className="list-disc">{children}</ul>;
};

// Custom renderer for list items
export const MyListItemNode: RichTextRendererComponent<RichTextNode> = ({ children }) => {
  return <li className="mb-2">{children}</li>;
};

// Resolve the custom renderers based on node type
export function resolveRichTextRenderer(node: RichTextNode): RichTextRendererComponent<RichTextNode> | undefined {
  if (node.type === 'list') {
    const listNode = node as ListNode;
    return listNode.tag === 'ol' ? MyOrderedListNode : MyUnorderedListNode;
  }
  if (node.type === 'listitem') {
    return MyListItemNode;
  }
  if (node.type === 'paragraph') {
    return ({ children }) => <p className="text-red">{children} </p>;
  }

  return undefined;
}
