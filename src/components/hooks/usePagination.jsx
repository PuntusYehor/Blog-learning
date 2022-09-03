import { getArray } from "../../utils/getCount"
import { useMemo } from "react"

export const usePagination = (elements) => useMemo(() => getArray(elements), [elements])