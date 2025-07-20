import type { Request, Response } from "express";
import { queryGetProductsByStore } from "../Model/recommendations.model";


export const getAllRecommendations = (req: Request, res: Response) => {
    try {
        const store_id = req.params.id;
        const recommendations = queryGetProductsByStore(store_id);
        return res.status(200).json(recommendations);
    } catch (error) {
        res.status(400).json({ message: error, data: [] });
    }

};