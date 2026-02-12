import useAnimeSchedule from "./useAnimeSchedule";
import Card from "../../../../components/Card";

export default function AnimeGrid({ handleClick, day }) {
  const { data, error } = useAnimeSchedule(day);

  return (
    <section
      className="card-container w-full flex flex-col items-center-safe overflow-y-clip justify-center bg-bg-primary 
          mb-6 pb-6"
    >
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 
    justify-items-center-safe gap-y-4 overflow-clip
    xl:w-8/10"
      >
        {error ? (
          <span>Failed to fetch</span>
        ) : (
          data.map((anime) => (
            <Card
              key={anime.mal_id}
              id={anime.mal_id}
              image={anime.images.webp.image_url}
              title={anime.title}
              handleClick={handleClick}
            />
          ))
        )}
      </div>
    </section>
  );
}
