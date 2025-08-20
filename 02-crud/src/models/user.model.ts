import pool from '../config/database';

export interface User {
    id?: number;
    name: string;
    email: string;
    password: string;
    created_at?: Date;
    updated_at?: Date;
}

export class UserModel {
    static async createUser(user: User): Promise<User> {
        const [result]: any = await pool.query(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [user.name, user.email, user.password]
        );
        return { ...user, id: result.insertId };
    }

    static async getAllUsers(): Promise<User[]> {
        const [rows] = await pool.query('SELECT * FROM users');
        return rows as User[];
    }

    static async getUserById(id: number): Promise<User | null> {
        const [rows]: any = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
        return rows[0] || null;
    }

    static async updateUser(id: number, user: Partial<User>): Promise<boolean> {
        const [result]: any = await pool.query(
            'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?',
            [user.name, user.email, user.password, id]
        );
        return result.affectedRows > 0;
    }

    static async deleteUser(id: number): Promise<boolean> {
        const [result]: any = await pool.query('DELETE FROM users WHERE id = ?', [id]);
        return result.affectedRows > 0;
    }
}
