/**
 * Optimized Figma Sync Script
 * Handles large requests by breaking them into smaller chunks
 */

const MAX_REQUEST_SIZE = 10; // Giới hạn số nodes mỗi request
const RETRY_DELAY = 1000; // 1 second delay between retries
const MAX_RETRIES = 3;

/**
 * Sleep function for delays
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Batch process Figma nodes to avoid 413 errors
 */
async function batchProcessNodes(
  nodeIds,
  processFn,
  batchSize = MAX_REQUEST_SIZE
) {
  const results = [];

  for (let i = 0; i < nodeIds.length; i += batchSize) {
    const batch = nodeIds.slice(i, i + batchSize);
    console.log(
      `Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(
        nodeIds.length / batchSize
      )}`
    );

    try {
      const batchResults = await processBatchWithRetry(batch, processFn);
      results.push(...batchResults);

      // Delay between batches to avoid rate limiting
      if (i + batchSize < nodeIds.length) {
        await sleep(RETRY_DELAY);
      }
    } catch (error) {
      console.error(
        `Batch ${Math.floor(i / batchSize) + 1} failed:`,
        error.message
      );
      // Continue with next batch instead of failing completely
    }
  }

  return results;
}

/**
 * Process a batch with retry logic
 */
async function processBatchWithRetry(batch, processFn, retries = MAX_RETRIES) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await processFn(batch);
    } catch (error) {
      if (
        error.message.includes("413") ||
        error.message.includes("Request Entity Too Large")
      ) {
        console.log(
          `Attempt ${attempt} failed with 413 error. Reducing batch size...`
        );

        if (batch.length === 1) {
          console.error("Single node too large, skipping:", batch[0]);
          return [];
        }

        // Split batch in half and retry
        const halfSize = Math.floor(batch.length / 2);
        const firstHalf = batch.slice(0, halfSize);
        const secondHalf = batch.slice(halfSize);

        const firstResults = await processBatchWithRetry(
          firstHalf,
          processFn,
          retries - attempt + 1
        );
        const secondResults = await processBatchWithRetry(
          secondHalf,
          processFn,
          retries - attempt + 1
        );

        return [...firstResults, ...secondResults];
      }

      if (attempt === retries) {
        throw error;
      }

      console.log(`Attempt ${attempt} failed, retrying in ${RETRY_DELAY}ms...`);
      await sleep(RETRY_DELAY);
    }
  }
}

/**
 * Optimized function to get Figma code
 */
async function getFigmaCodeOptimized(nodeIds) {
  console.log(`Starting optimized Figma sync for ${nodeIds.length} nodes`);

  const processFn = async (batch) => {
    // Simulate MCP Figma call here
    // Replace with actual MCP call
    console.log(`Processing ${batch.length} nodes:`, batch);

    // For now, return mock data
    return batch.map((nodeId) => ({
      nodeId,
      code: `// Generated code for node ${nodeId}`,
      status: "success",
    }));
  };

  return await batchProcessNodes(nodeIds, processFn);
}

/**
 * Optimized function to get Figma images
 */
async function getFigmaImagesOptimized(nodeIds, options = {}) {
  const {
    format = "png",
    scale = 1,
    maxDimension = 2048, // Giới hạn kích thước để tránh request quá lớn
  } = options;

  console.log(`Getting optimized images for ${nodeIds.length} nodes`);

  const processFn = async (batch) => {
    console.log(
      `Getting images for ${batch.length} nodes with scale=${scale}, maxDim=${maxDimension}`
    );

    // Mock image processing
    return batch.map((nodeId) => ({
      nodeId,
      imageUrl: `https://example.com/image-${nodeId}.${format}`,
      status: "success",
    }));
  };

  return await batchProcessNodes(nodeIds, processFn, 3); // Smaller batch for images
}

module.exports = {
  getFigmaCodeOptimized,
  getFigmaImagesOptimized,
  batchProcessNodes,
  processBatchWithRetry,
};

// Example usage
if (require.main === module) {
  const exampleNodeIds = ["1:1", "1:2", "1:3", "1:4", "1:5"];

  getFigmaCodeOptimized(exampleNodeIds)
    .then((results) => {
      console.log("Success:", results);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
