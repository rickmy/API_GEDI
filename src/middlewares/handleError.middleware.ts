import { logger } from "../utils/logger";

export const handleErrors = (err, _req, res, _next) => {
  console.error("error", err);
  logger.error(err);
  res.status(err.status || 500).json({ message: err.message });
}