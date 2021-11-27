import { Model, DataTypes, Sequelize } from 'sequelize';
import { IOrderAttributes } from '../types';

export class Order extends Model<IOrderAttributes> implements IOrderAttributes {
  order_id!: string;

  user_id!: string;

  order_date!: Date;

  total_price!: number;

  static associate(models: any): void {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });
    this.belongsToMany(models.Item, {
      foreignKey: 'order_id', // source (this) model key
      as: 'items',
      through: 'OrderItem'
    });
  }
}

export const OrderFactory = (sequelize: Sequelize): typeof Order => {
  Order.init(
    {
      order_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      order_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      total_price: {
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
      tableName: 'orders',
      modelName: 'Order'
    }
  );
  return Order;
};
