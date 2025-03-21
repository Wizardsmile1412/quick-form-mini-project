import Movie from "../../assets/Movie.svg";

export default function TitleBar() {
  return (
    <div className="bg-gradient-to-r from-purple-700 to-blue-600 rounded-t-md flex flex-col p-4">
      <div className="flex items-center gap-4">
        <div>
          <img src={Movie} alt="Movie Icon" className="w-16 h-16 invert" />
        </div>
        <h2 className="text-2xl font-semibold text-white">Movie Survey</h2>
      </div>
    </div>
  );
}
