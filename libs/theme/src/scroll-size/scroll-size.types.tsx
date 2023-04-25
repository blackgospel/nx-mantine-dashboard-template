import { UseResizeDetectorReturn } from 'react-resize-detector'

export interface IScrollSizeContextType {
  items: Record<string, UseResizeDetectorReturn<HTMLElement>>
  upsertItem: (id: string, item: UseResizeDetectorReturn<HTMLElement>) => void
}

export interface IScrollSizeProviderProps {
  children: React.ReactNode
  inherit?: boolean
  items?: IScrollSizeContextType['items']
}
