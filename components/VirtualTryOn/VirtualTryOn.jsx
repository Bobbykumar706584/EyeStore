"use client";

import { useState, useRef } from "react";

import Webcam from "react-webcam";

import Image from "next/image";

export default function VirtualTryOn() {
  const webcamRef = useRef(null);

  const fileRef = useRef(null);

  const [cameraOn, setCameraOn] = useState(false);

  const [image, setImage] = useState(null);

  const [selectedGlass, setSelectedGlass] = useState(
    "/glasses/black-frame.png",
  );

  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setImage(imageUrl);

    setCameraOn(false);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT */}

          <div>
            <span className="text-blue-600 font-semibold uppercase">
              Virtual Try-On
            </span>

            <h1 className="text-6xl font-bold mt-4">
              Try Before
              <br />
              <span className="text-blue-600">You Buy</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Upload your photo or use your webcam to preview eyeglasses
              instantly and find the perfect pair.
            </p>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => fileRef.current.click()}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl"
              >
                Upload Photo
              </button>

              <button
                onClick={() => {
                  setCameraOn(true);

                  setImage(null);
                }}
                className="border px-6 py-3 rounded-xl"
              >
                Use Webcam
              </button>
            </div>

            <input
              ref={fileRef}
              type="file"
              hidden
              accept="image/*"
              onChange={handleUpload}
            />

            {/* GLASSES */}

            <div className="flex gap-4 mt-10">
              {[
                "/glasses/black-frame.png",

                "/glasses/aviator.png",

                "/glasses/round-frame.png",
              ].map((glass) => (
                <button
                  key={glass}
                  onClick={() => setSelectedGlass(glass)}
                  className="border rounded-xl p-3"
                >
                  <Image src={glass} width={90} height={35} alt="" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT */}

          <div className="flex justify-center">
            <div className="relative w-[400px] h-[500px] rounded-3xl overflow-hidden shadow-xl bg-gray-100">
              {cameraOn ? (
                <>
                  <Webcam
                    ref={webcamRef}
                    mirrored
                    className="w-full h-full object-cover"
                  />

                  <Image
                    src={selectedGlass}
                    width={190}
                    height={70}
                    alt=""
                    className="
                    absolute
                    left-1/2
                    top-[42%]
                    -translate-x-1/2
                  "
                  />
                </>
              ) : image ? (
                <>
                  <Image src={image} fill alt="" className="object-cover" />

                  <Image
                    src={selectedGlass}
                    width={190}
                    height={70}
                    alt=""
                    className="
                    absolute
                    left-1/2
                    top-[42%]
                    -translate-x-1/2
                  "
                  />
                </>
              ) : (
                <div className="h-full flex justify-center items-center">
                  <p className="text-gray-500">Upload Image or Open Webcam</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
