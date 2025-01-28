export interface IAbstractEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isBlocked?: boolean; // Добавьте это поле
}
