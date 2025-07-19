type REGION_TYPE = Array<{
    id: string;
    city: string;
    zipcode: string;
    state: string;
}>

const REGION: REGION_TYPE = [
    {
        id: 'A',
        city: 'New York City',
        zipcode: '10034',
        state: 'New York',
    },
    {
        id: 'B',
        city: 'West New York',
        zipcode: '07093',
        state: 'New Jersey',
    },
    {
        id: 'C',
        city: 'Boston',
        zipcode: '02108',
        state: 'Massachusetts',
    },
];


export default REGION;