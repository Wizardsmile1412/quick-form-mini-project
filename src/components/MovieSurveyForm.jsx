import "../assets/App.css";
import { useState } from "react";
import SuccessWindow from "./FormComponents/Succeswindow";
import SurveyForm from "./FormComponents/SurveyForm";

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
    setErrors({
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
        <SurveyForm
          formInfo={formInfo}
          errors={errors}
          movies={movies}
          handleChange={handleChange}
          handleReset={handleReset}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default MovieSurveyForm;
