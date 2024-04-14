import type { NextApiRequest, NextApiResponse } from 'next'
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import get_secrets from '../get_secrets';
import add_user from '../db';
import { NextResponse } from "next/server";


type ResponseData = {
  valid: boolean,
  acc: string
}
 
export async function POST(req:any) {
    
  const body = await req;
  console.log(body);
  
  return NextResponse.json(body);
}

export async function GET(
  req: NextApiRequest
) {      return("cool");
}