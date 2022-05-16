export interface IData {
  categories: ICategory[];
  emojis: IEmoji[];
}

export interface ICategory {
  id: number;
  name: string;
  emoji: string;
  selected?: boolean;
  emojis?: IEmoji[];
}

export interface IEmoji {
  id: number;
  name: string;
  emoji: string;
  keywords: string[];
  categoryId: number;
  isSupported?: boolean;
}

export interface IEmojiPickerOptions {
  btnIcon?: string;
  searchIcon?: string;
  customClass?: string;
  emojisPerRow?: number;
  emojiPickerPosition?: string;
  showEmojiPicker?: boolean;
  searchValue?: string;
  defaultCatalogId?: number;
}

export interface ISelectedCategory {
  category: ICategory;
  emojis: IEmoji[];
}
