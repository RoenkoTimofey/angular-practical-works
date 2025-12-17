export interface Item {
  id: number;
  name: string;
  category: string;
  description: string;
}

export const ITEMS: Item[] = [
  { id: 1, name: 'Ноутбук', category: 'Техніка', description: 'Потужний ноутбук для роботи' },
  { id: 2, name: 'Смартфон', category: 'Техніка', description: 'Сучасний смартфон з камерою' },
  { id: 3, name: 'Стіл', category: 'Меблі', description: 'Офісний стіл з ящиками' },
  { id: 4, name: 'Крісло', category: 'Меблі', description: 'Ергономічне крісло для роботи' },
  { id: 5, name: 'Монітор', category: 'Техніка', description: 'Великий монітор 27 дюймів' },
  { id: 6, name: 'Клавіатура', category: 'Техніка', description: 'Механічна клавіатура' },
  { id: 7, name: 'Миша', category: 'Техніка', description: 'Бездротова миша' },
  { id: 8, name: 'Шафа', category: 'Меблі', description: 'Велика шафа для одягу' },
];

