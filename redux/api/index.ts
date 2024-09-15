import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  RootState,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import K from "@/constants";
import { ReduxState } from "../store";
// import { authActions } from "../slices";
// import { RefreshTokenResponseDto } from "./openapi.generated";
// import { showError } from "../../_shared";

export declare type FormRecognizerRequestBody =
  | NodeJS.ReadableStream
  | Blob
  | ArrayBuffer
  | ArrayBufferView;

const baseQuery = fetchBaseQuery({
  baseUrl: K.BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as ReduxState).persistedReducer.auth.accessToken;

    console.log("access token =>>", token);
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const token = (api.getState() as ReduxState).persistedReducer.auth
      .refreshToken;

    // try to get a new token

    const res = await fetch(`${K.BASE_URL}/auth/refresh-token`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      method: "GET",
    });
    const data = await res.json();

    // const refreshResult = await baseQuery(
    //   {
    //     url: `/auth/refresh-token`,
    //     headers: {
    //       authorization: `Bearer ${token}`,
    //     },
    //     params: {
    //       fake: Date.now(),
    //     },
    //   },
    //   api,
    //   extraOptions,
    // );

    // if ((data as unknown as RefreshTokenResponseDto).refreshToken) {
    //   // store the new token in the store or wherever you keep it
    //   api.dispatch(
    //     authActions.setTokens({
    //       accessToken: (data as unknown as RefreshTokenResponseDto).accessToken,
    //       refreshToken: (data as unknown as RefreshTokenResponseDto)
    //         .refreshToken,
    //     })
    //   );
    //   // retry the initial query
    //   result = await baseQuery(args, api, extraOptions);
    // } else {
    //   // refresh failed - do something like redirect to login or show a "retry" button
    //   showError("Token expired, please login again");
    // }
  }
  return result;
};

export const restApi = createApi({
  reducerPath: "restApi",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
