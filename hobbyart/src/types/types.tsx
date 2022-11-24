export interface goodsElemType {
  category: string;
  name: string;
  brand: string;
  structure: string;
  popularity: boolean;
  weight: string;
  length: string;
  price: number;
  url: string;
}

export interface categoriesElemType {
  category: string;
  url: string;
}

export interface advantagesElemType {
  class: string;
  url: string;
  title: string;
  text: string;
}

export interface navElemType {
  text: string;
  link: string;
}

export interface mainSlidesArrayElemType {
  class: string;
  url: string;
  title: string;
  text: string;
}

export interface GoodsSliderElemType {
  // class: string;
  url: string;
  title: string;
  // text: string;
}
