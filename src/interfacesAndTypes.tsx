import { ReactElement } from 'react';

export interface Route {
  path: string, element: ReactElement, title: string, menuLabel: string
}

export type ResponseMethodNames =
  'arrayBuffer' | 'blob' | 'clone' | 'formData' | 'json' | 'text';