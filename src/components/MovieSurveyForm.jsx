import '../App.css'
import { useState } from "react";

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

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormInfo({
            ...formInfo,
            [name]: value, 
        });
    }

    const handleReset = () => {
      setFormInfo({
        name: "",
        email: "",
        selectedOption: "",
        opinion: "",
      });
    };

    const validateForm = () =>{
      let isValid = true;
      const newErrors ={
        name: "",
        email: "",
        selectedOption: "",
        opinion: "",
      }
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
      } else if (!emailPattern.test(formInfo.email)){
        newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
        isValid = false;
      }
      // Movie validation
      if(!formInfo.selectedOption) {
        newErrors.selectedOption = "กรุณาเลือกหนังที่คุณชอบ";
        isValid = false;
      }
        
      setErrors(newErrors);
      return isValid
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      if (validateForm()) {
        // Only proceed if the form is valid
        console.log(formInfo);
      }
    };


    //Movies list
    const movies = [
        { title: "Avatar", year: "2009", director: "James Cameron" },
        { title: "Inception", year: "2010", director: "Christopher Nolan" },
        { title: "Interstellar", year: "2014", director: "Christopher Nolan" },
        { title: "The Shawshank Redemption", year: "1994", director: "Frank Darabont" },
        { title: "Pulp Fiction", year: "1994", director: "Quentin Tarantino" },
        { title: "Parasite", year: "2019", director: "Bong Joon-ho" }
      ];

      //Movie Survey Form
      return (
        <div onSubmit={handleSubmit} className='flex flex-col w-[40%]'>
            {/* Title */}
            <h2>Movie Survey</h2>

            {/* Form */}
          <form noValidate className="flex flex-col ">

            {/* Name */}
            <label>ชื่อ <span>*</span></label>
            <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="กรุณากรอกชื่อของคุณ"
                  value={formInfo.name}
                  onChange={handleChange}
                />
            {errors.name && <p className="text-red-500">{errors.name}</p>}

            {/* Email */}
            <label>อีเมล <span>*</span></label>
            <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  value={formInfo.email}
                  onChange={handleChange}
                />
            {errors.email && <p className="text-red-500">{errors.email}</p>}

            {/* Movie lists */}
            {movies.map((movie) => (
              <label key={movie.title}>
                <input
                  type="radio"
                  name="selectedOption"
                  value={movie.title}
                  checked={formInfo.selectedOption === movie.title}
                  onChange={handleChange}
                />
                {`${movie.title} (${movie.year}) Director: ${movie.director}`}
              </label>
            ))}
            {errors.selectedOption && <p className="text-red-500">{errors.selectedOption}</p>}


            {/* Comment */}
            <label>ความคิดเห็นเกี่ยวกับหนัง</label>
            <textarea name="opinion" 
            rows="4" cols="50" 
            value={formInfo.opinion}
            onChange={handleChange}
            placeholder="พิมพ์ความคิดเห็นของคุณที่นี้...">
            </textarea>

            {/* Buttons */}
            <button type="button" onClick={handleReset}>รีเซ็ต</button>
            <button type='submit'>ส่งแบบสำรวจ</button>
          </form>
        </div>
      );

}

export default MovieSurveyForm;