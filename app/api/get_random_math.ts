'use server'

import { promises as fs } from 'fs';

export default async function GetRandomMath() {
    const file = await fs.readFile(process.cwd() + '/app/api/math_questions.json', 'utf8');
    const data = JSON.parse(file);
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomObject = data[randomIndex];
    return randomObject;
}