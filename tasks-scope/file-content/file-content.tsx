import React, { ReactNode } from 'react';
import { ComponentID } from '@teambit/component';
import { useFileContent } from '@teambit/code.ui.queries.get-file-content';

export type FileContentProps = {
  /**
   * a node to be rendered in the special component.
   */
  fileName?: string;
  /**
   * id of component to render file content of
   */
  componentId: ComponentID
};

export function FileContent({ fileName, componentId }: FileContentProps) {
  const { fileContent, loading } = useFileContent(componentId, fileName);

  return (
    <div style={{ paddingBottom: 15 }} key={fileName}>
      <div>File: {fileName}</div>
      <div>content: {loading ? 'loading content...' : fileContent}</div>
    </div>
  );
}
