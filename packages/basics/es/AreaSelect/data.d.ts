declare const _default: (
  | {
      value: string;
      label: string;
      areaCode: string;
      type: string;
      municipality: boolean;
      children?: undefined;
    }
  | {
      children: (
        | {
            value: string;
            label: string;
            areaCode: string;
            type: string;
          }
        | {
            value: string;
            label: string;
            type: string;
            areaCode?: undefined;
          }
      )[];
      value: string;
      label: string;
      areaCode: string;
      type: string;
      municipality?: undefined;
    }
  | {
      label: string;
      value: string;
      areaCode?: undefined;
      type?: undefined;
      municipality?: undefined;
      children?: undefined;
    }
)[];
export default _default;
