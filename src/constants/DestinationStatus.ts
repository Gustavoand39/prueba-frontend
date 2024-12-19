/**
 * Mapping of destination status to color
 * @type {Record<string, string>}
 */
export const DestinationStatusColor: Record<string, string> = {
  Aceptado: "bg-blue-300",
  "En espera": "bg-neutral-300",
};

/**
 * Mapping of destination status from Spanish to English
 * @type {Record<string, string>}
 */
export const DestinationStatus: Record<string, string> = {
  Aceptado: "Accepted",
  "En espera": "On Hold",
};
