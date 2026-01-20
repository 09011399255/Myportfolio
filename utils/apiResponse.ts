import { NextResponse } from "next/server";
//eslint-disable-next-line
type ApiResponseData = Record<string, any> | unknown | string | null;

export function apiResponse(
  statusCode: number = 200,
  data: ApiResponseData = null,
  message: string = "Success"
) {
  return NextResponse.json(
    {
      status: "success",
      data: data,
      message: message,
    },
    { status: statusCode }
  );
}

export function apiError(
  statusCode: number = 500,
  message: string = "An error occurred",
  //eslint-disable-next-line
  error?: any
) {
  return NextResponse.json(
    {
      status: "error",
      message: message,
      error: error || null,
    },
    { status: statusCode }
  );
}