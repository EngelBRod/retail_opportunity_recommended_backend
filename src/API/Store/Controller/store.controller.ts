import type { Request, Response } from "express";
import { queryGetAllStores } from "../Model/store.model";


export const httpGetAllStores = (req: Request, res: Response) => {
  
    try {
        const { place } = req.query;
        const stores = queryGetAllStores(place);
        res.status(200).json(stores);
    } catch (error) {
        res.status(400).json({ message: error, data: [] });
    }  

};