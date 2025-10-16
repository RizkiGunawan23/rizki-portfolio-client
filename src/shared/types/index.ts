export type ChildrenNode = {
  children: React.ReactNode;
};

export type ApiResponse<T> = {
  message: string;
  data: T;
};
