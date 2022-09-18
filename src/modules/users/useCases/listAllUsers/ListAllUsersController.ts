import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  private listAllUsersUseCase: ListAllUsersUseCase;

  constructor(listAllUsersUseCase: ListAllUsersUseCase) {
    this.listAllUsersUseCase = listAllUsersUseCase;
  }

  handle(request: Request, response: Response): Response {
    // const { user_id } = request.headers.user_id.toString();
    const { user_id } = request.headers;

    try {
      const users = this.listAllUsersUseCase.execute({ user_id } as {
        user_id: string;
      });

      return response.status(200).json(users);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListAllUsersController };
