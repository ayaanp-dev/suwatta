import { promises as fs } from 'fs';

export default async function get_secrets() {
    const file = await fs.readFile(process.cwd() + '/app/api/secrets.json', 'utf8');
    const data = JSON.parse(file);

    return data;
}