// src/app/api/shipengine/route.ts
import { NextResponse } from 'next/server';
import ShipEngine from 'shipengine';

// Initialize ShipEngine with your API key
const shipengine = new ShipEngine({
  apiKey: process.env.SHIPENGINE_API_KEY as string,
});

export async function POST(req: Request) {
  try {
    const { origin, destination, weight, dimensions, carrierCode } = await req.json();

    // Call ShipEngine to calculate shipping rates
    const rateResponse = await shipengine.rates.getRates({
      from: {
        name: 'Origin Address',
        address_line1: origin.addressLine1,
        city_locality: origin.city,
        state_province: origin.state,
        postal_code: origin.zip,
        country_code: origin.country,
      },
      to: {
        name: 'Destination Address',
        address_line1: destination.addressLine1,
        city_locality: destination.city,
        state_province: destination.state,
        postal_code: destination.zip,
        country_code: destination.country,
      },
      parcel: {
        weight: {
          value: weight.value, // Weight value in the smallest unit (e.g., ounces or grams)
          unit: weight.unit,   // Unit of weight (e.g., "lbs" or "kg")
        },
        dimensions: {
          length: dimensions.length, // Length of the parcel
          width: dimensions.width,   // Width of the parcel
          height: dimensions.height, // Height of the parcel
          unit: 'inches',            // Unit for dimensions (e.g., inches or cm)
        },
      },
      carrier_ids: [carrierCode], // Optional: Filter by a specific carrier (e.g., FedEx, UPS)
    });

    // Return the shipping rates
    return NextResponse.json(rateResponse, { status: 200 });
  } catch (error) {
    console.error('Error getting shipping rates:', error);
    return NextResponse.json(
      { error: 'Failed to fetch shipping rates' },
      { status: 500 }
    );
  }
}