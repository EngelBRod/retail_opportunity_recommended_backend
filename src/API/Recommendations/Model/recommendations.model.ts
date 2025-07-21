import Inventory from '../../../DB/Inventory';
import Consumption_History from '../../../DB/Consumption_History';
import Product from '../../../DB/Product';

export const queryGetProductsByStore = (store_id) => {

    //get all inventory placement & items for given store
    const product_store = Inventory.filter(
        (value) => value.store_id === store_id
    );

    //group placements by product
    const products = Object.groupBy(product_store, (value) => value.product_id);

    // creates placement recommendation score by product
    const history = Object.entries(products).map(([key, value]) => {
        const product_name = productName(key);
        const score_avg = scoreAverageCalculator(key, value[0].store_id);
        const rejection_rate = rejectionsCalculator(key, value[0].store_id);
        const daily_sales_avg = dailySalesAverage(value);
        const all_stores_sales_average = allStoresDailySalesAverage(key);
        const daily_sales_performance =
            daily_sales_avg / all_stores_sales_average;

        const rejection_score = (1 - rejection_rate) * 5;
        const daily_sales_score = daily_sales_performance * 5;
        const recommended_score =
            score_avg + rejection_score + daily_sales_score;

        return {
            product_name,
            score_avg,
            rejection_rate,
            daily_sales_avg,
            daily_sales_performance,
            recommended_score,
        };
    });

    history.sort((a, b) => b.recommended_score - a.recommended_score);

    if (history.length) {
        return {
            message: 'success',
            data: history,
        };
    } else {
        return {
            message: 'no data',
            data: history,
        };
    }

};

//calculates score average by product & by store
const scoreAverageCalculator = (product_id, store_id) => {
    const products = Consumption_History.filter(
        (product) =>
            product.product_id === product_id &&
            product.performed_action === 'Consumed' &&
            store_id === product.store_id
    );

    const total = products.length;

    const sum = products.reduce(
        (accumulator, currentValue) => accumulator + currentValue.score,
        0
    );

    const avg = sum / total;
    return avg;
};

//get product name
const productName = (product_id) => {
    const result = Product.filter((product) => product.id === product_id);

    return result[0].name;
};


//calculates rejection rate by product & by store
const rejectionsCalculator = (product_id, store_id) => {
    const rejected_products = Consumption_History.filter(
        (product) =>
            product.product_id === product_id &&
            product.performed_action === 'Rejected' &&
            store_id === product.store_id
    );
    const rejection_sum = rejected_products.reduce(
        (accumulator, currentValue) => accumulator + currentValue.qty,
        0
    );
    const all_products = Consumption_History.filter(
        (product) =>
            product.product_id === product_id && store_id === product.store_id
    );
    const all_products_sum = all_products.reduce(
        (accumulator, currentValue) => accumulator + currentValue.qty,
        0
    );

    const rejections_rate = rejection_sum / all_products_sum;
    return rejections_rate;
};

//calculates sales' daily average ( taking into consideration the time a product has in the store  (placement date - current or final date))
const dailySalesAverage = (placements) => {
    placements.sort((a, b) => b.placement_date - a.placement_date);

    const average = placements.map((value) => {
        //if item left use difference between current date and placement date
        if (value.qty_left !== 0) {
            return (
                (value.qty_placed - value.qty_left) /
                dateDifference(new Date(), value.placement_date)
            );
        //if  no items left use the difference between latest sales date and placement date
        } else {
            const latest_date = latestSale(value.placement_batch);
            return (
                value.qty_placed /
                dateDifference(latest_date, value.placement_date)
            );
        }
    });

    const sum = average.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
    const result = sum / average.length;
    return result;
};

// calculate sales' daily average by product, considering all stores
const allStoresDailySalesAverage = (product_id) => {
    const all_placements = Inventory.filter(
        (placement) => placement.product_id === product_id
    );

    const all_sales_average = dailySalesAverage(all_placements);

    return all_sales_average;
};

//calculate difference in days between two dates
const dateDifference = (date1: Date, date2: Date) => {
    const utc_new_date = date1.getTime();
    const utc_old_date = date2.getTime();

    const diff_milliseconds = Math.abs(utc_new_date - utc_old_date);

    const one_day_milliseconds = 1000 * 60 * 60 * 24;

    const diff_days = Math.round(diff_milliseconds / one_day_milliseconds);

    return diff_days;
};

// get the latest sales date for a given product
const latestSale = (placement_id) => {
    const sales = Consumption_History.filter(
        (value) =>
            value.placement_id === placement_id &&
            value.performed_action === 'Consumed'
    );

    sales.sort((a, b) => b.consumption_date - a.consumption_date);
    return sales[0].consumption_date;
};