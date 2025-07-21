import Store from '../../../DB/Store';
import REGION from '../../../DB/Region';
import { queryGetProductsByStore } from '../../Recommendations/Model/recommendations.model';

//get all stores
export const queryGetAllStores = (place: string) => {
    const selected_region = REGION.filter(
        (value) =>
            value.city.toLowerCase() === place.toLowerCase() ||
            value.state.toLowerCase() === place.toLowerCase() ||
            value.zipcode === place
    );
    const selected_region_ids = selected_region.map((value) => value.id);
    let stores_list = [];
    if (selected_region.length) {
        stores_list = Store.filter((value) =>
            selected_region_ids.includes(value.region_id)
        );

        const stores_list_os = stores_list.map((value) => {
            const products = queryGetProductsByStore(value.id);
            const product_sum = products.data.reduce(
                (accumulator, currValue) =>
                    accumulator + currValue.recommended_score,
                0
            );
            const region = getRegionInfo(value.region_id);
            //calculates the opportunity score based on all products' performance for a given store
            const opportunity_score = product_sum / products.data.length;
            return {
                id: value.id,
                region_id: value.region_id,
                region_city: region.city,
                region_state: region.state,
                region_zipcode: region.zipcode,
                name: value.name,
                opportunity_score,
            };
        });
        return {
            message: 'success',
            data: stores_list_os,
        };
    } else {
        return {
            message: 'no data',
            data: stores_list,
        };
    }
};
//get all regions info
const getRegionInfo = (region_id) => {
    const region_info = REGION.filter((value) => value.id === region_id);
    return region_info[0];
};
