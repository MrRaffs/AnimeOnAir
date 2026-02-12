export default function Card({ id, image, title, handleClick }) {
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
