import { Camera, Upload, Sparkles } from "lucide-react";

const VirtualTryOn = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 rounded-[40px] overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-10 items-center p-10 md:p-16">
            {/* LEFT */}

            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-8">
                <Sparkles size={18} />
                Virtual Try-On
              </div>

              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Try Before
                <br />
                You Buy
              </h2>

              <p className="text-blue-100 mt-8 text-lg max-w-lg">
                Upload your photo or use your webcam to preview eyeglasses
                instantly and find the perfect pair for your face.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold flex gap-2 items-center hover:scale-105 duration-300">
                  <Upload size={20} />
                  Upload Photo
                </button>

                <button className="border border-white/30 px-8 py-4 rounded-xl flex gap-2 items-center hover:bg-white hover:text-slate-900 duration-300">
                  <Camera size={20} />
                  Open Camera
                </button>
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative flex justify-center">
              {/* Main Card */}

              <div className="bg-white p-5 rounded-[35px] shadow-2xl w-[340px]">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000"
                  alt=""
                  className="rounded-3xl h-[450px] w-full object-cover"
                />

                <div className="mt-5">
                  <h3 className="font-bold text-xl">Face Preview</h3>

                  <p className="text-slate-500">AI Powered Virtual Try-On</p>
                </div>
              </div>

              {/* Floating Card */}

              <div className="absolute -top-5 -right-5 bg-white p-4 rounded-2xl shadow-xl">
                <p className="text-sm text-slate-500">Accuracy</p>

                <h3 className="text-3xl font-bold text-blue-600">98%</h3>
              </div>

              {/* Floating Card */}

              <div className="absolute bottom-0 -left-5 bg-white p-5 rounded-2xl shadow-xl">
                <h4 className="font-bold">Live Preview</h4>

                <p className="text-slate-500 text-sm">Webcam Supported</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTryOn;
