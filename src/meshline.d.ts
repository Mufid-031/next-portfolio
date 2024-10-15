declare module JSX {
  interface IntrinsicElements {
    meshLineGeometry: {
      attach?: string;
    };
    meshLineMaterial: {
      color?: string;
      depthTest?: boolean;
      resolution?: [number, number];
      useMap?: boolean;
      map?: THREE.Texture;
      repeat?: [number, number];
      lineWidth?: number;
    };
  }
}
