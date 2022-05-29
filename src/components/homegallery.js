import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React, { useMemo, useState } from "react";

export default function Homegallery() {
  const [showBg, setShowBg] = useState(false);
  const [openedImg, setOpenedImg] = useState("g1.jpeg");

  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  const fluid = useMemo(
    () =>
      data.allFile.nodes.find(({ relativePath }) => openedImg === relativePath).childImageSharp
        .gatsbyImageData,
    [data, openedImg]
  );

  return (
    <div id="sluzby" className="w-full py-4 bg-white mb-8">
      <div className="p-3 mx-auto w-full md:w-4/5 lg:w-4/6 xl:w-3/5 2xl:w-3/6">
        <h1 className="font-bold text-3xl mb-4 md:px-5">Ukázka naší práce</h1>

        {/* BG Overlay */}
        {showBg && (
          <div
            className="z-50 fixed flex justify-center items-center top-0 left-0 w-screen h-screen bg-black bg-opacity-75 cursor-pointer"
            onClick={() => setShowBg(!showBg)}
          >
            <div className="flex flex-col justify-center items-center p-5 w-full h-3/4 sm:w-full sm:h-3/4 md:w-2/6 md:h-5/6 lg:w-2/6 lg:h-5/6">
              <GatsbyImage
                placeholder="blurred"
                className="rounded-xl"
                image={fluid}
                alt=""
                style={{ height: "100%", width: "100%" }}
                imgStyle={{ objectFit: "cover" }}
              />

              <button
                className="mt-4 text-zinc-800 bg-zinc-100 rounded-xl px-4 py-2 hover:bg-rose-400  transition duration-300"
                onClick={() => setShowBg(!showBg)}
              >
                Zavřít
              </button>
            </div>
          </div>
        )}

        {/* First row */}
        <div className="flex flex-wrap justify-between md:px-5">
          <div className="w-1/2 md:w-1/3 h-52 md:h-52 p-1" 
              onClick={() => {
                setShowBg(!showBg);
                setOpenedImg("g1.jpeg");
              }}> 
            <StaticImage
              placeholder="blurred"
              className="rounded-xl  cursor-pointer"
              src="../images/g1.jpeg"
              alt=""
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-1/2 md:w-1/3  h-52 md:h-52 p-1"
              onClick={() => {
                setShowBg(!showBg);
                setOpenedImg("g2.jpeg");
              }}>
            <StaticImage
              placeholder="blurred"
              className="rounded-xl  cursor-pointer"
              src="../images/g2.jpeg"
              alt=""
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-1/2 md:w-1/3  h-52 md:h-52 p-1"
              onClick={() => {
                setShowBg(!showBg);
                setOpenedImg("g3.jpeg");
              }}>
            <StaticImage
              placeholder="blurred"
              className="rounded-xl  cursor-pointer"
              src="../images/g3.jpeg"
              alt="Komín 2"
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-1/2 md:w-1/3  h-52 md:h-52 p-1"
              onClick={() => {
                setShowBg(!showBg);
                setOpenedImg("g4.jpeg");
              }}>
            <StaticImage
              placeholder="blurred"
              className="rounded-xl  cursor-pointer"
              src="../images/g4.jpeg"
              alt="Komín 3"
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-1/2 md:w-1/3  h-52 md:h-52 p-1"
              onClick={() => {
                setShowBg(!showBg);
                setOpenedImg("g5.jpeg");
              }}>
            <StaticImage
              placeholder="blurred"
              className="rounded-xl  cursor-pointer"
              src="../images/g5.jpeg"
              alt="Komín 4"
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-1/2 md:w-1/3  h-52 md:h-52 p-1"
              onClick={() => {
                setShowBg(!showBg);
                setOpenedImg("g6.jpeg");
              }}>
            <StaticImage
              placeholder="blurred"
              className="rounded-xl  cursor-pointer"
              src="../images/g6.jpeg"
              alt="Komín 5"
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Second row */}
        {/* <div className="flex flex-wrap justify-between md:px-5">
          
        </div> */}
        
      </div>
    </div>
  );
}
