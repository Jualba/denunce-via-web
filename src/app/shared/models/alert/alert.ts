export interface Alert {
  id: string,
  type: 'info' | 'success' | 'warning' | 'danger',
  text: string,
  title?: string
}
