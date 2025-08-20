import { Request, Response } from 'express';
import { UserModel, User } from '../models/user.model';

export class UserController {
    static async createUser(req: Request, res: Response) {
        try {
            const user: User = req.body;
            const newUser = await UserModel.createUser(user);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: 'Error creating user', error });
        }
    }

    static async getAllUsers(req: Request, res: Response) {
        try {
            const users = await UserModel.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching users', error });
        }
    }

    static async getUserById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const user = await UserModel.getUserById(id);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error fetching user', error });
        }
    }

    static async updateUser(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const userData: Partial<User> = req.body;
            const success = await UserModel.updateUser(id, userData);
            if (success) {
                res.json({ message: 'User updated successfully' });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating user', error });
        }
    }

    static async deleteUser(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const success = await UserModel.deleteUser(id);
            if (success) {
                res.json({ message: 'User deleted successfully' });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting user', error });
        }
    }
}
