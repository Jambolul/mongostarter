import { NextFunction, Request, Response } from "express";
import { MessageResponse } from "../../types/Messages";
import { Species } from "../../types/Species";
import speciesModel from "../models/speciesModel";
import CustomError from "../../classes/CustomError";

type DBMessageResponse = MessageResponse & {
  data: Species | Species[];
}

const postSpecies = async (
  req: Request<{}, {}, Species>,
  res: Response<DBMessageResponse>,
  next: NextFunction
) => {
  try {
    const newSpecies = new speciesModel(req.body);
    const savedSpecies = await newSpecies.save();
    res.json({
      message: "Species created",
      data: savedSpecies,
    });

  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

const getSpecies = async (
  _req: Request,
  res: Response<Species[]>,
  next: NextFunction
) => {
  try {
    const species = await speciesModel.find();
    res.json(species);
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

const getOneSpecies = async (
  req: Request<{ id: string }>,
  res: Response<Species>,
  next: NextFunction
) => {
  try {
    const species = await speciesModel.findById(req.params.id);
    if (!species) {
      throw new CustomError("Species not found", 404);
    }
    res.json(species);
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
}

const putSpecies = async (
  req: Request<{ id: string }, {}, Species>,
  res: Response<DBMessageResponse>,
  next: NextFunction
) => {
  try {
    const species = await speciesModel.findByIdAndUpdate(req
      .params.id, req.body, { new: true });
    if (!species) {
      throw new CustomError("Species not found", 404);
    }
    res.json({
      message: "Species updated",
      data: species,
    });
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
}


const deleteSpecies = async (
  req: Request<{ id: string }>,
  res: Response<DBMessageResponse>,
  next: NextFunction
) => {
  try {
    const species = await speciesModel.findByIdAndDelete(req.params.id);
    if (!species) {
      throw new CustomError("Species not found", 404);
    }
    res.json({
      message: "Species deleted",
      data: species,
    });
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
}

export { postSpecies, getSpecies, getOneSpecies, putSpecies, deleteSpecies };
