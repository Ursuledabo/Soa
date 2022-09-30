import dotenv from 'dotenv';

dotenv.config(); 

export const DB = process.env.DB!;

export const PORT =  parseInt(process.env.PORT!);

export const JWT_SECRET = process.env.JWT_SECRET!;