function SuccessWindow({ formInfo, handleNewSurvey }) {
    return (
      <div className="p-6">
        {/* Title / Header */}
        <div className="bg-gradient-to-r from-purple-700 to-blue-600 p-4 text-white rounded-t-md">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            Movie Survey
          </h2>
        </div>
  
        {/* Success Message Box */}
        <div className="bg-green-50 border border-green-400 rounded-b-md p-4">
          <div className="flex items-center gap-2 mb-2">
            {/* A check icon or any icon you like */}
            <span className="text-green-600 text-xl">✔</span>
            <h2 className="text-green-700 font-semibold text-lg">
              ส่งแบบสำรวจสำเร็จ!
            </h2>
          </div>
          <div className="text-gray-700 space-y-1">
            <p>
              <span className="font-semibold">ชื่อ: </span>
              {formInfo.name}
            </p>
            <p>
              <span className="font-semibold">อีเมล: </span>
              {formInfo.email}
            </p>
            <p>
              <span className="font-semibold">หนังที่เลือก: </span>
              <span className="text-purple-700">{formInfo.selectedOption}</span>
            </p>
          </div>
  
          <div className="mt-4">
            <button
              onClick={handleNewSurvey}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              ทำแบบสำรวจใหม่
            </button>
          </div>
        </div>
      </div>
    );
  }

export default SuccessWindow;