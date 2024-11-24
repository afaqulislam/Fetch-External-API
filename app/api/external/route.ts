import { NextResponse } from "next/server";

// Define the external API URL
const EXTERNAL_API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function GET() {
    try {
        // Fetch data from the external API
        const response = await fetch(EXTERNAL_API_URL);

        // Check if the response is not okay
        if (!response.ok) {
            return NextResponse.json(
                { success: false, message: "Failed to fetch the data from the API" },
                { status: response.status }
            );
        }

        // Parse the response JSON
        const data = await response.json();

        // Return the fetched data
        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        // Handle errors during the fetch process
        return NextResponse.json({
            success: false,
            message: "An error occurred while fetching the data!",
            error: error.message, // Corrected typo
        });
    }
}
