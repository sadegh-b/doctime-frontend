import { useQuery } from "@tanstack/react-query"

import {
  searchDoctors,
  SearchParams,
} from "../services/searchDoctors"

export function useDoctorsSearch(

  params: SearchParams

) {

  return useQuery({

    queryKey: ["doctors", params],

    queryFn: () => searchDoctors(params),

    placeholderData: (previousData) => previousData,

  })

}
