type STORE_TYPE = Array<{
    id: string;
    region_id: string;
    name: string;
}>;

const STORE: STORE_TYPE = [
    {
        id: 'A',
        region_id: 'A',
        name: 'Real Clothing',
    },
    {
        id: 'B',
        region_id: 'F',
        name: 'JT Penny',
    },
    {
        id: 'C',
        region_id: 'B',
        name: 'Dacy',
    },
    {
        id: 'D',
        region_id: 'C',
        name: 'H&N',
    },
    {
        id: 'E',
        region_id: 'D',
        name: 'Feet Lockers',
    },
]; 


export default STORE;