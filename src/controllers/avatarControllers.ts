import { Request, Response } from 'express';
import pool from '../database'; 

class avatarControllers {

    public async img(req: Request, res: Response){
        const avatars = await pool.query(`SELECT * FROM Avatars`);
        res.json(avatars);
    }

    public async imgByID(req: Request, res: Response){
        const avatar = await pool.query(`SELECT * FROM Avatars WHERE id = ${req.params.id}`);
        return res.json(avatar);
    }

    public async imgByUser(req: Request, res: Response){
        const avatar = await pool.query(`SELECT A.img FROM Users U INNER JOIN Avatars A ON U.avatar = A.id 
        WHERE U.userName = '${req.params.UserName}'`);
        return res.json(avatar);
    }    
}

export const AvatarController = new avatarControllers();