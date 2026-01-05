
export enum TagType {
  SKORO_START = 'Скоро старт',
  POPULARNA = 'Популярна',
  BEZ_KODINGU = 'Без кодингу'
}

export interface Course {
  id: number;
  tags: TagType[];
  subTitle: string;
  title: string;
}
