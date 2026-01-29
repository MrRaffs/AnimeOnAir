import useAnimeSchedule from "../api/getAnime";

export default function AnimeCards({ handleClick, day }) {
  const { data, error } = useAnimeSchedule(day);

  return (
    <div className="grid grid-cols-2 xs md:grid-cols-4 lg:grid-cols-6  gap-2 px-4 overflow-clip">
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
  );
}

function Card({ id, image, title, handleClick }) {
  //   console.log(image, title);
  return (
    <div
      onClick={() => handleClick(id)}
      className="
    flex flex-col bg-bg-primary p-2 rounded-lg max-h-56 w-40 overflow-clip text-ellipsis
    hover:scale-105 hover:cursor-pointer
    transition-transform duration-75 ease-in
    active:scale-95
    "
    >
      <img src={image} className="rounded-lg h-9/10" />
      <p className="text-xs max-w-max">{title}</p>
    </div>
  );
}
