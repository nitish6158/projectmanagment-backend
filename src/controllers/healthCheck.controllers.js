import { ApiResponse } from "../utils/api-response.js";
import asyncHandler from "../utils/async-handller.js";
export const healthCheck = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(new ApiResponse(200, "API is healthy"));
});

// export const healthCheck = (req, res) => {
//     return res
//         .status(200)
//         .json(new ApiResponse(200, "API is healthy"));
// };
