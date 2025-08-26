/**
 * MCP Figma Wrapper with Error Handling
 * Wrapper around MCP Figma tools to handle 413 errors gracefully
 */

export class MCPFigmaWrapper {
  private readonly maxRetries = 3;
  private readonly retryDelay = 1000;
  private readonly maxBatchSize = 5;

  /**
   * Safe wrapper for mcp_my-mcp-server_get_code
   */
  async getCodeSafe(
    nodeId: string,
    options: {
      clientFrameworks?: string;
      clientLanguages?: string;
    } = {}
  ) {
    const defaultOptions = {
      clientFrameworks: "react,next",
      clientLanguages: "typescript,javascript,html,css",
      ...options,
    };

    return this.executeWithRetry(async () => {
      // Replace with actual MCP call when available
      console.log(`Getting code for node ${nodeId}`);

      // This would be the actual MCP call:
      // return await mcp_my-mcp-server_get_code({
      //   nodeId,
      //   ...defaultOptions
      // });

      // Mock response for now
      return {
        nodeId,
        code: `// Generated code for ${nodeId}`,
        framework: defaultOptions.clientFrameworks,
        language: defaultOptions.clientLanguages,
      };
    });
  }

  /**
   * Safe wrapper for mcp_my-mcp-server_get_image with size optimization
   */
  async getImageSafe(
    nodeId: string,
    options: {
      clientFrameworks?: string;
      clientLanguages?: string;
      maxSize?: number;
    } = {}
  ) {
    const defaultOptions = {
      clientFrameworks: "react,next",
      clientLanguages: "typescript,javascript,html,css",
      maxSize: 1024, // Giới hạn kích thước
      ...options,
    };

    return this.executeWithRetry(async () => {
      console.log(
        `Getting image for node ${nodeId} with maxSize=${defaultOptions.maxSize}`
      );

      // Mock response
      return {
        nodeId,
        imageUrl: `https://images.figma.com/node-${nodeId}`,
        size: defaultOptions.maxSize,
      };
    });
  }

  /**
   * Batch process multiple nodes safely
   */
  async batchProcessNodes<T>(
    nodeIds: string[],
    processFn: (nodeId: string) => Promise<T>,
    batchSize: number = this.maxBatchSize
  ): Promise<T[]> {
    const results: T[] = [];

    for (let i = 0; i < nodeIds.length; i += batchSize) {
      const batch = nodeIds.slice(i, i + batchSize);

      console.log(
        `Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(
          nodeIds.length / batchSize
        )}`
      );

      try {
        // Process batch items in parallel, but with smaller batches
        const batchPromises = batch.map((nodeId) =>
          this.executeWithRetry(() => processFn(nodeId))
        );

        const batchResults = await Promise.allSettled(batchPromises);

        batchResults.forEach((result, index) => {
          if (result.status === "fulfilled") {
            results.push(result.value);
          } else {
            console.error(
              `Failed to process node ${batch[index]}:`,
              result.reason
            );
          }
        });

        // Delay between batches
        if (i + batchSize < nodeIds.length) {
          await this.sleep(this.retryDelay);
        }
      } catch (error) {
        console.error(`Batch processing error:`, error);
      }
    }

    return results;
  }

  /**
   * Execute function with retry logic for 413 errors
   */
  private async executeWithRetry<T>(
    fn: () => Promise<T>,
    attempt: number = 1
  ): Promise<T> {
    try {
      return await fn();
    } catch (error: any) {
      const is413Error =
        error.message?.includes("413") ||
        error.message?.includes("Request Entity Too Large") ||
        error.message?.includes("Request Failed: 413");

      if (is413Error && attempt < this.maxRetries) {
        console.log(
          `Attempt ${attempt} failed with 413 error. Retrying in ${this.retryDelay}ms...`
        );
        await this.sleep(this.retryDelay * attempt); // Exponential backoff
        return this.executeWithRetry(fn, attempt + 1);
      }

      if (is413Error) {
        console.error(
          `Request too large after ${this.maxRetries} attempts. Try selecting a smaller node or component.`
        );
        throw new Error(
          `Request too large: Please select a smaller Figma node or break it into smaller components.`
        );
      }

      throw error;
    }
  }

  /**
   * Sleep utility
   */
  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Get node info safely (smallest request)
   */
  async getNodeInfoSafe(nodeId: string) {
    return this.executeWithRetry(async () => {
      console.log(`Getting info for node ${nodeId}`);

      // This would be a minimal info request
      return {
        nodeId,
        name: `Node ${nodeId}`,
        type: "FRAME",
        children: [],
      };
    });
  }

  /**
   * Helper to validate node ID format
   */
  static isValidNodeId(nodeId: string): boolean {
    const nodeIdPattern = /^-?\d+[:-]-?\d+$/;
    return nodeIdPattern.test(nodeId);
  }

  /**
   * Helper to extract node ID from Figma URL
   */
  static extractNodeIdFromUrl(url: string): string | null {
    const match = url.match(/node-id=([^&]+)/);
    if (match) {
      return match[1].replace("-", ":");
    }
    return null;
  }
}

// Export singleton instance
export const mcpFigma = new MCPFigmaWrapper();

// Usage examples:
export async function exampleUsage() {
  try {
    // Single node
    const code = await mcpFigma.getCodeSafe("1:2");
    console.log("Generated code:", code);

    // Multiple nodes with batch processing
    const nodeIds = ["1:1", "1:2", "1:3"];
    const results = await mcpFigma.batchProcessNodes(nodeIds, (nodeId) =>
      mcpFigma.getCodeSafe(nodeId)
    );
    console.log("Batch results:", results);

    // Image with size limit
    const image = await mcpFigma.getImageSafe("1:2", { maxSize: 512 });
    console.log("Generated image:", image);
  } catch (error) {
    console.error("MCP Figma error:", error);
  }
}
