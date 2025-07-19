type CONSUMPTION_HISTORY =Array< {
    id: string;
    consumption_date: Date;
    qty:number,
    comment:string ;
    score: number;
    placement_id: string;
    performed_action: 'Consumed' | 'Rejected'
}>;

const CONSUMPTION_HISTORY: CONSUMPTION_HISTORY = [{
    id: 'A',
    consumption_date: new Date('7-20-2025'),
    qty:2,
    comment: 'great product',
    score: 5,
    placement_id: 'B',
    performed_action: 'Consumed'
}];