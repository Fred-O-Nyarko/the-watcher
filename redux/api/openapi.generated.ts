import { restApi as api } from "./index";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    appControllerGetHello: build.query<
      AppControllerGetHelloApiResponse,
      AppControllerGetHelloApiArg
    >({
      query: () => ({ url: `/` }),
    }),
    partyControllerCreateParty: build.mutation<
      PartyControllerCreatePartyApiResponse,
      PartyControllerCreatePartyApiArg
    >({
      query: (queryArg) => ({
        url: `/parties`,
        method: "POST",
        body: queryArg.createPartyRequestDto,
      }),
    }),
    partyControllerGetParties: build.query<
      PartyControllerGetPartiesApiResponse,
      PartyControllerGetPartiesApiArg
    >({
      query: (queryArg) => ({
        url: `/parties`,
        params: {
          limit: queryArg.limit,
          page: queryArg.page,
          filter: queryArg.filter,
          order: queryArg.order,
        },
      }),
    }),
    partyControllerGetParty: build.query<
      PartyControllerGetPartyApiResponse,
      PartyControllerGetPartyApiArg
    >({
      query: (queryArg) => ({ url: `/parties/${queryArg.partyId}` }),
    }),
    partyControllerUpdateParty: build.mutation<
      PartyControllerUpdatePartyApiResponse,
      PartyControllerUpdatePartyApiArg
    >({
      query: (queryArg) => ({
        url: `/parties/${queryArg.partyId}`,
        method: "PATCH",
        body: queryArg.updatePartyRequestDto,
      }),
    }),
    partyControllerDeleteParty: build.mutation<
      PartyControllerDeletePartyApiResponse,
      PartyControllerDeletePartyApiArg
    >({
      query: (queryArg) => ({
        url: `/parties/${queryArg.partyId}`,
        method: "DELETE",
      }),
    }),
    candidateControllerCreateCandidate: build.mutation<
      CandidateControllerCreateCandidateApiResponse,
      CandidateControllerCreateCandidateApiArg
    >({
      query: (queryArg) => ({
        url: `/candidates`,
        method: "POST",
        body: queryArg.createCandidateRequestDto,
      }),
    }),
    candidateControllerGetCandidates: build.query<
      CandidateControllerGetCandidatesApiResponse,
      CandidateControllerGetCandidatesApiArg
    >({
      query: (queryArg) => ({
        url: `/candidates`,
        params: {
          limit: queryArg.limit,
          page: queryArg.page,
          filter: queryArg.filter,
          order: queryArg.order,
        },
      }),
    }),
    candidateControllerGetCandidate: build.query<
      CandidateControllerGetCandidateApiResponse,
      CandidateControllerGetCandidateApiArg
    >({
      query: (queryArg) => ({ url: `/candidates/${queryArg.candidateId}` }),
    }),
    candidateControllerUpdateCandidate: build.mutation<
      CandidateControllerUpdateCandidateApiResponse,
      CandidateControllerUpdateCandidateApiArg
    >({
      query: (queryArg) => ({
        url: `/candidates/${queryArg.candidateId}`,
        method: "PATCH",
        body: queryArg.updateCandidateRequestDto,
      }),
    }),
    candidateControllerDeleteCandidate: build.mutation<
      CandidateControllerDeleteCandidateApiResponse,
      CandidateControllerDeleteCandidateApiArg
    >({
      query: (queryArg) => ({
        url: `/candidates/${queryArg.candidateId}`,
        method: "DELETE",
      }),
    }),
    nationControllerCreateNation: build.mutation<
      NationControllerCreateNationApiResponse,
      NationControllerCreateNationApiArg
    >({
      query: (queryArg) => ({
        url: `/nations`,
        method: "POST",
        body: queryArg.createNationRequestDto,
      }),
    }),
    nationControllerGetNations: build.query<
      NationControllerGetNationsApiResponse,
      NationControllerGetNationsApiArg
    >({
      query: (queryArg) => ({
        url: `/nations`,
        params: {
          limit: queryArg.limit,
          page: queryArg.page,
          filter: queryArg.filter,
          order: queryArg.order,
        },
      }),
    }),
    nationControllerGetNation: build.query<
      NationControllerGetNationApiResponse,
      NationControllerGetNationApiArg
    >({
      query: (queryArg) => ({ url: `/nations/${queryArg.nationId}` }),
    }),
    nationControllerUpdateNation: build.mutation<
      NationControllerUpdateNationApiResponse,
      NationControllerUpdateNationApiArg
    >({
      query: (queryArg) => ({
        url: `/nations/${queryArg.nationId}`,
        method: "PATCH",
        body: queryArg.updateNationRequestDto,
      }),
    }),
    regionControllerCreateRegion: build.mutation<
      RegionControllerCreateRegionApiResponse,
      RegionControllerCreateRegionApiArg
    >({
      query: (queryArg) => ({
        url: `/regions`,
        method: "POST",
        body: queryArg.createRegionRequestDto,
      }),
    }),
    regionControllerGetRegions: build.query<
      RegionControllerGetRegionsApiResponse,
      RegionControllerGetRegionsApiArg
    >({
      query: (queryArg) => ({
        url: `/regions`,
        params: {
          limit: queryArg.limit,
          page: queryArg.page,
          filter: queryArg.filter,
          order: queryArg.order,
        },
      }),
    }),
    regionControllerGetRegion: build.query<
      RegionControllerGetRegionApiResponse,
      RegionControllerGetRegionApiArg
    >({
      query: (queryArg) => ({ url: `/regions/${queryArg.regionId}` }),
    }),
    regionControllerUpdateRegion: build.mutation<
      RegionControllerUpdateRegionApiResponse,
      RegionControllerUpdateRegionApiArg
    >({
      query: (queryArg) => ({
        url: `/regions/${queryArg.regionId}`,
        method: "PATCH",
        body: queryArg.updateRegionRequestDto,
      }),
    }),
    zoneControllerCreateZone: build.mutation<
      ZoneControllerCreateZoneApiResponse,
      ZoneControllerCreateZoneApiArg
    >({
      query: (queryArg) => ({
        url: `/zones`,
        method: "POST",
        body: queryArg.createZoneRequestDto,
      }),
    }),
    zoneControllerGetZones: build.query<
      ZoneControllerGetZonesApiResponse,
      ZoneControllerGetZonesApiArg
    >({
      query: (queryArg) => ({
        url: `/zones`,
        params: {
          limit: queryArg.limit,
          page: queryArg.page,
          filter: queryArg.filter,
          order: queryArg.order,
        },
      }),
    }),
    zoneControllerGetZone: build.query<
      ZoneControllerGetZoneApiResponse,
      ZoneControllerGetZoneApiArg
    >({
      query: (queryArg) => ({ url: `/zones/${queryArg.zoneId}` }),
    }),
    zoneControllerUpdateZone: build.mutation<
      ZoneControllerUpdateZoneApiResponse,
      ZoneControllerUpdateZoneApiArg
    >({
      query: (queryArg) => ({
        url: `/zones/${queryArg.zoneId}`,
        method: "PATCH",
        body: queryArg.updateZoneRequestDto,
      }),
    }),
    constituencyControllerCreateConstituency: build.mutation<
      ConstituencyControllerCreateConstituencyApiResponse,
      ConstituencyControllerCreateConstituencyApiArg
    >({
      query: (queryArg) => ({
        url: `/constituencies`,
        method: "POST",
        body: queryArg.createConstituencyRequestDto,
      }),
    }),
    constituencyControllerGetConstituencies: build.query<
      ConstituencyControllerGetConstituenciesApiResponse,
      ConstituencyControllerGetConstituenciesApiArg
    >({
      query: (queryArg) => ({
        url: `/constituencies`,
        params: {
          limit: queryArg.limit,
          page: queryArg.page,
          filter: queryArg.filter,
          order: queryArg.order,
        },
      }),
    }),
    constituencyControllerGetConstituency: build.query<
      ConstituencyControllerGetConstituencyApiResponse,
      ConstituencyControllerGetConstituencyApiArg
    >({
      query: (queryArg) => ({
        url: `/constituencies/${queryArg.constituencyId}`,
      }),
    }),
    constituencyControllerUpdateConstituecy: build.mutation<
      ConstituencyControllerUpdateConstituecyApiResponse,
      ConstituencyControllerUpdateConstituecyApiArg
    >({
      query: (queryArg) => ({
        url: `/constituencies/${queryArg.constituencyId}`,
        method: "PATCH",
        body: queryArg.updateConstituencyRequestDto,
      }),
    }),
    constituencyControllerDeleteConstituecy: build.mutation<
      ConstituencyControllerDeleteConstituecyApiResponse,
      ConstituencyControllerDeleteConstituecyApiArg
    >({
      query: (queryArg) => ({
        url: `/constituencies/${queryArg.constituencyId}`,
        method: "DELETE",
      }),
    }),
    townControllerCreateTown: build.mutation<
      TownControllerCreateTownApiResponse,
      TownControllerCreateTownApiArg
    >({
      query: (queryArg) => ({
        url: `/towns`,
        method: "POST",
        body: queryArg.createTownRequestDto,
      }),
    }),
    townControllerGetTowns: build.query<
      TownControllerGetTownsApiResponse,
      TownControllerGetTownsApiArg
    >({
      query: (queryArg) => ({
        url: `/towns`,
        params: {
          limit: queryArg.limit,
          page: queryArg.page,
          filter: queryArg.filter,
          order: queryArg.order,
        },
      }),
    }),
    townControllerGetTown: build.query<
      TownControllerGetTownApiResponse,
      TownControllerGetTownApiArg
    >({
      query: (queryArg) => ({ url: `/towns/${queryArg.townId}` }),
    }),
    townControllerUpdateTown: build.mutation<
      TownControllerUpdateTownApiResponse,
      TownControllerUpdateTownApiArg
    >({
      query: (queryArg) => ({
        url: `/towns/${queryArg.townId}`,
        method: "PATCH",
        body: queryArg.updateTownRequestDto,
      }),
    }),
    pollingStationControllerCreatePollingStation: build.mutation<
      PollingStationControllerCreatePollingStationApiResponse,
      PollingStationControllerCreatePollingStationApiArg
    >({
      query: (queryArg) => ({
        url: `/polling-stations`,
        method: "POST",
        body: queryArg.createPollingStationRequestDto,
      }),
    }),
    pollingStationControllerGetPollingStations: build.query<
      PollingStationControllerGetPollingStationsApiResponse,
      PollingStationControllerGetPollingStationsApiArg
    >({
      query: (queryArg) => ({
        url: `/polling-stations`,
        params: {
          limit: queryArg.limit,
          page: queryArg.page,
          filter: queryArg.filter,
          order: queryArg.order,
        },
      }),
    }),
    pollingStationControllerGetPollingStation: build.query<
      PollingStationControllerGetPollingStationApiResponse,
      PollingStationControllerGetPollingStationApiArg
    >({
      query: (queryArg) => ({
        url: `/polling-stations/${queryArg.pollingStationId}`,
      }),
    }),
    pollingStationControllerUpdatePollingStation: build.mutation<
      PollingStationControllerUpdatePollingStationApiResponse,
      PollingStationControllerUpdatePollingStationApiArg
    >({
      query: (queryArg) => ({
        url: `/polling-stations/${queryArg.pollingStationId}`,
        method: "PATCH",
        body: queryArg.updatePollingStationRequestDto,
      }),
    }),
    userControllerCreateUser: build.mutation<
      UserControllerCreateUserApiResponse,
      UserControllerCreateUserApiArg
    >({
      query: (queryArg) => ({
        url: `/users`,
        method: "POST",
        body: queryArg.createUserRequestDto,
      }),
    }),
    userControllerGetUsers: build.query<
      UserControllerGetUsersApiResponse,
      UserControllerGetUsersApiArg
    >({
      query: (queryArg) => ({
        url: `/users`,
        params: {
          limit: queryArg.limit,
          page: queryArg.page,
          filter: queryArg.filter,
          order: queryArg.order,
        },
      }),
    }),
    userControllerUpdateUser: build.mutation<
      UserControllerUpdateUserApiResponse,
      UserControllerUpdateUserApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.userId}`,
        method: "PATCH",
        body: queryArg.updateUserRequestDto,
      }),
    }),
    userControllerGetUser: build.query<
      UserControllerGetUserApiResponse,
      UserControllerGetUserApiArg
    >({
      query: (queryArg) => ({ url: `/users/${queryArg.userId}` }),
    }),
    authControllerLogin: build.mutation<
      AuthControllerLoginApiResponse,
      AuthControllerLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/login`,
        method: "POST",
        body: queryArg.loginRequestDto,
      }),
    }),
    authControllerVerifyAccount: build.mutation<
      AuthControllerVerifyAccountApiResponse,
      AuthControllerVerifyAccountApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/account/verify`,
        method: "PATCH",
        body: queryArg.verifyAccountRequestDto,
      }),
    }),
    authControllerResendOtp: build.mutation<
      AuthControllerResendOtpApiResponse,
      AuthControllerResendOtpApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/otp/resend`,
        method: "POST",
        body: queryArg.resendOtpRequestDto,
      }),
    }),
    authControllerVerifyOtp: build.mutation<
      AuthControllerVerifyOtpApiResponse,
      AuthControllerVerifyOtpApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/otp/verify`,
        method: "POST",
        body: queryArg.verifyOtpRequestDto,
      }),
    }),
    authControllerGetLoggedInUser: build.query<
      AuthControllerGetLoggedInUserApiResponse,
      AuthControllerGetLoggedInUserApiArg
    >({
      query: () => ({ url: `/auth/user` }),
    }),
    authControllerRefreshToken: build.query<
      AuthControllerRefreshTokenApiResponse,
      AuthControllerRefreshTokenApiArg
    >({
      query: () => ({ url: `/auth/refresh-token` }),
    }),
    authControllerResetPassword: build.mutation<
      AuthControllerResetPasswordApiResponse,
      AuthControllerResetPasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/reset-password`,
        method: "PATCH",
        body: queryArg.resetPasswordRequestDto,
      }),
    }),
    authControllerResetForgottenPassword: build.mutation<
      AuthControllerResetForgottenPasswordApiResponse,
      AuthControllerResetForgottenPasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/reset-forgotten-password`,
        method: "PATCH",
        body: queryArg.resetForgottenPasswordRequestDto,
      }),
    }),
    authControllerSendResetForgottenPasswordCode: build.mutation<
      AuthControllerSendResetForgottenPasswordCodeApiResponse,
      AuthControllerSendResetForgottenPasswordCodeApiArg
    >({
      query: (queryArg) => ({
        url: `/auth/reset-forgotten-password/code`,
        method: "POST",
        body: queryArg.sendResetForgottenPasswordCodeRequestDto,
      }),
    }),
    authControllerLogout: build.query<
      AuthControllerLogoutApiResponse,
      AuthControllerLogoutApiArg
    >({
      query: () => ({ url: `/auth/logout` }),
    }),
    resultControllerCreateManualResult: build.mutation<
      ResultControllerCreateManualResultApiResponse,
      ResultControllerCreateManualResultApiArg
    >({
      query: (queryArg) => ({
        url: `/results`,
        method: "POST",
        body: queryArg.createManualResultRequestDto,
      }),
    }),
    resultControllerGetResults: build.query<
      ResultControllerGetResultsApiResponse,
      ResultControllerGetResultsApiArg
    >({
      query: (queryArg) => ({
        url: `/results`,
        params: {
          limit: queryArg.limit,
          page: queryArg.page,
          filter: queryArg.filter,
          order: queryArg.order,
        },
      }),
    }),
    resultControllerGetResultStatistics: build.query<
      ResultControllerGetResultStatisticsApiResponse,
      ResultControllerGetResultStatisticsApiArg
    >({
      query: (queryArg) => ({
        url: `/results/statistics`,
        params: { filter: queryArg.filter },
      }),
    }),
    resultControllerGetPresidentialResults: build.query<
      ResultControllerGetPresidentialResultsApiResponse,
      ResultControllerGetPresidentialResultsApiArg
    >({
      query: (queryArg) => ({
        url: `/results/statistics/presidential`,
        params: { filter: queryArg.filter },
      }),
    }),
    resultControllerGetPartyParliamentaryResults: build.query<
      ResultControllerGetPartyParliamentaryResultsApiResponse,
      ResultControllerGetPartyParliamentaryResultsApiArg
    >({
      query: (queryArg) => ({
        url: `/results/statistics/parliamentary/party`,
        params: { filter: queryArg.filter },
      }),
    }),
    resultControllerGetCandidateParliamentaryResults: build.query<
      ResultControllerGetCandidateParliamentaryResultsApiResponse,
      ResultControllerGetCandidateParliamentaryResultsApiArg
    >({
      query: (queryArg) => ({
        url: `/results/statistics/parliamentary/candidate`,
        params: { filter: queryArg.filter },
      }),
    }),
    resultControllerGetResult: build.query<
      ResultControllerGetResultApiResponse,
      ResultControllerGetResultApiArg
    >({
      query: (queryArg) => ({ url: `/results/${queryArg.resultId}` }),
    }),
    resultControllerGetVote: build.query<
      ResultControllerGetVoteApiResponse,
      ResultControllerGetVoteApiArg
    >({
      query: (queryArg) => ({ url: `/results/votes/${queryArg.voteId}` }),
    }),
    resultControllerGetVotes: build.query<
      ResultControllerGetVotesApiResponse,
      ResultControllerGetVotesApiArg
    >({
      query: (queryArg) => ({
        url: `/results/votes`,
        params: {
          limit: queryArg.limit,
          page: queryArg.page,
          filter: queryArg.filter,
          order: queryArg.order,
        },
      }),
    }),
    resultControllerGetVotesCount: build.query<
      ResultControllerGetVotesCountApiResponse,
      ResultControllerGetVotesCountApiArg
    >({
      query: (queryArg) => ({
        url: `/results/votes/count`,
        params: { filter: queryArg.filter },
      }),
    }),
    resultControllerAcceptResult: build.mutation<
      ResultControllerAcceptResultApiResponse,
      ResultControllerAcceptResultApiArg
    >({
      query: (queryArg) => ({
        url: `/results/status/confirm`,
        method: "PATCH",
        body: queryArg.acceptResultRequestDto,
      }),
    }),
    resultControllerRejectResult: build.mutation<
      ResultControllerRejectResultApiResponse,
      ResultControllerRejectResultApiArg
    >({
      query: (queryArg) => ({
        url: `/results/status/reject`,
        method: "PATCH",
        body: queryArg.rejectResultsRequestDto,
      }),
    }),
    resultControllerUploadPinkSheet: build.mutation<
      ResultControllerUploadPinkSheetApiResponse,
      ResultControllerUploadPinkSheetApiArg
    >({
      query: (queryArg) => ({
        url: `/results/pink-sheet`,
        method: "POST",
        body: queryArg.uploadPinkSheetRequestDto,
      }),
    }),
    ussdSessionControllerUploadUssdResult: build.mutation<
      UssdSessionControllerUploadUssdResultApiResponse,
      UssdSessionControllerUploadUssdResultApiArg
    >({
      query: (queryArg) => ({
        url: `/ussd-sessions/result`,
        method: "POST",
        body: queryArg.makeUssdRequestDto,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type AppControllerGetHelloApiResponse = /** status 200  */ string;
export type AppControllerGetHelloApiArg = void;
export type PartyControllerCreatePartyApiResponse =
  /** status 201  */ CreatePartyResponseDto;
export type PartyControllerCreatePartyApiArg = {
  createPartyRequestDto: CreatePartyRequestDto;
};
export type PartyControllerGetPartiesApiResponse =
  /** status 200  */ GetPartiesResponseDto;
export type PartyControllerGetPartiesApiArg = {
  /** Number of records to fetch per page */
  limit: number;
  /** Current page number */
  page: number;
  /** Filter json object */
  filter: string;
  /** Order json object */
  order: string;
};
export type PartyControllerGetPartyApiResponse =
  /** status 200  */ GetPartyResponseDto;
export type PartyControllerGetPartyApiArg = {
  /** ID of the party */
  partyId: string;
};
export type PartyControllerUpdatePartyApiResponse =
  /** status 200  */ UpdatePartyResponseDto;
export type PartyControllerUpdatePartyApiArg = {
  /** ID of the party */
  partyId: string;
  updatePartyRequestDto: UpdatePartyRequestDto;
};
export type PartyControllerDeletePartyApiResponse =
  /** status 200  */ DeletePartyResponseDto;
export type PartyControllerDeletePartyApiArg = {
  /** ID of the party */
  partyId: string;
};
export type CandidateControllerCreateCandidateApiResponse =
  /** status 201  */ CreateCandidateResponseDto;
export type CandidateControllerCreateCandidateApiArg = {
  createCandidateRequestDto: CreateCandidateRequestDto;
};
export type CandidateControllerGetCandidatesApiResponse =
  /** status 200  */ GetCandidatesResponseDto;
export type CandidateControllerGetCandidatesApiArg = {
  /** Number of records to fetch per page */
  limit: number;
  /** Current page number */
  page: number;
  /** Filter json object */
  filter: string;
  /** Order json object */
  order: string;
};
export type CandidateControllerGetCandidateApiResponse =
  /** status 200  */ GetCandidateResponseDto;
export type CandidateControllerGetCandidateApiArg = {
  /** ID of the candidate */
  candidateId: string;
};
export type CandidateControllerUpdateCandidateApiResponse =
  /** status 200  */ UpdateCandidateResponseDto;
export type CandidateControllerUpdateCandidateApiArg = {
  /** ID of the candidate */
  candidateId: string;
  updateCandidateRequestDto: UpdateCandidateRequestDto;
};
export type CandidateControllerDeleteCandidateApiResponse =
  /** status 200  */ DeleteCandidateResponseDto;
export type CandidateControllerDeleteCandidateApiArg = {
  /** ID of the candidate */
  candidateId: string;
};
export type NationControllerCreateNationApiResponse =
  /** status 201  */ CreateNationResponseDto;
export type NationControllerCreateNationApiArg = {
  createNationRequestDto: CreateNationRequestDto;
};
export type NationControllerGetNationsApiResponse =
  /** status 200  */ GetNationsResponseDto;
export type NationControllerGetNationsApiArg = {
  /** Number of records to fetch per page */
  limit: number;
  /** Current page number */
  page: number;
  /** Filter json object */
  filter: string;
  /** Order json object */
  order: string;
};
export type NationControllerGetNationApiResponse =
  /** status 200  */ GetNationResponseDto;
export type NationControllerGetNationApiArg = {
  /** ID of the nation */
  nationId: string;
};
export type NationControllerUpdateNationApiResponse =
  /** status 200  */ UpdateNationResponseDto;
export type NationControllerUpdateNationApiArg = {
  /** ID of the nation */
  nationId: string;
  updateNationRequestDto: UpdateNationRequestDto;
};
export type RegionControllerCreateRegionApiResponse =
  /** status 201  */ CreateRegionResponseDto;
export type RegionControllerCreateRegionApiArg = {
  createRegionRequestDto: CreateRegionRequestDto;
};
export type RegionControllerGetRegionsApiResponse =
  /** status 200  */ GetRegionsResponse;
export type RegionControllerGetRegionsApiArg = {
  /** Number of records to fetch per page */
  limit: number;
  /** Current page number */
  page: number;
  /** Filter json object */
  filter: string;
  /** Order json object */
  order: string;
};
export type RegionControllerGetRegionApiResponse =
  /** status 200  */ GetRegionResponseDto;
export type RegionControllerGetRegionApiArg = {
  /** ID of the region */
  regionId: string;
};
export type RegionControllerUpdateRegionApiResponse =
  /** status 200  */ UpdateRegionsResponseDto;
export type RegionControllerUpdateRegionApiArg = {
  /** ID of the region */
  regionId: string;
  updateRegionRequestDto: UpdateRegionRequestDto;
};
export type ZoneControllerCreateZoneApiResponse =
  /** status 201  */ CreateZoneResponseDto;
export type ZoneControllerCreateZoneApiArg = {
  createZoneRequestDto: CreateZoneRequestDto;
};
export type ZoneControllerGetZonesApiResponse =
  /** status 200  */ GetZonesResponseDto;
export type ZoneControllerGetZonesApiArg = {
  /** Number of records to fetch per page */
  limit: number;
  /** Current page number */
  page: number;
  /** Filter json object */
  filter: string;
  /** Order json object */
  order: string;
};
export type ZoneControllerGetZoneApiResponse =
  /** status 200  */ GetZoneResponseDto;
export type ZoneControllerGetZoneApiArg = {
  /** ID of the zone */
  zoneId: string;
};
export type ZoneControllerUpdateZoneApiResponse =
  /** status 200  */ UpdateZoneResponseDto;
export type ZoneControllerUpdateZoneApiArg = {
  /** ID of the zone */
  zoneId: string;
  updateZoneRequestDto: UpdateZoneRequestDto;
};
export type ConstituencyControllerCreateConstituencyApiResponse =
  /** status 201  */ CreateConstituencyResponseDto;
export type ConstituencyControllerCreateConstituencyApiArg = {
  createConstituencyRequestDto: CreateConstituencyRequestDto;
};
export type ConstituencyControllerGetConstituenciesApiResponse =
  /** status 200  */ GetConstituenciesResponseDto;
export type ConstituencyControllerGetConstituenciesApiArg = {
  /** Number of records to fetch per page */
  limit: number;
  /** Current page number */
  page: number;
  /** Filter json object */
  filter: string;
  /** Order json object */
  order: string;
};
export type ConstituencyControllerGetConstituencyApiResponse =
  /** status 200  */ GetConstituencyResponseDto;
export type ConstituencyControllerGetConstituencyApiArg = {
  /** ID of the constituency */
  constituencyId: string;
};
export type ConstituencyControllerUpdateConstituecyApiResponse =
  /** status 200  */ UpdateConstituencyResponseDto;
export type ConstituencyControllerUpdateConstituecyApiArg = {
  /** ID of the constituency */
  constituencyId: string;
  updateConstituencyRequestDto: UpdateConstituencyRequestDto;
};
export type ConstituencyControllerDeleteConstituecyApiResponse =
  /** status 200  */ DeleteConstituencyResponseDto;
export type ConstituencyControllerDeleteConstituecyApiArg = {
  /** ID of the constituency */
  constituencyId: string;
};
export type TownControllerCreateTownApiResponse =
  /** status 201  */ CreateTownResponseDto;
export type TownControllerCreateTownApiArg = {
  createTownRequestDto: CreateTownRequestDto;
};
export type TownControllerGetTownsApiResponse =
  /** status 200  */ GetTownsResponseDto;
export type TownControllerGetTownsApiArg = {
  /** Number of records to fetch per page */
  limit: number;
  /** Current page number */
  page: number;
  /** Filter json object */
  filter: string;
  /** Order json object */
  order: string;
};
export type TownControllerGetTownApiResponse =
  /** status 200  */ GetTownResponseDto;
export type TownControllerGetTownApiArg = {
  /** ID of the town */
  townId: string;
};
export type TownControllerUpdateTownApiResponse =
  /** status 200  */ UpdateTownResponseDto;
export type TownControllerUpdateTownApiArg = {
  /** ID of the town */
  townId: string;
  updateTownRequestDto: UpdateTownRequestDto;
};
export type PollingStationControllerCreatePollingStationApiResponse =
  /** status 201  */ CreatePollingStationResponseDto;
export type PollingStationControllerCreatePollingStationApiArg = {
  createPollingStationRequestDto: CreatePollingStationRequestDto;
};
export type PollingStationControllerGetPollingStationsApiResponse =
  /** status 200  */ GetPollingStationsResponseDto;
export type PollingStationControllerGetPollingStationsApiArg = {
  /** Number of records to fetch per page */
  limit: number;
  /** Current page number */
  page: number;
  /** Filter json object */
  filter: string;
  /** Order json object */
  order: string;
};
export type PollingStationControllerGetPollingStationApiResponse =
  /** status 200  */ GetPollingStationResponseDto;
export type PollingStationControllerGetPollingStationApiArg = {
  /** ID of the polling station */
  pollingStationId: string;
};
export type PollingStationControllerUpdatePollingStationApiResponse =
  /** status 200  */ UpdatePollingStationResponseDto;
export type PollingStationControllerUpdatePollingStationApiArg = {
  /** ID of the polling station */
  pollingStationId: string;
  updatePollingStationRequestDto: UpdatePollingStationRequestDto;
};
export type UserControllerCreateUserApiResponse =
  /** status 201  */ CreateUserResponseDto;
export type UserControllerCreateUserApiArg = {
  createUserRequestDto: CreateUserRequestDto;
};
export type UserControllerGetUsersApiResponse =
  /** status 200  */ GetUsersResponseDto;
export type UserControllerGetUsersApiArg = {
  /** Number of records to fetch per page */
  limit: number;
  /** Current page number */
  page: number;
  /** Filter json object */
  filter: string;
  /** Order json object */
  order: string;
};
export type UserControllerUpdateUserApiResponse =
  /** status 200  */ UpdateUserResponseDto;
export type UserControllerUpdateUserApiArg = {
  /** ID of the user */
  userId: string;
  updateUserRequestDto: UpdateUserRequestDto;
};
export type UserControllerGetUserApiResponse =
  /** status 200  */ GetUserResponseDto;
export type UserControllerGetUserApiArg = {
  /** ID of the user */
  userId: string;
};
export type AuthControllerLoginApiResponse =
  /** status 201  */ LoginResponseDto;
export type AuthControllerLoginApiArg = {
  loginRequestDto: LoginRequestDto;
};
export type AuthControllerVerifyAccountApiResponse =
  /** status 200  */ VerifyAccountResponseDto;
export type AuthControllerVerifyAccountApiArg = {
  verifyAccountRequestDto: VerifyAccountRequestDto;
};
export type AuthControllerResendOtpApiResponse =
  /** status 201  */ ResendOtpResponseDto;
export type AuthControllerResendOtpApiArg = {
  resendOtpRequestDto: ResendOtpRequestDto;
};
export type AuthControllerVerifyOtpApiResponse =
  /** status 201  */ VerifyOtpResponseDto;
export type AuthControllerVerifyOtpApiArg = {
  verifyOtpRequestDto: VerifyOtpRequestDto;
};
export type AuthControllerGetLoggedInUserApiResponse =
  /** status 200  */ UserEntity;
export type AuthControllerGetLoggedInUserApiArg = void;
export type AuthControllerRefreshTokenApiResponse =
  /** status 200  */ RefreshTokenResponseDto;
export type AuthControllerRefreshTokenApiArg = void;
export type AuthControllerResetPasswordApiResponse =
  /** status 200  */ ResetPasswordResponseDto;
export type AuthControllerResetPasswordApiArg = {
  resetPasswordRequestDto: ResetPasswordRequestDto;
};
export type AuthControllerResetForgottenPasswordApiResponse =
  /** status 200  */ ResetForgottenPasswordResponseDto;
export type AuthControllerResetForgottenPasswordApiArg = {
  resetForgottenPasswordRequestDto: ResetForgottenPasswordRequestDto;
};
export type AuthControllerSendResetForgottenPasswordCodeApiResponse =
  /** status 201  */ SendResetForgottenPasswordCodeResponseDto;
export type AuthControllerSendResetForgottenPasswordCodeApiArg = {
  sendResetForgottenPasswordCodeRequestDto: SendResetForgottenPasswordCodeRequestDto;
};
export type AuthControllerLogoutApiResponse =
  /** status 200  */ LogoutResponseDto;
export type AuthControllerLogoutApiArg = void;
export type ResultControllerCreateManualResultApiResponse =
  /** status 201  */ CreateManualResultResponseDto;
export type ResultControllerCreateManualResultApiArg = {
  createManualResultRequestDto: CreateManualResultRequestDto;
};
export type ResultControllerGetResultsApiResponse =
  /** status 200  */ GetResultsResponseDto;
export type ResultControllerGetResultsApiArg = {
  /** Number of records to fetch per page */
  limit: number;
  /** Current page number */
  page: number;
  /** Filter json object */
  filter: string;
  /** Order json object */
  order: string;
};
export type ResultControllerGetResultStatisticsApiResponse =
  /** status 200  */ GetResultStatisticsResponseDto;
export type ResultControllerGetResultStatisticsApiArg = {
  /** Filter json object */
  filter?: string;
};
export type ResultControllerGetPresidentialResultsApiResponse =
  /** status 200  */ GetPresidentialResultsResponseDto;
export type ResultControllerGetPresidentialResultsApiArg = {
  /** Filter json object */
  filter?: string;
};
export type ResultControllerGetPartyParliamentaryResultsApiResponse =
  /** status 200  */ GetPartyParliamentaryResultResponseDto;
export type ResultControllerGetPartyParliamentaryResultsApiArg = {
  /** Filter json object */
  filter?: string;
};
export type ResultControllerGetCandidateParliamentaryResultsApiResponse =
  /** status 200  */ GetCandidateParliamentaryResultResponseDto;
export type ResultControllerGetCandidateParliamentaryResultsApiArg = {
  /** Filter json object */
  filter?: string;
};
export type ResultControllerGetResultApiResponse =
  /** status 200  */ GetResultResponseDto;
export type ResultControllerGetResultApiArg = {
  /** ID of the result */
  resultId: string;
};
export type ResultControllerGetVoteApiResponse =
  /** status 200  */ GetVoteResponseDto;
export type ResultControllerGetVoteApiArg = {
  /** ID of the vote */
  voteId: string;
};
export type ResultControllerGetVotesApiResponse =
  /** status 200  */ GetVotesResponseDto;
export type ResultControllerGetVotesApiArg = {
  /** Number of records to fetch per page */
  limit: number;
  /** Current page number */
  page: number;
  /** Filter json object */
  filter: string;
  /** Order json object */
  order: string;
};
export type ResultControllerGetVotesCountApiResponse =
  /** status 200  */ GetVotesCountResponseDto;
export type ResultControllerGetVotesCountApiArg = {
  filter: string;
};
export type ResultControllerAcceptResultApiResponse =
  /** status 200  */ AcceptResultResponseDto;
export type ResultControllerAcceptResultApiArg = {
  acceptResultRequestDto: AcceptResultRequestDto;
};
export type ResultControllerRejectResultApiResponse =
  /** status 200  */ RejectResultsResponseDto;
export type ResultControllerRejectResultApiArg = {
  rejectResultsRequestDto: RejectResultsRequestDto;
};
export type ResultControllerUploadPinkSheetApiResponse =
  /** status 201  */ UploadPinkSheetResponseDto;
export type ResultControllerUploadPinkSheetApiArg = {
  uploadPinkSheetRequestDto: UploadPinkSheetRequestDto;
};
export type UssdSessionControllerUploadUssdResultApiResponse =
  /** status 201  */ MakeUssdRequestResponseDto;
export type UssdSessionControllerUploadUssdResultApiArg = {
  makeUssdRequestDto: MakeUssdRequestDto;
};
export type UserEntity = {
  /** Primary auto-generated UUID of the entity */
  id: string;
  /** Date when the record was created */
  createdAt: string;
  /** Date when the record was last updated */
  updatedAt?: string;
  /** User's first name */
  firstName: string;
  /** User's last name */
  lastName: string;
  /** User's email */
  email?: string;
  /** User's telephone number */
  phone?: string;
  /** User's access level */
  accessLevel:
    | "CONSTITUENCY"
    | "REGION"
    | "NATION"
    | "ZONE"
    | "TOWN"
    | "POLLING_STATION";
  /** User's role */
  role: "SUPER_ADMIN" | "ADMIN" | "SUPERVISOR" | "MERCHANT" | "AGENT";
  /** User's sex */
  sex: "MALE" | "FEMALE";
  /** User's nation */
  nation: NationEntity;
  /** User's region */
  region?: RegionEntity;
  /** User's zone */
  zone?: ZoneEntity;
  /** User's constituency */
  constituency?: ConstituencyEntity;
  /** User's polling station */
  town?: TownEntity;
  /** Poling station of the agent */
  pollingStation?: PollingStationEntity;
  /** Status of the user phone verification */
  hasVerifiedPhone: boolean;
  /** Status of the user email verification */
  hasVerifiedEmail: boolean;
  /** Specifies whether the user's account is revoked */
  isBlocked: boolean;
  /** Results uploaded by the user */
  results?: ResultEntity[];
  /** Results confirmed by the user */
  confirmedResults?: ResultEntity[];
  /** Profile picture URL of the user */
  profilePictureUrl?: string;
  /** Profile picture key of the user */
  profilePictureKey?: string;
  /** National ID card picture URL of the user if the user is an agent */
  nationalIdCardPictureUrl?: string;
  /** National ID card picture key of the user if the user is an agent */
  nationalIdCardPictureKey?: string;
  /** USSD sessions created by a user(agent) */
  ussdSessions?: UssdSessionEntity[];
};
export type UssdSessionStepEntity = {
  /** Primary auto-generated UUID of the entity */
  id: string;
  /** Date when the record was created */
  createdAt: string;
  /** Date when the record was last updated */
  updatedAt?: string;
  /** The step number */
  step: number;
  /** Data submitted by the user */
  data: string;
  /** The USSD session */
  ussdSession: UssdSessionEntity;
};
export type UssdSessionEntity = {
  /** Primary auto-generated UUID of the entity */
  id: string;
  /** Date when the record was created */
  createdAt: string;
  /** Date when the record was last updated */
  updatedAt?: string;
  /** Telephone number of the agent */
  telephone: string;
  /** user(agent) who created the session */
  agent: UserEntity;
  /** ID of the session */
  sessionId: string;
  /** Status of the USSD session */
  status: "PENDING" | "REJECTED" | "CONFIRMED";
  /** The steps in the session */
  steps?: UssdSessionStepEntity[];
  /** A list of IDs of candidates whose votes have already been captured */
  capturedCandidateIds?: string[];
  /** Next step number */
  nextStep: number;
  pollingStation: PollingStationEntity;
  /** The valid votes submitted */
  votes?: VoteEntity[];
  /** Type of election */
  electionType?: "PRESIDENTIAL" | "PARLIAMENTARY" | "ASSEMBLY" | "COMMITTEE";
  /** The rejected votes submitted */
  rejectedVotes?: number;
};
export type VoteEntity = {
  /** Primary auto-generated UUID of the entity */
  id: string;
  /** Date when the record was created */
  createdAt: string;
  /** Date when the record was last updated */
  updatedAt?: string;
  /** The number of votes gained */
  votes: number;
  /** The candidate who has the vote */
  candidate: CandidateEntity;
  /** The result set the vote belongs to */
  result?: ResultEntity;
  /** The session if vote was created via a USSD request */
  ussdSession?: UssdSessionEntity;
};
export type ResultEntity = {
  /** Primary auto-generated UUID of the entity */
  id: string;
  /** Date when the record was created */
  createdAt: string;
  /** Date when the record was last updated */
  updatedAt?: string;
  /** Valid votes */
  votes?: VoteEntity[];
  /** Number of rejected/invalid votes */
  rejectedVotes: number;
  /** Agent who uploaded the result */
  agent: UserEntity;
  /** Status of the result */
  status: "PENDING_CONFIRMATION" | "ACCEPTED" | "REJECTED";
  nation: NationEntity;
  region: RegionEntity;
  zone: ZoneEntity;
  town: TownEntity;
  /** The constituency that the result is uploaded for */
  constituency: ConstituencyEntity;
  /** Polling station that the result is uploaded for */
  pollingStation: PollingStationEntity;
  /** The type of election */
  electionType: "PRESIDENTIAL" | "PARLIAMENTARY" | "ASSEMBLY" | "COMMITTEE";
  confirmedBy?: UserEntity;
  imageUrl?: string;
  imageKey?: string;
  uploadMethod: "MANUAL" | "USSD" | "AI";
};
export type PollingStationEntity = {
  /** Primary auto-generated UUID of the entity */
  id: string;
  /** Date when the record was created */
  createdAt: string;
  /** Date when the record was last updated */
  updatedAt?: string;
  /** Name of the polling station */
  name: string;
  /** Unique code of the polling station */
  code: string;
  /** Old unique code of the polling station */
  oldCode?: string;
  /** Total number of voters at the polling station */
  totalNumberOfVoters: number;
  /** Region of the polling station */
  region: RegionEntity;
  /** Nation of the polling station */
  nation: NationEntity;
  /** Zone of the polling station */
  zone: ZoneEntity;
  /** Constituency of the polling station */
  constituency: ConstituencyEntity;
  /** Town of the polling station */
  town: TownEntity;
  /** Results at the polling station */
  results?: ResultEntity[];
  /** Agent assigned to the polling station */
  agent: UserEntity;
  /** USSD sessions created for the polling station */
  ussdSessions?: UssdSessionEntity[];
};
export type TownEntity = {
  /** Primary auto-generated UUID of the entity */
  id: string;
  /** Date when the record was created */
  createdAt: string;
  /** Date when the record was last updated */
  updatedAt?: string;
  /** Name of the town */
  name: string;
  /** Town code */
  code?: string;
  /** Region of the town */
  region: RegionEntity;
  /** Nation of the town */
  nation: NationEntity;
  /** Zone of the town */
  zone: ZoneEntity;
  /** Constituency of the town */
  constituency: ConstituencyEntity;
  /** Polling stations in the town */
  pollingStations?: PollingStationEntity[];
  /** Users assigned to the town */
  users?: UserEntity[];
  /** Candidates that represent the town */
  candidates?: CandidateEntity[];
  /** Region's results */
  results: ResultEntity[];
};
export type ConstituencyEntity = {
  /** Primary auto-generated UUID of the entity */
  id: string;
  /** Date when the record was created */
  createdAt: string;
  /** Date when the record was last updated */
  updatedAt?: string;
  /** Name of the constituency */
  name: string;
  /** Region of the constituency */
  region: RegionEntity;
  /** Nation of the constituency */
  nation: NationEntity;
  /** Zone of the constituency */
  zone: ZoneEntity;
  /** The towns that make up the constituency */
  towns?: TownEntity[];
  /** The polling stations found in the constituency */
  pollingStations?: PollingStationEntity[];
  /** Users assigned to the constituency */
  users?: UserEntity[];
  /** Candidates that belong to the constituency */
  candidates?: CandidateEntity[];
  /** Map of the constituency */
  map?: string;
  /** The district of the constituency */
  district: string;
  results: ResultEntity[];
};
export type ZoneEntity = {
  /** Primary auto-generated UUID of the entity */
  id: string;
  /** Date when the record was created */
  createdAt: string;
  /** Date when the record was last updated */
  updatedAt?: string;
  /** Name of the zone */
  name: string;
  /** Region of the zone */
  region: RegionEntity;
  /** Nation of the zone */
  nation: NationEntity;
  /** Constituencies that make up the zone */
  constituencies?: ConstituencyEntity[];
  /** Towns in the zone */
  towns?: TownEntity[];
  /** Polling stations in the zone */
  pollingStations?: PollingStationEntity[];
  /** Users assigned to the zone */
  users?: UserEntity[];
  /** Candidates that represent the zone */
  candidates?: CandidateEntity[];
  /** Region's results */
  results: ResultEntity[];
};
export type RegionEntity = {
  /** Primary auto-generated UUID of the entity */
  id: string;
  /** Date when the record was created */
  createdAt: string;
  /** Date when the record was last updated */
  updatedAt?: string;
  /** Name of the region */
  name: string;
  /** Nation of the region */
  nation: NationEntity;
  /** Zones in the region */
  zones?: ZoneEntity[];
  /** Constituencies in the region */
  constituencies?: ConstituencyEntity[];
  /** Towns in the region */
  towns?: TownEntity[];
  /** Polling stations in the region */
  pollingStations?: PollingStationEntity[];
  users?: UserEntity[];
  /** Candidates in the region */
  candidates: CandidateEntity[];
  /** Region's results */
  results: ResultEntity[];
};
export type NationEntity = {
  /** Primary auto-generated UUID of the entity */
  id: string;
  /** Date when the record was created */
  createdAt: string;
  /** Date when the record was last updated */
  updatedAt?: string;
  /** The country code of the nation */
  countryCode: string;
  /** Regions of the country */
  regions?: RegionEntity[];
  /** Zones of the country */
  zones?: ZoneEntity[];
  /** Constituencies of the country */
  constituencies?: ConstituencyEntity[];
  /** Towns of the country */
  towns?: TownEntity[];
  /** Polling stations of the country */
  pollingStations?: PollingStationEntity[];
  users?: UserEntity[];
  /** Candidates of the country */
  candidates?: CandidateEntity[];
  /** Nation's results */
  results: ResultEntity[];
};
export type CandidateEntity = {
  /** Primary auto-generated UUID of the entity */
  id: string;
  /** Date when the record was created */
  createdAt: string;
  /** Date when the record was last updated */
  updatedAt?: string;
  /** Full name of the candidate */
  fullName: string;
  /** Type of candidate */
  type: "PRESIDENTIAL" | "PARLIAMENTARY" | "ASSEMBLY" | "COMMITTEE";
  /** Party the candidate represents. Null if the candidate is independent(belongs to no party). */
  party?: PartyEntity;
  /** Nation the candidate represents. */
  nation: NationEntity;
  /** Region the candidate represents. */
  region?: RegionEntity;
  /** Zone the candidate represents */
  zone?: ZoneEntity;
  /** Constituency the candidate represents */
  constituency?: ConstituencyEntity;
  /** Town the candidate represents */
  town?: TownEntity;
  /** Candidate's votes */
  votes?: VoteEntity[];
  /** Key of headshot of the candidate */
  candidatePictureKey?: string;
  /** Url of headshot of the candidate */
  candidatePictureUrl?: string;
};
export type PartyEntity = {
  /** Primary auto-generated UUID of the entity */
  id: string;
  /** Date when the record was created */
  createdAt: string;
  /** Date when the record was last updated */
  updatedAt?: string;
  /** Name of the party */
  name: string;
  /** URL of the party logo */
  logoUrl?: string;
  /** Key of the party logo */
  logoKey?: string;
  /** Color code of the party */
  color?: string;
  /** Candidates that represent the party */
  candidates?: CandidateEntity[];
};
export type CreatePartyResponseDto = {
  /** The created party record */
  party: PartyEntity | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type CreatePartyRequestDto = {
  /** Logo of the party. Allowed file types: 'image/jpeg', 'image/jpg', 'image/png' */
  logo?: Blob;
  /** Name of the party */
  name: string;
  /** Color code of the party */
  colorCode?: string;
};
export type PaginationLinks = {
  first?: string;
  previous?: string;
  next?: string;
  last?: string;
};
export type PaginationMeta = {
  itemCount: number;
  totalItems?: number;
  itemsPerPage: number;
  totalPages?: number;
  currentPage: number;
};
export type PaginatedParty = {
  items: PartyEntity[];
  /** Pagination links */
  links?: PaginationLinks;
  meta: PaginationMeta;
};
export type GetPartiesResponseDto = {
  /** Party records object */
  parties: PaginatedParty | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type GetPartyResponseDto = {
  /** The party record */
  party: PartyEntity | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type UpdatePartyResponseDto = {
  /** ID of the updated party */
  partyId: string;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type UpdatePartyRequestDto = {
  /** Logo of the party. Allowed file types: 'image/jpeg', 'image/jpg', 'image/png' */
  logo?: Blob;
  /** Name of the party */
  name?: string;
  /** Color code of the party */
  colorCode?: string;
};
export type DeletePartyResponseDto = {
  /** ID of the deleted party */
  partyId: string;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type CreateCandidateResponseDto = {
  /** The created candidate */
  candidate: CandidateEntity | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type CreateCandidateRequestDto = {
  /** Headshot of the candidate. Allowed file types: 'image/jpeg', 'image/jpg', 'image/png' */
  candidatePicture?: Blob;
  /** Full name of the candidate */
  fullName: string;
  /** Type of candidate */
  type: "PRESIDENTIAL" | "PARLIAMENTARY" | "ASSEMBLY" | "COMMITTEE";
  /** ID of the party the candidate represents. Optional if the candidate is independent(belongs to no party) */
  partyId?: string;
  /** ID of the nation the candidate represents */
  nationId: string;
  /** ID of the region the candidate represents */
  regionId?: string;
  /** ID of the zone the candidate represents */
  zoneId?: string;
  /** ID of the constituency the candidate represents */
  constituencyId?: string;
  /** ID of the town the candidate represents */
  townId?: string;
};
export type PaginatedCandidate = {
  items: CandidateEntity[];
  /** Pagination links */
  links?: PaginationLinks;
  meta: PaginationMeta;
};
export type GetCandidatesResponseDto = {
  /** Candidate records object */
  candidates: PaginatedCandidate | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type GetCandidateResponseDto = {
  /** The candidate record */
  candidate: CandidateEntity | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type UpdateCandidateResponseDto = {
  /** ID of the candidate */
  candidateId: string;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type UpdateCandidateRequestDto = {
  /** Headshot of the candidate. Allowed file types: 'image/jpeg', 'image/jpg', 'image/png' */
  candidatePicture?: Blob;
  /** Full name of the candidate */
  fullName?: string;
  /** Type of candidate */
  type?: "PRESIDENTIAL" | "PARLIAMENTARY" | "ASSEMBLY" | "COMMITTEE";
  /** ID of the party the candidate represents. Optional if the candidate is independent(belongs to no party) */
  partyId?: string;
  /** ID of the nation the candidate represents */
  nationId?: string;
  /** ID of the region the candidate represents */
  regionId?: string;
  /** ID of the zone the candidate represents */
  zoneId?: string;
  /** ID of the constituency the candidate represents */
  constituencyId?: string;
  /** ID of the town the candidate represents */
  townId?: string;
};
export type DeleteCandidateResponseDto = {
  /** ID of the deleted candidate */
  candidateId: string;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type CreateNationResponseDto = {
  /** The created nation record */
  nation: NationEntity;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type CreateNationRequestDto = {
  /** Country code of the nation */
  countryCode: string;
};
export type PaginatedNation = {
  items: NationEntity[];
  /** Pagination links */
  links?: PaginationLinks;
  meta: PaginationMeta;
};
export type GetNationsResponseDto = {
  /** Nation records object */
  nations: PaginatedNation | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type GetNationResponseDto = {
  /** The nation record */
  nation: NationEntity;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type UpdateNationResponseDto = {
  /** ID of the nation */
  nationId: string;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type UpdateNationRequestDto = {
  /** Country code of the nation */
  countryCode?: string;
};
export type CreateRegionResponseDto = {
  /** The created region record */
  region: RegionEntity | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type CreateRegionRequestDto = {
  /** Name of the region */
  name: string;
  /** ID of the nation the region belongs to */
  nationId: string;
};
export type PaginatedRegion = {
  items: RegionEntity[];
  /** Pagination links */
  links?: PaginationLinks;
  meta: PaginationMeta;
};
export type GetRegionsResponse = {
  /** Region records object */
  regions: PaginatedRegion | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type GetRegionResponseDto = {
  /** Created region */
  region: RegionEntity | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type UpdateRegionsResponseDto = {
  /** ID of the updated region */
  regionId: string;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type UpdateRegionRequestDto = {
  /** Name of the region */
  name?: string;
  /** ID of the nation the region belongs to */
  nationId?: string;
};
export type CreateZoneResponseDto = {
  /** The created zone */
  zone: ZoneEntity | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type CreateZoneRequestDto = {
  /** Name of the zone */
  name: string;
  /** Region ID of the zone */
  regionId: string;
  /** Nation ID of the zone */
  nationId: string;
};
export type PaginatedZone = {
  items: ZoneEntity[];
  /** Pagination links */
  links?: PaginationLinks;
  meta: PaginationMeta;
};
export type GetZonesResponseDto = {
  /** Zone records object */
  zones: PaginatedZone | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type GetZoneResponseDto = {
  /** The zone record */
  zone: ZoneEntity | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type UpdateZoneResponseDto = {
  /** ID of the updated zone */
  zoneId: string;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type UpdateZoneRequestDto = {
  /** Name of the zone */
  name?: string;
  /** Region ID of the zone */
  regionId?: string;
  /** Nation ID of the zone */
  nationId?: string;
};
export type CreateConstituencyResponseDto = {
  /** The created constituency */
  constituency: ConstituencyEntity | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type CreateConstituencyRequestDto = {
  /** Name of the constituency */
  name: string;
  /** Region ID of the constituency */
  regionId: string;
  /** ID of the nation of the constituency */
  nationId: string;
  /** ID of the zone of the constituency */
  zoneId: string;
  /** Map of the constituency */
  map?: string;
  /** The district of the constituency */
  district?: string;
};
export type PaginatedConstituency = {
  items: ConstituencyEntity[];
  /** Pagination links */
  links?: PaginationLinks;
  meta: PaginationMeta;
};
export type GetConstituenciesResponseDto = {
  /** Constituency records object */
  constituencies: PaginatedConstituency | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type GetConstituencyResponseDto = {
  constituency: ConstituencyEntity | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type UpdateConstituencyResponseDto = {
  /** ID of the updated constituency */
  constituencyId: string;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type UpdateConstituencyRequestDto = {
  /** Name of the constituency */
  name?: string;
  /** Region ID of the constituency */
  regionId?: string;
  /** ID of the nation of the constituency */
  nationId?: string;
  /** ID of the zone of the constituency */
  zoneId?: string;
  /** Map of the constituency */
  map?: string;
  /** The district of the constituency */
  district?: string;
};
export type DeleteConstituencyResponseDto = {
  /** ID of the deleted constituency */
  constituencyId: string;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type CreateTownResponseDto = {
  /** The created town */
  town: TownEntity | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type CreateTownRequestDto = {
  /** Name of the town */
  name: string;
  /** Town code */
  code?: string;
  /** ID of the region of the town */
  regionId: string;
  /** ID of the nation of the town */
  nationId: string;
  /** ID of the zone of the town */
  zoneId: string;
  /** ID of the constituency of the town */
  constituencyId: string;
};
export type PaginatedTown = {
  items: TownEntity[];
  /** Pagination links */
  links?: PaginationLinks;
  meta: PaginationMeta;
};
export type GetTownsResponseDto = {
  /** Town records object */
  towns: PaginatedTown | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type GetTownResponseDto = {
  /** The town record */
  town: TownEntity | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type UpdateTownResponseDto = {
  /** ID of the updated town */
  townId: string;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type UpdateTownRequestDto = {
  /** Name of the town */
  name?: string;
  /** Town code */
  code?: string;
  /** ID of the region of the town */
  regionId?: string;
  /** ID of the nation of the town */
  nationId?: string;
  /** ID of the zone of the town */
  zoneId?: string;
  /** ID of the constituency of the town */
  constituencyId?: string;
};
export type CreatePollingStationResponseDto = {
  /** The created polling station record */
  pollingStation: PollingStationEntity | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type CreatePollingStationRequestDto = {
  /** Name of the polling station */
  name: string;
  /** Unique code of the polling station */
  code: string;
  /** Old unique code of the polling station */
  oldCode?: string;
  /** Total number of voters at the polling station */
  totalNumberOfVoters: number;
  /** ID of the region of the polling station */
  regionId: string;
  /** ID of the nation of the polling station */
  nationId: string;
  /** ID of the zone of the polling station */
  zoneId: string;
  /** ID of the constituency of the polling station */
  constituencyId: string;
  /** ID of the town of the polling station */
  townId: string;
  /** Agent to be assigned to the polling station */
  agentId: string;
};
export type PaginatedPollingStation = {
  items: PollingStationEntity[];
  /** Pagination links */
  links?: PaginationLinks;
  meta: PaginationMeta;
};
export type GetPollingStationsResponseDto = {
  /** Polling station records object */
  pollingStations: PaginatedPollingStation | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type GetPollingStationResponseDto = {
  /** The polling station record */
  pollingStation: PollingStationEntity | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type UpdatePollingStationResponseDto = {
  /** ID of the updated polling station */
  pollingStationId: string;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type UpdatePollingStationRequestDto = {
  /** Name of the polling station */
  name?: string;
  /** Unique code of the polling station */
  code?: string;
  /** Old unique code of the polling station */
  oldCode?: string;
  /** Total number of voters at the polling station */
  totalNumberOfVoters?: number;
  /** ID of the region of the polling station */
  regionId?: string;
  /** ID of the nation of the polling station */
  nationId?: string;
  /** ID of the zone of the polling station */
  zoneId?: string;
  /** ID of the constituency of the polling station */
  constituencyId?: string;
  /** ID of the town of the polling station */
  townId?: string;
  /** Agent to be assigned to the polling station */
  agentId?: string;
};
export type CreateUserResponseDto = {
  /** The created user */
  user: object | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type CreateUserRequestDto = {
  /** Profile picture of the user. Allowed file types: 'image/jpeg', 'image/jpg', 'image/png' */
  profilePicture?: Blob;
  /** If the user is an agent, upload a picture of their national ID card. Allowed file types: 'image/jpeg', 'image/jpg', 'image/png' */
  nationalIdCardPicture?: Blob;
  /** First name of the user */
  firstName: string;
  /** Last name of the user */
  lastName: string;
  /** Email of the user */
  email?: string;
  /** Telephone number of the user */
  phone: string;
  /** Password provided by the user. The minimum length of the password should be 8 characters. */
  password: string;
  /** Access level of the user */
  accessLevel:
    | "CONSTITUENCY"
    | "REGION"
    | "NATION"
    | "ZONE"
    | "TOWN"
    | "POLLING_STATION";
  /** Role of the user */
  role: "SUPER_ADMIN" | "ADMIN" | "SUPERVISOR" | "MERCHANT" | "AGENT";
  /** Sex of the user */
  sex: "MALE" | "FEMALE";
  /** ID of the nation the user belongs to */
  nationId: string;
  /** ID of the region the user belongs to */
  regionId: string;
  /** ID of the zone the user belongs to */
  zoneId?: string;
  /** ID of the constituency the user belongs to */
  constituencyId?: string;
  /** ID of the town the user belongs to */
  townId?: string;
  /** ID of the polling station the user belongs to */
  pollingStationId?: string;
};
export type PaginatedUser = {
  items: UserEntity[];
  /** Pagination links */
  links?: PaginationLinks;
  meta: PaginationMeta;
};
export type GetUsersResponseDto = {
  /** User records object */
  users: PaginatedUser | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type UpdateUserResponseDto = {
  /** ID of the user */
  userId: string | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type UpdateUserRequestDto = {
  /** Profile picture of the user. Allowed file types: 'image/jpeg', 'image/jpg', 'image/png' */
  profilePicture?: Blob;
  /** First name of the user */
  firstName?: string;
  /** Last name of the user */
  lastName?: string;
  /** Sex of the user */
  sex?: "MALE" | "FEMALE";
};
export type GetUserResponseDto = {
  /** The user record */
  user: UserEntity | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type LoginResponseDto = {
  /** Response from sending OTP */
  message: string;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type LoginRequestDto = {
  /** Provide the phone number or email of the user */
  username: string;
  /** Password of the user */
  password: string;
};
export type VerifyAccountResponseDto = {
  /** The response message */
  message: string | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type VerifyAccountRequestDto = {
  /** Email of the user */
  email?: string;
  /** Phone number of the user */
  phone?: string;
  /** OTP sent to the user */
  otp: string;
};
export type ResendOtpResponseDto = {
  /** Response from sending OTP */
  message: string;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type ResendOtpRequestDto = {
  /** Email of the user */
  email?: string;
  /** Phone number of the user */
  phone?: string;
};
export type VerifyOtpResponseDto = {
  /** The access token to be passed as Authorization header for subsequent authenticated requests. This token is short-lived. */
  accessToken: string | null;
  /** The refresh token to be passed as Authorization header to get a new access token when it expires. This token is long-lived. */
  refreshToken: string | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type VerifyOtpRequestDto = {
  /** Email of the user */
  email?: string;
  /** Phone number of the user */
  phone?: string;
  /** OTP sent to the user */
  otp: string;
};
export type RefreshTokenResponseDto = {
  /** The access token to be passed as Authorization header for subsequent authenticated requests. This token is short-lived. */
  accessToken: string | null;
  /** The refresh token to be passed as Authorization header to get a new access token when it expires. This token is long-lived. */
  refreshToken: string | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type ResetPasswordResponseDto = {
  /** The ID of the user */
  userId: string;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type ResetPasswordRequestDto = {
  /** The user's current password */
  currentPassword: string;
  /** The user's new password */
  newPassword: string;
};
export type ResetForgottenPasswordResponseDto = {
  /** The ID of the user */
  userId: string;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type ResetForgottenPasswordRequestDto = {
  /** The token sent in the reset forgotten password sms/email */
  token: string;
  /** The new password */
  newPassword: string;
};
export type SendResetForgottenPasswordCodeResponseDto = {
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type SendResetForgottenPasswordCodeRequestDto = {};
export type LogoutResponseDto = {
  success: boolean;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type CreateManualResultResponseDto = {
  /** The created result */
  result: ResultEntity | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type CreateManualVoteRequestDto = {
  /** The number of votes gained */
  votes: number;
  /** ID of the candidate the vote belongs to */
  candidateId: string;
};
export type CreateManualResultRequestDto = {
  /** List of valid votes */
  votes: CreateManualVoteRequestDto[];
  /** Number of rejected/invalid votes */
  rejectedVotes: number;
  /** ID of the polling station that the result is uploaded for */
  pollingStationId: string;
  /** The type of election */
  electionType: "PRESIDENTIAL" | "PARLIAMENTARY" | "ASSEMBLY" | "COMMITTEE";
};
export type PaginatedResult = {
  items: ResultEntity[];
  /** Pagination links */
  links?: PaginationLinks;
  meta: PaginationMeta;
};
export type GetResultsResponseDto = {
  /** Result records object */
  results: PaginatedResult | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type ResultStatistics = {
  /** Total number of votes cast */
  totalVotes: number;
  /** Total number of rejected votes */
  rejectedVotes: number;
  /** Total number of accepted results */
  acceptedResults: number;
  /** Total number of rejected results */
  rejectedResults: number;
  /** Total number of results submitted */
  totalResults: number;
};
export type GetResultStatisticsResponseDto = {
  statistics: ResultStatistics;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type PresidentialResult = {
  /** The candidate */
  candidate: CandidateEntity;
  /** Total votes gained by the candidate */
  totalVotes: number;
};
export type GetPresidentialResultsResponseDto = {
  results: PresidentialResult[];
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type PartyParliamentaryResult = {
  /** The party */
  party: PartyEntity;
  /** Total seats won */
  totalVotes: number;
};
export type GetPartyParliamentaryResultResponseDto = {
  results: PartyParliamentaryResult[];
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type CandidateParliamentaryResult = {
  /** The candidate */
  candidate: CandidateEntity;
  /** Total votes won */
  totalVotes: number;
};
export type GetCandidateParliamentaryResultResponseDto = {
  results: CandidateParliamentaryResult[];
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type GetResultResponseDto = {
  /** The result */
  result: ResultEntity | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type GetVoteResponseDto = {
  /** The vote */
  vote: VoteEntity | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type PaginatedVote = {
  items: VoteEntity[];
  /** Pagination links */
  links?: PaginationLinks;
  meta: PaginationMeta;
};
export type GetVotesResponseDto = {
  /** Vote records object */
  votes: PaginatedVote | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type GetVotesCountResponseDto = {
  /** Number of votes */
  votes: number;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type AcceptResultResponseDto = {
  /** ID of the result */
  resultId: string;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type AcceptResultRequestDto = {
  /** ID of the result */
  resultId: string;
};
export type RejectResultsResponseDto = {
  /** ID of the polling station */
  pollingStationId: string;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type RejectResultsRequestDto = {
  /** ID of the polling station */
  pollingStationId: string;
};
export type UploadPinkSheetResponseDto = {
  /** The created result */
  result: ResultEntity | null;
  /** Http status code for response */
  status: number;
  /** Http error message */
  error: string;
  /** Application error code. Useful for troubleshooting and reports */
  errorCode?: 224100 | 224101 | 224102 | 224103;
};
export type UploadPinkSheetRequestDto = {
  /** The image of the pink sheet. Allowed file types: 'image/jpeg', 'image/jpg', 'image/png' */
  pinkSheet?: Blob;
  /** ID of the polling station the result is being uploded for */
  pollingStationId: string;
  /** The type of election */
  electionType: "PRESIDENTIAL" | "PARLIAMENTARY" | "ASSEMBLY" | "COMMITTEE";
};
export type MakeUssdRequestResponseDto = {
  /** The app on the ussd platform */
  USERID: string;
  /** The phone number making the request. */
  MSISDN: string;
  /** The input from the request. */
  USERDATA: string;
  /** The instruction to the user for the next request. */
  MSG: string;
  /** true means the request will continue,
    false means do not continue after this request. */
  MSGTYPE: boolean;
};
export type MakeUssdRequestDto = {
  /** The app on the ussd platform */
  USERID: string;
  /** The phone number making the request. */
  MSISDN: string;
  /** The input from the request. */
  USERDATA: string;
  /** Network provider from the request. */
  NETWORK: string;
  /** ID of the USSD session */
  SESSIONID: string;
  /** true means the request will continue,
    false means do not continue after this request. */
  MSGTYPE: boolean;
};
export const {
  useAppControllerGetHelloQuery,
  useLazyAppControllerGetHelloQuery,
  usePartyControllerCreatePartyMutation,
  usePartyControllerGetPartiesQuery,
  useLazyPartyControllerGetPartiesQuery,
  usePartyControllerGetPartyQuery,
  useLazyPartyControllerGetPartyQuery,
  usePartyControllerUpdatePartyMutation,
  usePartyControllerDeletePartyMutation,
  useCandidateControllerCreateCandidateMutation,
  useCandidateControllerGetCandidatesQuery,
  useLazyCandidateControllerGetCandidatesQuery,
  useCandidateControllerGetCandidateQuery,
  useLazyCandidateControllerGetCandidateQuery,
  useCandidateControllerUpdateCandidateMutation,
  useCandidateControllerDeleteCandidateMutation,
  useNationControllerCreateNationMutation,
  useNationControllerGetNationsQuery,
  useLazyNationControllerGetNationsQuery,
  useNationControllerGetNationQuery,
  useLazyNationControllerGetNationQuery,
  useNationControllerUpdateNationMutation,
  useRegionControllerCreateRegionMutation,
  useRegionControllerGetRegionsQuery,
  useLazyRegionControllerGetRegionsQuery,
  useRegionControllerGetRegionQuery,
  useLazyRegionControllerGetRegionQuery,
  useRegionControllerUpdateRegionMutation,
  useZoneControllerCreateZoneMutation,
  useZoneControllerGetZonesQuery,
  useLazyZoneControllerGetZonesQuery,
  useZoneControllerGetZoneQuery,
  useLazyZoneControllerGetZoneQuery,
  useZoneControllerUpdateZoneMutation,
  useConstituencyControllerCreateConstituencyMutation,
  useConstituencyControllerGetConstituenciesQuery,
  useLazyConstituencyControllerGetConstituenciesQuery,
  useConstituencyControllerGetConstituencyQuery,
  useLazyConstituencyControllerGetConstituencyQuery,
  useConstituencyControllerUpdateConstituecyMutation,
  useConstituencyControllerDeleteConstituecyMutation,
  useTownControllerCreateTownMutation,
  useTownControllerGetTownsQuery,
  useLazyTownControllerGetTownsQuery,
  useTownControllerGetTownQuery,
  useLazyTownControllerGetTownQuery,
  useTownControllerUpdateTownMutation,
  usePollingStationControllerCreatePollingStationMutation,
  usePollingStationControllerGetPollingStationsQuery,
  useLazyPollingStationControllerGetPollingStationsQuery,
  usePollingStationControllerGetPollingStationQuery,
  useLazyPollingStationControllerGetPollingStationQuery,
  usePollingStationControllerUpdatePollingStationMutation,
  useUserControllerCreateUserMutation,
  useUserControllerGetUsersQuery,
  useLazyUserControllerGetUsersQuery,
  useUserControllerUpdateUserMutation,
  useUserControllerGetUserQuery,
  useLazyUserControllerGetUserQuery,
  useAuthControllerLoginMutation,
  useAuthControllerVerifyAccountMutation,
  useAuthControllerResendOtpMutation,
  useAuthControllerVerifyOtpMutation,
  useAuthControllerGetLoggedInUserQuery,
  useLazyAuthControllerGetLoggedInUserQuery,
  useAuthControllerRefreshTokenQuery,
  useLazyAuthControllerRefreshTokenQuery,
  useAuthControllerResetPasswordMutation,
  useAuthControllerResetForgottenPasswordMutation,
  useAuthControllerSendResetForgottenPasswordCodeMutation,
  useAuthControllerLogoutQuery,
  useLazyAuthControllerLogoutQuery,
  useResultControllerCreateManualResultMutation,
  useResultControllerGetResultsQuery,
  useLazyResultControllerGetResultsQuery,
  useResultControllerGetResultStatisticsQuery,
  useLazyResultControllerGetResultStatisticsQuery,
  useResultControllerGetPresidentialResultsQuery,
  useLazyResultControllerGetPresidentialResultsQuery,
  useResultControllerGetPartyParliamentaryResultsQuery,
  useLazyResultControllerGetPartyParliamentaryResultsQuery,
  useResultControllerGetCandidateParliamentaryResultsQuery,
  useLazyResultControllerGetCandidateParliamentaryResultsQuery,
  useResultControllerGetResultQuery,
  useLazyResultControllerGetResultQuery,
  useResultControllerGetVoteQuery,
  useLazyResultControllerGetVoteQuery,
  useResultControllerGetVotesQuery,
  useLazyResultControllerGetVotesQuery,
  useResultControllerGetVotesCountQuery,
  useLazyResultControllerGetVotesCountQuery,
  useResultControllerAcceptResultMutation,
  useResultControllerRejectResultMutation,
  useResultControllerUploadPinkSheetMutation,
  useUssdSessionControllerUploadUssdResultMutation,
} = injectedRtkApi;
