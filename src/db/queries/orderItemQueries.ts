export const seedOrdersItemsTableQuery = `
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('a4764905-9795-462c-92cd-222f2ee21ca6', '266b0d3e-c0b0-43fa-8b8b-f4228581ec98', 10, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('a0524347-ebef-4bce-95fb-a5ddf9739bf5', '70f7ffdd-0ce6-41af-a064-e05b8ba17cf5', 11, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('b2c127b0-6857-41f5-ba3e-ff9df458f90f', '88d0c7c1-edd7-449f-a78e-1f60fdff3c1f', 15, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('81b045d5-c42b-454e-8083-6e13d9018dd7', '44f2d7b9-df47-45db-ab86-163a14cf02e8', 4, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('b5e60db3-f4c0-4376-bdaf-6f387ed9b61b', '09086a69-dc8f-49bc-9797-5f728ab9ab8b', 8, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('f4186f93-3e51-4334-90ee-8873488f8068', '4cb644d3-39b4-431d-8388-4dce41fb03a1', 5, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('f4186f93-3e51-4334-90ee-8873488f8068', '09086a69-dc8f-49bc-9797-5f728ab9ab8b', 8, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('f4186f93-3e51-4334-90ee-8873488f8068', '5873b109-19ad-4314-b8a4-7f1cdc50edc5', 12, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('3c19c375-8648-414c-a34b-8cc8136b3b7c', '4b326335-4aa8-410f-afd3-946c3704e6b1', 3, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('ca3c1731-9c58-4469-821f-e199b29aee16', 'baa85e38-9362-4619-a1c1-319e32202ee9', 6, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('6fe41ff3-ea77-4bd8-9a70-39267d682c55', '09086a69-dc8f-49bc-9797-5f728ab9ab8b', 4, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('efb26213-c177-4d06-8b7d-207ffd993eb9', '39e42240-a91a-4386-8685-5378ec8fe8e2', 2, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('f7f37f7b-0696-444f-8877-45c6ebeb6021', '8827c6bc-fb80-4c35-b3ca-1072523ea42f', 9, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('6a4aa47e-f2e4-4838-a82c-f600f01aa220', 'c3f21362-b8d9-4b1d-8068-e5b6fa592fcc', 6, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('8583011f-d029-4e1d-8396-ddf2658aa459', '00a320bb-fa0b-415d-baf0-95d45d7503c0', 12, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('6a4aa47e-f2e4-4838-a82c-f600f01aa220', '044d8ec6-46c5-4fe5-894d-2e764e51e6a0', 14, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('3c19c375-8648-414c-a34b-8cc8136b3b7c', '6395be44-00a3-4c8e-b36d-0a580b6cac6b', 5, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('a0a09c82-5de0-494a-bab7-df1808fa8123', '7267b850-3661-4cee-8772-54c900af578e', 12, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('a0a09c82-5de0-494a-bab7-df1808fa8123', 'b4b0b092-35f5-44c3-88ed-df88b4fccf8d', 7, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('a0a09c82-5de0-494a-bab7-df1808fa8123', '418af8ec-734e-4597-ae83-05d50cbef255', 7, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('3c19c375-8648-414c-a34b-8cc8136b3b7c', '45088cba-51e3-4c49-99a2-d1ce0c7bae0f', 14, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('ca3c1731-9c58-4469-821f-e199b29aee16', '12f8ce55-795f-410d-815c-c5b45f74efb8', 12, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('b5e60db3-f4c0-4376-bdaf-6f387ed9b61b', 'ca19d1a3-ae56-4e52-8cbd-2f98da2d068e', 4, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('efb26213-c177-4d06-8b7d-207ffd993eb9', 'afcd4a25-e884-42bf-89f9-ea7f279f0b34', 10, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('fe5dc4b0-f3c4-4c0b-889d-4a8c6d965db4', '430a85de-07e4-465c-b101-3edfd8ec06bd', 6, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('a8522dd9-f178-42e3-b4d8-617736c4e966', 'baa85e38-9362-4619-a1c1-319e32202ee9', 15, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('efb26213-c177-4d06-8b7d-207ffd993eb9', '00a320bb-fa0b-415d-baf0-95d45d7503c0', 9, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('fe5dc4b0-f3c4-4c0b-889d-4a8c6d965db4', 'f6cb1da0-6ad1-4d6f-b052-a78286c12909', 15, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('bf05bc60-5b48-4d00-9916-f8688f2edbbf', '7e9b0bd1-b660-4c82-a58f-4c80c6ba6746', 7, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('ffff6ba5-0fb1-4d16-9542-eb5bbff746dc', '748a8c6e-87cc-4b8f-90d3-b4b077574d2c', 12, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('f4186f93-3e51-4334-90ee-8873488f8068', '82b5bd4e-29e7-4865-a91f-73f71db00a08', 5, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('a0a09c82-5de0-494a-bab7-df1808fa8123', 'a8aa2282-b3b8-4b53-af19-93632aa4b567', 2, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('c5305ace-9b87-404f-a513-49ed517e9469', '435c052b-8897-455c-9607-a64500f73f9c', 8, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('a0524347-ebef-4bce-95fb-a5ddf9739bf5', '7e9b0bd1-b660-4c82-a58f-4c80c6ba6746', 15, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('b5e60db3-f4c0-4376-bdaf-6f387ed9b61b', '31cbafd6-c634-414f-b5f6-0bc2555524b5', 8, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('6fe41ff3-ea77-4bd8-9a70-39267d682c55', '32e54293-8b03-4a4c-b273-da510f7dc14e', 3, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('bf05bc60-5b48-4d00-9916-f8688f2edbbf', 'd73a4bda-6738-478f-b9b4-0a068692c2f8', 2, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('bf05bc60-5b48-4d00-9916-f8688f2edbbf', '8cfc124b-904f-43c2-9ea6-ced306b9cd1c', 13, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('b2c127b0-6857-41f5-ba3e-ff9df458f90f', 'b4cf7fb6-81ab-47ab-9cd5-3196684d8268', 9, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('6e66fb0d-6596-4bfe-b2d9-1315acd80c7e', '4b326335-4aa8-410f-afd3-946c3704e6b1', 2, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('a0524347-ebef-4bce-95fb-a5ddf9739bf5', 'fd7fa4ce-6bef-492e-bd90-4a7c40011299', 8, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('fe5dc4b0-f3c4-4c0b-889d-4a8c6d965db4', '77abfff3-6252-418f-8b3d-fbc2d4da5a98', 7, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('6fe41ff3-ea77-4bd8-9a70-39267d682c55', '7136560e-2445-4c58-9927-3fbc2d608616', 11, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('8e36238b-8869-4786-8e92-507a00b7dd20', 'b3eb081d-7aeb-4cae-a7cb-da8a1464b3f0', 3, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('4ffab6d7-a7bd-4663-b512-c4ccf476895e', '9a6cd5bc-30ab-454e-8728-12c607ac9c69', 1, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('861a2ca7-c7cf-4b8f-8464-b30c8aaccdc1', 'c531f595-9aa7-4d40-9785-9ff1c20e6f36', 13, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('f7f37f7b-0696-444f-8877-45c6ebeb6021', '418af8ec-734e-4597-ae83-05d50cbef255', 6, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('fe5dc4b0-f3c4-4c0b-889d-4a8c6d965db4', '82b5bd4e-29e7-4865-a91f-73f71db00a08', 4, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('efb26213-c177-4d06-8b7d-207ffd993eb9', 'd73a4bda-6738-478f-b9b4-0a068692c2f8', 2, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('a0a09c82-5de0-494a-bab7-df1808fa8123', '25346bc0-99c2-42ed-9cfd-a79a2bd55ab2', 4, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('81d4fa05-b256-4a7e-a7e5-d1a75445ca7e', '5810f824-aeaf-4070-9845-3b80565abf5f', 7, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('a8522dd9-f178-42e3-b4d8-617736c4e966', '5ebb4d3f-46fa-4893-ac4b-882261d5154e', 2, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('6a4aa47e-f2e4-4838-a82c-f600f01aa220', 'f97dc5e4-9e3b-4d45-a8ae-5350bb99de56', 6, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('b2c127b0-6857-41f5-ba3e-ff9df458f90f', '09086a69-dc8f-49bc-9797-5f728ab9ab8b', 7, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('bf05bc60-5b48-4d00-9916-f8688f2edbbf', '1977e44e-2376-410b-9ea5-37db6aad57d7', 1, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('0f25d42f-505a-402d-bcaa-ace38a1e7cc1', 'fd7fa4ce-6bef-492e-bd90-4a7c40011299', 12, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('3c19c375-8648-414c-a34b-8cc8136b3b7c', 'e596640d-25a0-430b-9195-4d1574be7b51', 8, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('0f25d42f-505a-402d-bcaa-ace38a1e7cc1', '00a320bb-fa0b-415d-baf0-95d45d7503c0', 11, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('e5d591ff-9132-41a5-810a-f008ba2bb4e8', '136b1ec1-0e92-41c3-a7e9-0d6b1003c8cc', 3, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('155a5ca7-56b6-4162-82ac-3f0a0af24d4e', '4b2edc72-70ad-4c92-b89f-d2d77cd179b0', 13, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('8e36238b-8869-4786-8e92-507a00b7dd20', 'e596640d-25a0-430b-9195-4d1574be7b51', 6, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('6a4aa47e-f2e4-4838-a82c-f600f01aa220', '9a6cd5bc-30ab-454e-8728-12c607ac9c69', 11, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('e5d591ff-9132-41a5-810a-f008ba2bb4e8', 'b4b0b092-35f5-44c3-88ed-df88b4fccf8d', 3, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('f7f37f7b-0696-444f-8877-45c6ebeb6021', 'a6704624-d6b4-41ee-bbcf-4b83063621e9', 4, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('4ffab6d7-a7bd-4663-b512-c4ccf476895e', '28fdd942-7d83-4ac1-b097-b6cf3476961d', 5, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('fe5dc4b0-f3c4-4c0b-889d-4a8c6d965db4', '4194bfb0-3c48-48e1-84ca-b7eedc5f2f45', 4, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('b5e60db3-f4c0-4376-bdaf-6f387ed9b61b', 'ff6a3244-873e-4cde-b2ef-243705ddeeb0', 2, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('a0524347-ebef-4bce-95fb-a5ddf9739bf5', 'aaf43108-71fd-4034-a531-5848ab639e43', 8, NOW(), NOW() );
    insert into orders_items (order_id, item_id, quantity, created_at, updated_at) values ('861a2ca7-c7cf-4b8f-8464-b30c8aaccdc1', '33143f42-6d63-455e-8a5e-a73d41399385', 12, NOW(), NOW() );
    `;

export const dropOrdersItemsTableQuery = 'DROP TABLE IF EXISTS orders_items;';
