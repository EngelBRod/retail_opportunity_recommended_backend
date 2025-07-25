type CONSUMPTION_HISTORY_TYPE =Array< {
    id: string;
    consumption_date: Date;
    qty:number,
    comment:string ;
    score: number;
    placement_id: string;
    store_id: string;
    product_id:string;
    performed_action: 'Consumed' | 'Rejected'
}>;

const CONSUMPTION_HISTORY: CONSUMPTION_HISTORY_TYPE = [
    {
        id: 'A',
        consumption_date: new Date('7-20-2025'),
        qty: 2,
        comment: 'great product',
        score: 5,
        product_id: 'A',
        store_id: 'E',
        placement_id: 'B',
        performed_action: 'Consumed',
    },
    {
        id: 'B',
        consumption_date: new Date('7-21-2025'),
        qty: 2,
        comment: 'great product',
        score: 4,
        product_id: 'A',
        store_id: 'E',
        placement_id: 'B',
        performed_action: 'Consumed',
    },
    {
        id: 'C',
        consumption_date: new Date('7-22-2025'),
        qty: 2,
        comment: 'great product',
        score: 0,
        product_id: 'A',
        store_id: 'E',
        placement_id: 'B',
        performed_action: 'Rejected',
    },
    {
        id: 'D',
        consumption_date: new Date('6/20/2025'),
        qty: 10,
        comment: 'excellent',
        score: 4,
        product_id: 'B',
        store_id: 'A',
        placement_id: 'C',
        performed_action: 'Consumed',
    },
    {
        id: 'E',
        consumption_date: new Date('6/22/2025'),
        qty: 10,
        comment: 'very good',
        score: 3,
        product_id: 'B',
        store_id: 'A',
        placement_id: 'C',
        performed_action: 'Consumed',
    },
    {
        id: 'F',
        consumption_date: new Date('6/25/2025'),
        qty: 30,
        comment: 'very good',
        score: 5,
        product_id: 'B',
        store_id: 'A',
        placement_id: 'C',
        performed_action: 'Consumed',
    },
    {
        id: 'G',
        consumption_date: new Date('6/25/2025'),
        qty: 1,
        comment: 'damage',
        score: 0,
        product_id: 'B',
        store_id: 'A',
        placement_id: 'C',
        performed_action: 'Rejected',
    },
    {
        id: 'H',
        consumption_date: new Date('6/26/2025'),
        qty: 1,
        comment: 'damage',
        score: 0,
        product_id: 'B',
        store_id: 'A',
        placement_id: 'C',
        performed_action: 'Rejected',
    },
    {
        id: 'I',
        consumption_date: new Date('6/27/2025'),
        qty: 1,
        comment: 'damage',
        score: 0,
        product_id: 'B',
        store_id: 'A',
        placement_id: 'C',
        performed_action: 'Rejected',
    },
    {
        id: 'J',
        consumption_date: new Date('6/25/2025'),
        qty: 1,
        comment: 'damage',
        score: 0,
        product_id: 'B',
        store_id: 'A',
        placement_id: 'C',
        performed_action: 'Rejected',
    },
    {
        id: 'K',
        consumption_date: new Date('6/25/2025'),
        qty: 1,
        comment: 'damage',
        score: 0,
        product_id: 'B',
        store_id: 'A',
        placement_id: 'C',
        performed_action: 'Rejected',
    },
    {
        id: 'L',
        consumption_date: new Date('6/25/2025'),
        qty: 1,
        comment: 'damage',
        score: 0,
        product_id: 'B',
        store_id: 'A',
        placement_id: 'C',
        performed_action: 'Rejected',
    },
    {
        id: 'M',
        consumption_date: new Date('6/25/2025'),
        qty: 1,
        comment: 'damage',
        score: 0,
        product_id: 'B',
        store_id: 'A',
        placement_id: 'C',
        performed_action: 'Rejected',
    },
    {
        id: 'N',
        consumption_date: new Date('6/25/2025'),
        qty: 1,
        comment: 'damage',
        score: 0,
        product_id: 'B',
        store_id: 'A',
        placement_id: 'C',
        performed_action: 'Rejected',
    },
    {
        id: 'O',
        consumption_date: new Date('6/25/2025'),
        qty: 1,
        comment: 'damage',
        score: 0,
        product_id: 'B',
        store_id: 'A',
        placement_id: 'C',
        performed_action: 'Rejected',
    },

    {
        id: 'P',
        consumption_date: new Date('6/25/2025'),
        qty: 1,
        comment: 'damage',
        score: 0,
        product_id: 'B',
        store_id: 'A',
        placement_id: 'C',
        performed_action: 'Rejected',
    },
    {
        id: 'R',
        consumption_date: new Date('6/29/2025'),
        qty: 20,
        comment: 'good',
        score: 3,
        product_id: 'B',
        store_id: 'A',
        placement_id: 'C',
        performed_action: 'Consumed',
    },
    {
        id: 'S',
        consumption_date: new Date('6/30/2025'),
        qty: 20,
        comment: 'good',
        score: 4,
        product_id: 'B',
        store_id: 'A',
        placement_id: 'C',
        performed_action: 'Consumed',
    },

    {
        id: 'DD',
        consumption_date: new Date('6/20/2025'),
        qty: 5,
        comment: 'good',
        score: 3,
        product_id: 'A',
        store_id: 'A',
        placement_id: 'CC',
        performed_action: 'Consumed',
    },
    {
        id: 'DD2',
        consumption_date: new Date('6/21/2025'),
        qty: 5,
        comment: 'good',
        score: 3,
        product_id: 'A',
        store_id: 'A',
        placement_id: 'CC',
        performed_action: 'Consumed',
    },
    {
        id: 'EE',
        consumption_date: new Date('6/22/2025'),
        qty: 10,
        comment: 'very good',
        score: 3,
        product_id: 'A',
        store_id: 'A',
        placement_id: 'CC',
        performed_action: 'Consumed',
    },
    {
        id: 'FF',
        consumption_date: new Date('6/25/2025'),
        qty: 30,
        comment: 'very good',
        score: 5,
        product_id: 'A',
        store_id: 'A',
        placement_id: 'CC',
        performed_action: 'Consumed',
    },
    {
        id: 'GG',
        consumption_date: new Date('6/25/2025'),
        qty: 1,
        comment: 'damage',
        score: 0,
        product_id: 'A',
        store_id: 'A',
        placement_id: 'CC',
        performed_action: 'Rejected',
    },
    {
        id: 'HF',
        consumption_date: new Date('6/26/2025'),
        qty: 1,
        comment: 'damage',
        score: 0,
        product_id: 'A',
        store_id: 'A',
        placement_id: 'CC',
        performed_action: 'Rejected',
    },
    {
        id: 'II',
        consumption_date: new Date('6/27/2025'),
        qty: 1,
        comment: 'damage',
        score: 0,
        product_id: 'A',
        store_id: 'A',
        placement_id: 'CC',
        performed_action: 'Rejected',
    },
    {
        id: 'JJ',
        consumption_date: new Date('6/25/2025'),
        qty: 1,
        comment: 'damage',
        score: 0,
        product_id: 'A',
        store_id: 'A',
        placement_id: 'CC',
        performed_action: 'Rejected',
    },
    {
        id: 'KK',
        consumption_date: new Date('6/25/2025'),
        qty: 1,
        comment: 'damage',
        score: 0,
        product_id: 'A',
        store_id: 'A',
        placement_id: 'CC',
        performed_action: 'Rejected',
    },
    {
        id: 'LL',
        consumption_date: new Date('6/25/2025'),
        qty: 1,
        comment: 'damage',
        score: 0,
        product_id: 'A',
        store_id: 'A',
        placement_id: 'CC',
        performed_action: 'Rejected',
    },
    {
        id: 'MM',
        consumption_date: new Date('6/25/2025'),
        qty: 1,
        comment: 'damage',
        score: 0,
        product_id: 'A',
        store_id: 'A',
        placement_id: 'CC',
        performed_action: 'Rejected',
    },
    {
        id: 'NN',
        consumption_date: new Date('6/25/2025'),
        qty: 1,
        comment: 'damage',
        score: 0,
        product_id: 'A',
        store_id: 'A',
        placement_id: 'CC',
        performed_action: 'Rejected',
    },
    {
        id: 'OO',
        consumption_date: new Date('6/25/2025'),
        qty: 1,
        comment: 'damage',
        score: 0,
        product_id: 'A',
        store_id: 'A',
        placement_id: 'CC',
        performed_action: 'Rejected',
    },

    {
        id: 'PP',
        consumption_date: new Date('6/25/2025'),
        qty: 1,
        comment: 'damage',
        score: 0,
        product_id: 'A',
        store_id: 'A',
        placement_id: 'CC',
        performed_action: 'Rejected',
    },
    {
        id: 'RR',
        consumption_date: new Date('6/29/2025'),
        qty: 20,
        comment: 'good',
        score: 3,
        product_id: 'A',
        store_id: 'A',
        placement_id: 'CC',
        performed_action: 'Consumed',
    },
    {
        id: 'SS',
        consumption_date: new Date('6/30/2025'),
        qty: 20,
        comment: 'good',
        score: 4,
        product_id: 'A',
        store_id: 'A',
        placement_id: 'CC',
        performed_action: 'Consumed',
    },

    /*new*/

    {
        id: 'DD2',
        consumption_date: new Date('6/20/2025'),
        qty: 10,
        comment: 'good',
        score: 3,
        product_id: 'A',
        store_id: 'B',
        placement_id: 'CC2',
        performed_action: 'Consumed',
    },
    {
        id: 'DD3',
        consumption_date: new Date('6/21/2025'),
        qty: 10,
        comment: 'good',
        score: 3,
        product_id: 'A',
        store_id: 'B',
        placement_id: 'CC2',
        performed_action: 'Consumed',
    },
    {
        id: 'EE2',
        consumption_date: new Date('6/22/2025'),
        qty: 20,
        comment: 'very good',
        score: 3,
        product_id: 'A',
        store_id: 'B',
        placement_id: 'CC',
        performed_action: 'Consumed',
    },
    {
        id: 'FF2',
        consumption_date: new Date('6/25/2025'),
        qty: 60,
        comment: 'very good',
        score: 5,
        product_id: 'A',
        store_id: 'B',
        placement_id: 'CC2',
        performed_action: 'Consumed',
    },
    {
        id: 'GG2',
        consumption_date: new Date('6/25/2025'),
        qty: 2,
        comment: 'damage',
        score: 0,
        product_id: 'A',
        store_id: 'B',
        placement_id: 'CC2',
        performed_action: 'Rejected',
    },
    {
        id: 'HF2',
        consumption_date: new Date('6/26/2025'),
        qty: 2,
        comment: 'damage',
        score: 0,
        product_id: 'A',
        store_id: 'B',
        placement_id: 'CC2',
        performed_action: 'Rejected',
    },
    {
        id: 'II2',
        consumption_date: new Date('6/27/2025'),
        qty: 2,
        comment: 'damage',
        score: 0,
        product_id: 'A',
        store_id: 'B',
        placement_id: 'CC2',
        performed_action: 'Rejected',
    },
    {
        id: 'JJ2',
        consumption_date: new Date('6/25/2025'),
        qty: 2,
        comment: 'damage',
        score: 0,
        product_id: 'A',
        store_id: 'B',
        placement_id: 'CC2',
        performed_action: 'Rejected',
    },
    {
        id: 'KK2',
        consumption_date: new Date('6/25/2025'),
        qty: 2,
        comment: 'damage',
        score: 0,
        product_id: 'A',
        store_id: 'B',
        placement_id: 'CC2',
        performed_action: 'Rejected',
    },
    {
        id: 'LL2',
        consumption_date: new Date('6/25/2025'),
        qty: 2,
        comment: 'damage',
        score: 0,
        product_id: 'A',
        store_id: 'B',
        placement_id: 'CC2',
        performed_action: 'Rejected',
    },
    {
        id: 'MM2',
        consumption_date: new Date('6/25/2025'),
        qty: 2,
        comment: 'damage',
        score: 0,
        product_id: 'A',
        store_id: 'B',
        placement_id: 'CC2',
        performed_action: 'Rejected',
    },
    {
        id: 'NN2',
        consumption_date: new Date('6/25/2025'),
        qty: 2,
        comment: 'damage',
        score: 0,
        product_id: 'A',
        store_id: 'B',
        placement_id: 'CC2',
        performed_action: 'Rejected',
    },
    {
        id: 'OO2',
        consumption_date: new Date('6/25/2025'),
        qty: 2,
        comment: 'damage',
        score: 0,
        product_id: 'A',
        store_id: 'B',
        placement_id: 'CC2',
        performed_action: 'Rejected',
    },

    {
        id: 'PP2',
        consumption_date: new Date('6/25/2025'),
        qty: 2,
        comment: 'damage',
        score: 0,
        product_id: 'A',
        store_id: 'B',
        placement_id: 'CC2',
        performed_action: 'Rejected',
    },
    {
        id: 'RR2',
        consumption_date: new Date('6/29/2025'),
        qty: 40,
        comment: 'good',
        score: 3,
        product_id: 'A',
        store_id: 'B',
        placement_id: 'CC2',
        performed_action: 'Consumed',
    },
    {
        id: 'SS2',
        consumption_date: new Date('6/30/2025'),
        qty: 40,
        comment: 'good',
        score: 4,
        product_id: 'A',
        store_id: 'B',
        placement_id: 'CC2',
        performed_action: 'Consumed',
    },

    /*new*/
    {
        id: 'T',
        consumption_date: new Date('7/21/2025'),
        qty: 1,
        comment: 'good',
        score: 4,
        product_id: 'B',
        store_id: 'A',
        placement_id: 'A',
        performed_action: 'Consumed',
    },
    {
        id: 'U',
        consumption_date: new Date('7/01/2025'),
        qty: 10,
        comment: 'good',
        score: 4,
        product_id: 'B',
        store_id: 'A',
        placement_id: 'D',
        performed_action: 'Consumed',
    },
    {
        id: 'V',
        consumption_date: new Date('7/02/2025'),
        qty: 10,
        comment: 'good',
        score: 4,
        product_id: 'B',
        store_id: 'A',
        placement_id: 'D',
        performed_action: 'Consumed',
    },
    {
        id: 'W',
        consumption_date: new Date('7/02/2025'),
        qty: 10,
        comment: 'good',
        score: 4,
        product_id: 'B',
        store_id: 'A',
        placement_id: 'D',
        performed_action: 'Consumed',
    },
    {
        id: 'X',
        consumption_date: new Date('7/02/2025'),
        qty: 10,
        comment: 'good',
        score: 4,
        product_id: 'B',
        store_id: 'A',
        placement_id: 'D',
        performed_action: 'Consumed',
    },
    {
        id: 'Y',
        consumption_date: new Date('7/03/2025'),
        qty: 10,
        comment: 'good',
        score: 4,
        product_id: 'B',
        store_id: 'A',
        placement_id: 'D',
        performed_action: 'Consumed',
    },
];

export default CONSUMPTION_HISTORY;