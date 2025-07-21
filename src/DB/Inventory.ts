type INVENTORY = Array<
    {
        placement_batch: string;
        product_id: string;
        store_id: string;
        placement_date: Date;
        qty_placed: number;
        qty_left: number;
        measurement_unit: string;
        // consumption_history: [];
        // score: number;
        // worker_id: string;
        // product_performance: { consumption_date: string; comment: string; score: number };
    }
>;

const INVENTORY: INVENTORY = [
    {
        placement_batch: 'A',
        product_id: 'B',
        store_id: 'A',
        placement_date: new Date('7/19/2025'),
        qty_placed: 100,
        qty_left: 99,
        measurement_unit: 'units',
    },
    {
        placement_batch: 'B',
        product_id: 'A',
        store_id: 'E',
        placement_date: new Date('7/19/2025'),
        qty_placed: 100,
        qty_left: 94,
        measurement_unit: 'units',
    },
    {
        placement_batch: 'C',
        product_id: 'B',
        store_id: 'A',
        placement_date: new Date('6/19/2025'),
        qty_placed: 100,
        qty_left: 0,
        measurement_unit: 'units',
    },
    {
        placement_batch: 'CC',
        product_id: 'A',
        store_id: 'A',
        placement_date: new Date('6/19/2025'),
        qty_placed: 100,
        qty_left: 0,
        measurement_unit: 'units',
    },
    {
        placement_batch: 'CC2',
        product_id: 'A',
        store_id: 'B',
        placement_date: new Date('6/19/2025'),
        qty_placed: 200,
        qty_left: 0,
        measurement_unit: 'units',
    },

    {
        placement_batch: 'D',
        product_id: 'B',
        store_id: 'A',
        placement_date: new Date('6/21/2025'),
        qty_placed: 100,
        qty_left: 50,
        measurement_unit: 'units',
    },
];


export default INVENTORY;