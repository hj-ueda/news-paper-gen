declare module '@mogamoga1024/vertical-text-canvas' {
  export function createAllVerticalTextCanvas(
    text: string,
    font: string,
    options?: Partial<CanvasRenderingContext2D>,
    maxHeight?: number
  ): HTMLCanvasElement
  export function measureVerticalTextCanvasSize(
    text: string,
    font: string,
    options?: Partial<CanvasRenderingContext2D>,
    maxHeight?: number
  ): { width: number; height: number }
}
