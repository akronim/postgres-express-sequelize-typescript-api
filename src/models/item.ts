import { Model, DataTypes, Sequelize } from 'sequelize';
import { IItemAttributes } from '../types';

export class Item extends Model<IItemAttributes> implements IItemAttributes {
  item_id!: string;

  name!: string | null;

  unit_price!: number;

  static associate(models: any): void {
    Item.belongsToMany(models.Order, {
      foreignKey: 'item_id', // source (this) model key
      as: 'orders',
      through: 'OrderItem'
    });
  }
}

export const ItemFactory = (sequelize: Sequelize): typeof Item => {
  Item.init(
    {
      item_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: DataTypes.STRING,
      unit_price: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: false
      }
    },
    {
      sequelize,
      underscored: true,
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      tableName: 'items',
      modelName: 'Item'
    }
  );

  return Item;
};
