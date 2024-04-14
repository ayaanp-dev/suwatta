import { env } from "@/env";

import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { count, sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";


const client = createClient({ url: env.DATABASE_URL, authToken: env.DATABASE_TOKEN });
const db = drizzle(client);

const users = sqliteTable('users', {
    id: integer('id'),
    email: text('email')
  });
const points = sqliteTable('points', {
    id: integer('id'),
    email: text('email'),
    points: integer('points')
  });
const xp = sqliteTable('xp', {
    id: integer('id'),
    email: text('email'),
    xp: integer('xp')
})

export default async function add_user(userEmail : string) {
    const totalUserCount = Number(await db.select({ count: sql<number>`count(*)` }).from(users));
    await db.insert(users).values({ id: totalUserCount+1, email: userEmail });
    await db.insert(points).values({ id: totalUserCount+1, email: userEmail, points: 0 });
    await db.insert(xp).values({ id: totalUserCount+1, email: userEmail, xp: 0 });
}