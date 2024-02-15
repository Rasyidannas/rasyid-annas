import ExperienceItem from "./ExperienceItem";

function Experience({ className }) {
  const clients = [
    {
      name: "praven_kumar",
      url: "https://media.licdn.com/dms/image/C5103AQGD6M0I6RvDGQ/profile-displayphoto-shrink_100_100/0/1582005971929?e=1712793600&v=beta&t=kwCk0gVpBt1n152pvinn0B4mlDiLPxQhfE-7KJeXD2I",
      date: "dec 2021 - oct 2022",
      stars: 5,
      testimonials:
        "Annas is humble and skilled. Thought process that he has is amazing towards design. Ours was the first mobile project to him and it doesn't feel like. The output was very clean.He was able to deliver to our expectations and sometimes beyond. Happy that we were able to find him. We have many more things to do, keep up with your good work. While other professionals quoted high and said they need 2-3 months for designs, Annas did those in couple of weeks. He is super fast, reads our mind and gives the output that we love.",
      role: "ui/ux_designer",
    },
    {
      name: "michael_garaysi",
      url: "https://media.licdn.com/dms/image/D5603AQFKRIslaDvyHw/profile-displayphoto-shrink_100_100/0/1670221112468?e=1712793600&v=beta&t=vSixnNS69ezaMGSSPexJnc876J-F7CWMRv6uYtsf9kU",
      date: "dec 2021 - present",
      stars: 5,
      testimonials:
        "Working with Annas was such a great pleasure. Not only is his work outstanding. He's very fun to work with. He's willing to listen and works very hard. I would definitely recommend him to everyone and I hope to work with him again.",
      role: "ui/ux_designer",
    },
    {
      name: "wisdom_oparaocha",
      url: "https://media.licdn.com/dms/image/C4D03AQEw9Y4uECjYIg/profile-displayphoto-shrink_400_400/0/1531738175658?e=1712793600&v=beta&t=x0N2FDZHsX7KkmsKdtBgTkICtE8XgE-zpnulvI0NZGY",
      date: "dec 2021 - dec 2021",
      stars: 5,
      testimonials:
        "I've worked with over 200 developers, designers, videographers, content producers. — Annas is the best freelancer I have worked with. — Top 0.5% of skilled UI Designer Annas is very talented and organised. I would absolutely recommend it for large projects that require a lot of dedication.We needed around 7 designs mobile and desktop for a web page ready. With minimal descriptions and some samples he was able to get these pages ready for our team to use in less than 5 days. This included a complete mobile layout in less than 1 day, which is almost near impossible for an individual to products a great UI/UX design with amazing content formatting. The assistance is really helpful because now we can skip content writing, and move straight into business or perhaps content translation for the UI/UX pages. Thank you very much, Annas!!",
      role: "ui/ux_designer",
    },
  ];

  return (
    <div
      className={`border-r border-t border-lines-10 ${className} sm:hidden lg:flex flex-col bg-primary-20`}
    >
      <div className="h-12 flex-none flex items-center px-4 border-b border-lines-10">
        <h2>experience</h2>
      </div>

      <div className="pl-6 pr-2 py-4 flex flex-col gap-6 overflow-y-scroll">
        <p className="text-code text-secondary-10">
          <span>/</span>/ work experience and testimonials:
        </p>
        {clients.map((client, i) => (
          <ExperienceItem client={client} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
