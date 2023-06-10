import Hero from "components/Hero";
import Layout from "components/Layout";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  // const navigate = useNavigate();
  const benefits = [
    {
      icon: "/1on1.svg",
      title: "1:1 Coaching",
    },
    {
      icon: "/communication.svg",
      title: "Consultation",
    },
    {
      icon: "/group.svg",
      title: "Group Coaching Sessions",
    },
  ];

  const testimonials = [1, 2, 3];

  return (
    <Layout>
      <Hero>
        <div className="absolute top-10 -left-20 bg-white p-2">
          1saffffffffffffffffffff00%
        </div>
      </Hero>
      <div className="container py-8 lg:py-20 flex flex-col justify-between px-4 md:px-0">
        <div className="flex flex-col lg:flex-row gap-2">
          <h1 className="text-purple w-full font-bold text-[32px] md:text-[40px] lg:text-[72px] leading-[40px] lg:leading-[80px]">
            I can help you in these particular areas
          </h1>
          <div className="flex flex-col w-full lg:w-1/2 gap-4 text-[12px] md:text-[16px]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              asperiores id quidem quibusdam iusto maxime quos repellat? Qui,
              sit error. Harum, numquam nesciunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              porro assumenda obcaecati minus voluptate possimus non ab alias
              libero asperiores autem neque quos vitae quidem distinctio tempore
              rerum mollitia animi, sed similique impedit corrupti saepe dolore
              eligendi. Harum, numquam nesciunt.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-10">
          {benefits.map((item, index) => {
            return (
              <div
                key={index}
                className="text-[12px] md:text-[16px] flex flex-col gap-2">
                <img src={item.icon} alt="" className="w-16" />
                <h1 className="font-bold text-purple text-xl">{item.title}</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dignissimos tempora omnis quasi enim reprehenderit iste error
                  numquam unde nemo architecto.
                </p>
              </div>
            );
          })}
        </div>
      </div>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus ipsa dolore suscipit fugiat error, reiciendis
                    voluptatibus fugit provident ipsam libero.
                  </p>
                  <h1 className="font-bold text-purple">Jane</h1>
                  <img src="/avatar-circle.png" alt="" className="w-10" />
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((item, index) => {
                      return (
                        <img
                          key={index}
                          src="/star.svg"
                          alt=""
                          className="w-5 inline-block"
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container min-h-screen md:h-screen py-8 lg:py-20 flex flex-col justify-center items-center gap-4 md:gap-20 px-4 md:px-0">
        <h1 className="text-purple text-center lg:w-[700px] font-bold text-[32px] md:text-[44px] md:leading-[52px]">
          Stay Motivated, read the weekly blog articles.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((item, index) => {
            return (
              <div
                key={index}
                className="border border-neutral-200 rounded-lg hover:border-neutral-400">
                <img src="/article1.png" alt="" className="rounded-t-lg" />
                <div className="p-2">
                  <h1 className="font-bold text-lg text-purple">
                    Balancing your love and work life.
                  </h1>
                  <p className="text-[12px] md:text[16px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat quos suscipit dolores ducimus consequuntur excepturi
                    amet iusto praesentium architecto quas?
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Hero
        containerClass="!bg-white !py-10"
        titleClass="!text-[32px] md:!text-[40px] !leading-[44px]"
        bg="bg-transform"
        title="Don’t miss out on my ‘Live life at the full potential’ free guide">
        <div className="absolute top-10 -left-20 bg-white p-2">
          1saffffffffffffffffffff00%
        </div>
      </Hero>
      <div className="container lg:h-screen py-8 lg:py-20 px-4 md:px-0">
        <div className="bg-light-yellow h-full rounded-lg flex">
          <div className="w-full flex flex-col justify-center p-20 gap-4">
            <h1 className="font-bold text-purple text-xl lg:text-3xl">
              Get 15-Minutes Complimentary online session.
            </h1>
            <p className="text-neutral-400">Limited Period Offer. Claim Now.</p>
            <button className="bg-tosca rounded-lg text-white p-2">
              Book Now
            </button>
          </div>
          <img
            src="/3_2 screen mockup.png"
            alt=""
            className="w-1/2 h-[80%] self-end hidden md:block"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
