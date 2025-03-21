import TitleBar from "./TitleBar";
import Reset from "../../assets/Reset.svg"
import Send from "../../assets/Send.svg"


function SurveyForm({
  formInfo,
  errors,
  movies,
  handleChange,
  handleReset,
  handleSubmit,
}) {
  return (
    <>
      <div className="bg-white w-full max-w-lg rounded-md shadow-md">
        {/* Title */}
        <TitleBar />

        {/* Form */}
        <form
          noValidate
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 m-4 p-2"
        >
          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block font-medium text-gray-700 mb-1 ml-0"
            >
              ชื่อ <span className="text-red-500">*</span>
            </label>
            <input
              className="mt-1 w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-purple-500"
              type="text"
              id="name"
              name="name"
              placeholder="กรุณากรอกชื่อของคุณ"
              value={formInfo.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              อีเมล <span className="text-red-500">*</span>
            </label>
            <input
              className="mt-1 w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-purple-500"
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              value={formInfo.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Movie lists */}
          <div>
            <p className="font-medium text-gray-700 mb-2">เลือกหนังที่คุณชอบ</p>
            <div
              className={`p-2 rounded-md ${
                errors.selectedOption
                  ? "border border-red-500"
                  : "border border-transparent"
              }`}
            >
              {movies.map((movie) => (
                <label
                  key={movie.title}
                  className="flex items-center space-x-2 mb-2 p-2 hover:bg-gray-100 
                hover:rounded-sm hover:cursor-pointer"
                >
                  <input
                    className="focus:ring-purple-500 hover:cursor-pointer"
                    type="radio"
                    name="selectedOption"
                    value={movie.title}
                    checked={formInfo.selectedOption === movie.title}
                    onChange={handleChange}
                  />
                  <div className="ml-1">
                    <span className="block">{`${movie.title} (${movie.year}) `}</span>
                    <span className="block text-gray-500">{`Director: ${movie.director}`}</span>
                  </div>
                </label>
              ))}
            </div>
            {errors.selectedOption && (
              <p className="text-red-500 text-sm mt-1">
                {errors.selectedOption}
              </p>
            )}
          </div>

          {/* Comment */}
          <div>
            <label>ความคิดเห็นเกี่ยวกับหนัง</label>
            <textarea
              name="opinion"
              rows="4"
              value={formInfo.opinion}
              onChange={handleChange}
              placeholder="พิมพ์ความคิดเห็นของคุณที่นี้..."
              className="mt-1 w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-purple-500"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-4">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-2 px-5 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg shadow-md hover:bg-gray-300 hover:scale-105 transition-all duration-300 ease-in-out"
  >
              <img src={Reset} alt="Reset Icon" className="w-5 h-5 opacity-60"/>
              <span>รีเซ็ต</span>
            </button>

            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg shadow-md hover:from-purple-700 hover:to-blue-600 hover:scale-105 transition-all duration-300 ease-in-out"
  >
              <img src={Send} alt="Send Icon" className="w-5 h-5 invert" />
              <span>ส่งแบบสำรวจ</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SurveyForm;
