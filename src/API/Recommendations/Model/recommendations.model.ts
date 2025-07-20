import Inventory from '../../../DB/Inventory';
import Consumption_History from '../../../DB/Consumption_History';

export const queryGetProductsByStore = (store_id) => {
    const product_store = Inventory.filter((value) => value.store_id === store_id);

    const products = Object.groupBy(product_store, value => value.product_id);
    //console.log(products);

    // for (const [key,product] of Object.entries(products)){

    // }
    const history = Object.entries(products).map(([key, value]) =>
        
    {
        console.log(key);
        
        return {
            score_avg: scoreAverageCalculator(key,value[0].store_id),
            rejection_rate: rejectionsCalculator(key, value[0].store_id),
            daily_sales_avg:dailySalesAverage(value),
            
        }
            
        ;
    }
        
    
    );

    console.log(history);
};


const scoreAverageCalculator = (product_id,store_id) => {

    const products = Consumption_History.filter((product) => product.product_id === product_id && product.performed_action === 'Consumed'&& store_id=== product.store_id);
    
    const total = products.length;

    const sum = products.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0);
    
    const avg = sum / total;
    return avg;
};

const rejectionsCalculator = (product_id,store_id) => {


    const rejected_products = Consumption_History.filter(
        (product) =>
            product.product_id === product_id &&
            product.performed_action === 'Rejected' &&
            store_id === product.store_id
    );
    const rejection_sum = rejected_products.reduce((accumulator, currentValue) => accumulator + currentValue.qty, 0);
    const all_products = Consumption_History.filter(
        (product) =>
            product.product_id === product_id &&
            store_id === product.store_id
    );
    const all_products_sum = all_products.reduce(
        (accumulator, currentValue) => accumulator + currentValue.qty,
        0
    );
    // Consumption_History.forEach((value) => {
    //     if (value.product_id === product_id && value.store_id === store_id) {
    //         count++;
    //         if (value.performed_action === 'Rejected') {
    //             rejections++;
    //         }
    //     }
    // });

    const rejections_rate = rejection_sum / all_products_sum;
    return rejections_rate;
};

const dailySalesAverage = (placements) => {

    placements.sort((a, b) => b.placement_date - a.placement_date);

    const average = placements.map((value) => {
        if (value.qty_left !== 0) {
            return (
                (value.qty_placed - value.qty_left) /
                (dateDifference(new Date(), value.placement_date))
            );
        } else {
            return value.qty_placed / dateDifference(new Date(), value.placement_date);
        }
    });
   
    const sum = average.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const result = sum / average.length;
    return result;
};


const dateDifference = (date1: Date, date2: Date) => {
    
    const utc_new_date = date1.getTime();
    const utc_old_date = date2.getTime();

    const diff_milliseconds = Math.abs(utc_new_date - utc_old_date);

    const one_day_milliseconds = 1000 * 60 * 60 * 24;

    const diff_days = Math.round(diff_milliseconds / one_day_milliseconds);


    return diff_days;


};