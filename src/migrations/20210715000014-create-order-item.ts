import { QueryInterface, Sequelize, DataTypes } from 'sequelize';

export = {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.createTable('orders_items', {
      order_item_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      order_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'orders',
          key: 'order_id'
        },
        onDelete: 'CASCADE'
      },
      item_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'items',
          key: 'item_id'
        },
        onDelete: 'CASCADE'
      },
      quantity: {
        type: DataTypes.INTEGER
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.dropTable('orders_items');
  }
};
