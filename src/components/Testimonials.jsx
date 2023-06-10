import Star from "./Star";

const Testimonials = () => {
  const testimonials = [1, 2, 3];

  return (
    <div className="min-h-screen lg:h-screen bg-light-yellow py-10 px-4 lg:p-0">
      <div className="container flex flex-col justify-center gap-10 h-full">
        <h1 className="text-purple lg:w-[700px] font-bold text-[32px] md:text-[44px] lg:text-[56px] md:leading-[52px]">
          Hear out what my clients say about me
        </h1>
        <div className="flex flex-col md:flex-row gap-4">
          {testimonials.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-4 w-full p-8 rounded-lg hover:shadow-md bg-white">
                <p className="text-[12px] md:text-[16px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  ipsa dolore suscipit fugiat error, reiciendis voluptatibus
                  fugit provident ipsam libero.
                </p>
                <h1 className="font-bold text-purple">Jane</h1>
                <img src="/avatar-circle.png" alt="" className="w-10" />
                <Star />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
