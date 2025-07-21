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
    {
        id: 'D',
        city: 'New York City',
        zipcode: '10002',
        state: 'New York',
    },
    {
        id: 'F',
        city: 'Rochester',
        zipcode: '14602',
        state: 'New York',
    },
];


export default REGION;