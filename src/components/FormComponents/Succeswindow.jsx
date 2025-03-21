import TitleBar from "./TitleBar";
import Reset from "../../assets/Reset.svg";

function SuccessWindow({ formInfo, handleNewSurvey }) {
  return (
    <div className="flex flex-col justify-center w-[40%] ">
      {/* Title / Header */}
      <TitleBar />

      {/* Success Message Box */}
      <div className="bg-white p-6 shadow-xl rounded-b-md">
        <div className="border border-green-400  bg-green-50  rounded-md p-4">
          <div className="flex items-center gap-2 mb-2">
            {/* A check icon or any icon you like */}
            <span className="text-green-600 text-xl">✔</span>
            <h2 className="text-green-700 font-semibold text-lg">
              ส่งแบบสำรวจสำเร็จ!
            </h2>
          </div>
          <div className="text-black space-y-3 mt-4">
            <p className="flex gap-x-24">
              <span className="font-semibold text-gray-600">ชื่อ: </span>
              {formInfo.name}
            </p>
            <p className="flex gap-x-20">
              <span className="font-semibold text-gray-600">อีเมล: </span>
              {formInfo.email}
            </p>
            <p className="flex gap-x-10">
              <span className="font-semibold text-gray-600">
                หนังที่เลือก:{" "}
              </span>
              <span className="text-purple-700">{formInfo.selectedOption}</span>
            </p>  

            {/* Optional comment */}
            {formInfo.opinion && <RenderOpinion opinion={formInfo.opinion}/>}

          </div>
        </div>
        {/* Button */}
        <div className="mt-4">
          <button
            onClick={handleNewSurvey}
            className="flex items-center justify-center gap-2 px-5 py-3 w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold rounded-xl shadow-md hover:from-gray-700 hover:to-gray-600 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <img src={Reset} alt="Reset Icon" className="w-6 h-6 invert" />
            ทำแบบสำรวจใหม่
          </button>
        </div>
      </div>
    </div>
  );
}

function RenderOpinion({ opinion }){
  return(
  <div className="border-t-1 border-gray-300 flex flex-col gap-y-2 mt-4">
    <span className="font-semibold text-gray-600 mt-2">ความคิดเห็น: </span>
    <div className="bg-emerald-100 rounded-lg py-2 pl-4">{opinion}</div>
  </div>
  )
}

export default SuccessWindow;
