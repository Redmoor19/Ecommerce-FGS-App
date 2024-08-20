const RESPONSE_STATUS = {
    success: "success",
    error: "error"
} as const;

export type Response <T> = {
    status: typeof RESPONSE_STATUS[keyof typeof RESPONSE_STATUS],
    data: T | null,
    error: {
        errorMessage: string;
        errorStatus: number;
    } | null;
}