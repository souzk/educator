import { Request, Response, NextFunction } from 'express';

import { educators } from 'controllers/educators';

class Treatment {
  public error(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;

    const index = educators.findIndex((educator) => educator.id === id);

    if (index === -1) {
      return response.status(404).json({ error: 'Educator not found' });
    }

    request.location = index;

    next();
  }
}

export default new Treatment();
