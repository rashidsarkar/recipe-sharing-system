import { Zoom } from "react-reveal";
function SectionHeading2({ children }) {
  return (
    <>
      <div className="section-title">
        <Zoom>
          <h1 className="mb-5 text-2xl font-semibold text-center text-purple-900 capitalize">
            <span className="">
              <Zoom>
                <span>{children}</span>
              </Zoom>
            </span>
          </h1>
        </Zoom>
      </div>
    </>
  );
}

export default SectionHeading2;
