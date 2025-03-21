import "../App.css";
import { useState } from "react";
import SuccessWindow from "./Succeswindow";

function MovieSurveyForm() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    selectedOption: "",
    opinion: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    selectedOption: "",
    opinion: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormInfo({
      name: "",
      email: "",
      selectedOption: "",
      opinion: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      selectedOption: "",
      opinion: "",
    };
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Name validation
    if (!formInfo.name) {
      newErrors.name = "โปรดใส่ชื่อของคุณ";
      isValid = false;
    }
    // Email validation
    if (!formInfo.email) {
      newErrors.email = "โปรดใส่อีเมลของคุณ";
      isValid = false;
    } else if (!emailPattern.test(formInfo.email)) {
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
      isValid = false;
    }
    // Movie validation
    if (!formInfo.selectedOption) {
      newErrors.selectedOption = "กรุณาเลือกหนังที่คุณชอบ";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  //Movies list
  const movies = [
    { title: "Avatar", year: "2009", director: "James Cameron" },
    { title: "Inception", year: "2010", director: "Christopher Nolan" },
    { title: "Interstellar", year: "2014", director: "Christopher Nolan" },
    {
      title: "The Shawshank Redemption",
      year: "1994",
      director: "Frank Darabont",
    },
    { title: "Pulp Fiction", year: "1994", director: "Quentin Tarantino" },
    { title: "Parasite", year: "2019", director: "Bong Joon-ho" },
  ];

  //Movie Survey Form
  return (
    <div className="min-h-screen flex gap-y-4 justify-center">
      <div className="bg-white w-full max-w-lg rounded-md shadow-md">
        {/* If isSubmitted is TRUE, show success window; otherwise, show form */}
      {isSubmitted ? (
        <SuccessWindow
          formInfo={formInfo}
          handleNewSurvey={() => {
            // Reset the formInfo and isSubmitted
            handleReset();
            setIsSubmitted(false);
          }}
        />
      ) : (
        <>
        {/* Title */}
        <div class="bg-gradient-to-r from-purple-700 to-blue-600 flex flex-col space-y-1.5 p-6">
          <div className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
            Movie Survey
          </div>
        </div>

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
            <div className={`p-2 rounded-md ${errors.selectedOption ? "border border-red-500" : "border border-transparent"}`}>
            {movies.map((movie) => (
              <label
                key={movie.title}
                className="flex items-center space-x-2 mb-2 p-2 hover:bg-gray-100 hover:rounded-sm"
              >
                <input
                  className="focus:ring-purple-500 "
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
              className="mt-1 w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-purple-500"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            >
              รีเซ็ต
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              ส่งแบบสำรวจ
            </button>
          </div>
        </form>
        </>
        )}
      </div>
    </div>
  );
}

export default MovieSurveyForm;
