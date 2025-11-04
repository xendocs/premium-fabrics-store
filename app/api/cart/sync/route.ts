import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const cart = await request.json();
    // TODO: Sync cart with server/database
    // For now, just return the cart as-is
    return NextResponse.json(cart);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to sync cart' }, { status: 500 });
  }
}

