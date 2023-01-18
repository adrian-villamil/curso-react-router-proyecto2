import { useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";

const useQuery = () => {
  const history = useHistory();
  const { search } = useLocation();

  const searchParams = useMemo(() => new URLSearchParams(search), [search]);
  const setSearchParams = (queryObject) => {
    for (const property in queryObject) {
      searchParams.set(property, queryObject[property]);
    }
    history.replace({ search: searchParams.toString() });
  };

  return { searchParams, setSearchParams };
}

export { useQuery };