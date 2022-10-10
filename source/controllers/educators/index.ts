import { Request, Response } from 'express';
import Educator from 'models/educator';

export const educators: Array<Educator> = [];

class Handle {
  public educator = {
    all(request: Request, response: Response) {
      const { id } = request.params;

      const educator = educators.find((educator) => educator.id === id);

      educator
        ? response.status(200).json(educator)
        : response.status(200).json(educators);
    },

    create(request: Request, response: Response) {
      const { name, formation, course, matter } = request.body;

      const educator = new Educator(name, formation, course, matter);

      educators.push(educator);

      return response.status(201).json(educator);
    },

    change(request: Request, response: Response) {
      const { location } = request;
      const { course } = request.body;

      educators[location].course = course;

      return response.status(200).json(educators[location]);
    },

    update(request: Request, response: Response) {
      const { id } = request.params;
      const { location } = request;

      const educator = {
        ...request.body,
        id
      };

      educators[location] = educator;

      return response.status(200).json(educator);
    },

    delete(request: Request, response: Response) {
      const { location } = request;

      educators.splice(location, 1);

      return response.status(204).send();
    }
  };
}

export default new Handle();
