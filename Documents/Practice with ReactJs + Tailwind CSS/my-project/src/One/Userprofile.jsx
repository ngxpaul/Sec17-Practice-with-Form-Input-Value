import img from "../assets/img/2.jpg";

export const Userprofile = () => {
  return (
    <>
      <div className="w-[36rem] bg-white rounded p-12 flex ">
        <img
          src={img}
          className="w-32 rounded-full border-[11px] bg-[#E6EFFA] "
          alt="White cat"
        />
        <div>
          <h1>David Grant</h1>
          <h2>3D Artist</h2>

          <div>
            <p>4.7 Rating</p>
            <p>4,447 Reviews</p>
            <p>478 Students</p>
          </div>
          
          <p>
            David Grant has been making video games for a living for more than
            14 years as a Designer, Producer, Creative Director, and Executive
            Producer, creating games for console, mobile, PC and Facebook.{" "}
          </p>
          <button>Show more</button>
        </div>
      </div>
    </>
  );
};
