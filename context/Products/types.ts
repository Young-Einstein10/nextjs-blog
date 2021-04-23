export interface IProductProps {
  id?: string;
  name?: string;
  category?: string;
  price?: number;
  currency?: string;
  image?: string | IPicture;
  bestseller?: boolean;
  featured?: boolean;
  details?: Partial<IDetailProps>;
  dimensions?: IDimensionProps;
}

export interface IProductStateProps {
  isLoading: boolean;
  data: IProductProps[];
}

interface IPicture {
  src: string;
  alt: string;
}

interface IDimensionProps {
  width: number;
  height: number;
}

interface IDetailProps {
  dimensions: IDimensionProps;
  size: number;
  description: string;
  recommendations: IPicture[];
}
