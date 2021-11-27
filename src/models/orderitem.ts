import { Model, DataTypes, Sequelize } from 'sequelize';
import { IOrderItemAttributes } from '../types';

export class OrderItem
  extends Model<IOrderItemAttributes>
  implements IOrderItemAttributes
{
  order_item_id!: string;

  order_id!: string;

  item_id!: string;

  quantity!: number | null;

  static associate(/* models */) {
    // define association here
  }
}

export const OrderItemFactory = (sequelize: Sequelize): typeof OrderItem => {
  OrderItem.init(
    {
      order_item_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      order_id: { type: DataTypes.UUID, allowNull: false },
      item_id: { type: DataTypes.UUID, allowNull: false },
      quantity: DataTypes.INTEGER
    },
    {
      sequelize,
      underscored: true,
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      tableName: 'orders_items',
      modelName: 'OrderItem'
    }
  );

  return OrderItem;
};
