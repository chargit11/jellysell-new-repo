import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function POST(request) {
  try {
    const { listings, orders, shop } = await request.json();
    const { db } = await connectToDatabase();
    
    if (listings?.results && listings.results.length > 0) {
      await db.collection('listings').insertMany(
        listings.results.map(item => ({
          ...item,
          platform: 'etsy',
          syncedAt: new Date()
        }))
      );
    }
    
    if (orders?.results && orders.results.length > 0) {
      await db.collection('orders').insertMany(
        orders.results.map(order => ({
          ...order,
          platform: 'etsy',
          syncedAt: new Date()
        }))
      );
    }
    
    if (shop?.results && shop.results.length > 0) {
      await db.collection('shops').updateOne(
        { shop_id: shop.results[0].shop_id },
        { $set: { ...shop.results[0], platform: 'etsy', syncedAt: new Date() } },
        { upsert: true }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Etsy data synced successfully',
      counts: {
        listings: listings?.results?.length || 0,
        orders: orders?.results?.length || 0
      }
    });
  } catch (error) {
    console.error('Etsy sync error:', error);
    return NextResponse.json(
      { error: 'Failed to sync Etsy data', details: error.message },
      { status: 500 }
    );
  }
}
