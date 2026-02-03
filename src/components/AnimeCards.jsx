import useAnimeSchedule from "../api/getAnime";

export default function AnimeCards({ handleClick, day }) {
  const { data, error } = useAnimeSchedule(day);

  return (
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
  );
}

function Card({ id, image, title, handleClick }) {
  //   console.log(image, title);
  return (
    <div
      onClick={() => handleClick(id)}
      className="
    flex flex-col bg-bg-primary p-2 rounded-lg h-70 w-45 overflow-clip text-ellipsis
    hover:scale-105 hover:cursor-pointer
    transition-transform duration-75 ease-in
    
    "
    >
      <img src={image} className="rounded-lg  h-[85%] object-cover" />

      <div className="title-container h-[15%]">
        <p className="text-xs font-semibold max-w-max line-clamp-2">{title}</p>
      </div>
    </div>
  );
}
