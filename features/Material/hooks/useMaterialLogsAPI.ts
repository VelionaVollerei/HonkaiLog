import {MaterialLogsAPIFetchResponse} from "../../../pages/api/material/logs/[id]";
import {useSWRhook} from "../../../lib/SWR/useSWRhook";
import {SWRHookResult} from "../../../lib/SWR/SWRHookResult";

export function getMaterialLogsAPIKey(id: number) {
    return `/api/material/logs/${id}`;
}

/** SWR hook that give  logs data from the API alongside its logs */
export function useMaterialLogsAPI(id: number): SWRHookResult<MaterialLogsAPIFetchResponse> {
    return useSWRhook<MaterialLogsAPIFetchResponse>(getMaterialLogsAPIKey(id))
}

