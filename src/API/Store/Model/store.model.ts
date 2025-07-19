import Store from '../../../DB/Store';
import REGION from '../../../DB/Region';

export const queryGetAllStores = (place: string) => {

    const selected_region = REGION.filter((value) => value.city.toLowerCase() === place.toLowerCase() || value.state.toLowerCase() === place.toLowerCase() || value.zipcode === place);
    const selected_region_ids = selected_region.map((value) => value.id);
    let stores_list = [];
    if (selected_region.length) {
        stores_list = Store.filter(
            (value) => selected_region_ids.includes(value.region_id)
        );
        return {
            message: 'success',
            data: stores_list
        };
    } else {
        return {
            message: 'no data',
            data: stores_list
        };
    }    

};
