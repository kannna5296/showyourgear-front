export class Photo {
  src: string;
  width: number;
  height: number;

  constructor(src: string, width: number, height: number) {
    this.src = src;
    this.width = width;
    this.height = height;
  }
}
