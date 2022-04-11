import { Request, Response, NextFunction } from "express";

import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";

const validationMw = (dtoClass: any) => {
  return function (req: Request, res: Response, next: NextFunction) {
    const output: any = plainToInstance(dtoClass, req.body);
    validate(output).then(errors => {
      if (errors.length > 0) {
        let errorTextsObjects = Array();
        for (const errorItem of errors) {
          errorTextsObjects = errorTextsObjects.concat(errorItem.constraints);
        }
        let errorTexts: any = errorTextsObjects.map(errorTextsObject => Object.values(errorTextsObject));
        res.status(400).json([].concat(...errorTexts));
        return;
      } else {
        res.locals.input = output;
        next();
      }
    });
  };
};

export { validationMw };