import type { Request, Response } from "express";
import { queryGetProductsByStore } from "../Model/recommendations.model";


export const getAllRecommendations = (req: Request, res: Response) => {
    const store_id = req.params.id;
    queryGetProductsByStore(store_id);
    return res.status(200).json({ message: store_id });
};