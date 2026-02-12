import { useEffect, useState } from "react";
import axios from "axios";

export default function useAnimeSchedule(day) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  // const [pagination, setPagination] = useState();

  useEffect(() => {
    async function fetchAllData() {
      try {
        let allData = [];
        let currentPage = 1;
        let hasNextPage = true;

        while (hasNextPage) {
          let res = await axios.get(
            `https://api.jikan.moe/v4/schedules?filter=${day}&page=${currentPage}`,
            {
              headers: {
                Accept: "application/json",
              },
            },
          );

          allData = [...allData, ...res.data.data];

          hasNextPage = res.data.pagination.has_next_page;
          currentPage++;
        }
        let rawData = allData;

        // Source - https://stackoverflow.com/a
        // Posted by leonheess, modified by community. See post 'Timeline' for change history
        // Retrieved 2026-01-29, License - CC BY-SA 4.0
        const ids = rawData.map(({ mal_id }) => mal_id);
        const filtered = rawData.filter(
          ({ mal_id }, index) => !ids.includes(mal_id, index + 1),
        );

        const sorted = [...filtered].sort((a, b) => {
          return a.popularity - b.popularity;
        });

        setData(sorted);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    }

    fetchAllData();
  }, [day]);

  //   data.filter();
  return { data, error };
}
