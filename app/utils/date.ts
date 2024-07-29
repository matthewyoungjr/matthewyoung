type Prop = {
  date: number;
};

export const getYear: Prop = {
  date: new Date().getFullYear(),
};
