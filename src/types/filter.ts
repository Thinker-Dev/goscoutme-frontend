export type FilterTypes = {
  title: {
    singular: string;
    plural?: string;
  };
  filters: {
    value: {
      id: string;
      value: string;
    }[];
  }[];
};
