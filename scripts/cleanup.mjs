import dotenv from 'dotenv';
dotenv.config({ path: './.env.local' }); // Explicitly load the file

// Import the Sanity client to interact with the Sanity backend
import { createClient } from "@sanity/client";

// Load required environment variables
const {
  NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET,
  SANITY_API_TOKEN,
  SANITY_API_VERSION,
} = process.env;

if (!NEXT_PUBLIC_SANITY_PROJECT_ID || !SANITY_API_TOKEN) {
  console.error("❌ Missing required environment variables. Please check your .env.local file.");
  process.exit(1);
}

// Create a Sanity client instance to interact with the target Sanity dataset
const targetClient = createClient({
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: false,
  apiVersion: SANITY_API_VERSION || "2023-01-01",
  token: SANITY_API_TOKEN,
});

// Function to delete documents from Sanity by type
async function deleteDocumentsByType(documentType) {
  try {
    console.log(`🗑️ Fetching documents of type: ${documentType}...`);
    const documents = await targetClient.fetch(`*[_type == "${documentType}"]`);

    if (documents.length === 0) {
      console.log(`✅ No documents found for type: ${documentType}`);
      return;
    }

    console.log(`🔄 Found ${documents.length} documents. Deleting...`);

    for (const doc of documents) {
      await targetClient.delete(doc._id);
      console.log(`🗑️ Deleted document: ${doc._id} (${doc.title || "No Title"})`);
    }

    console.log(`✅ All documents of type "${documentType}" deleted successfully.`);
  } catch (error) {
    console.error(`❌ Error deleting documents of type "${documentType}":`, error.message);
  }
}

// Main function to clean up menuItem data
async function cleanupData() {
  console.log("🚀 Starting data cleanup...");

  try {
    await deleteDocumentsByType("chef");
    console.log("🎉 menuItem data cleanup completed successfully!");
  } catch (error) {
    console.error("❌ Error during cleanup:", error.message);
    process.exit(1);
  }
}

// Start the cleanup process
cleanupData();
