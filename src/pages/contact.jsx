function ContactPage() {
    return (
      <section className="my-[70px] p-6 w-full  lg:flex lg:flex-row lg:justify-center lg:gap-1">
        <article className="  m-4 lg:w-[40%] lg:h-[70vh] lg:flex items-start ">
          <p className="text-gray-500 font-bold text-4xl lg:text-6xl  lg:leading-20 ">
            <span className=" hidden lg:block">Have a project in mined.</span> Get in touch
          </p>
        </article>
        <form
          action=" "
          className=" w-full flex flex-col items-center  gap-[21px] md:w-[80%] md:px-7 lg:h-[70vh] lg:w-[40%] lg:p-4  "
        >
          <input
            type="text"
            placeholder="name"
            className="w-full  rounded-2xl border border-gray-400 p-6 text-neutral-900 outline-0"
          />
          <input
            type="text"
            placeholder="email"
            className="w-full   rounded-2xl border border-gray-400 p-6 text-neutral-900 outline-0"
          />
          <textarea
            name="message"
            id=""
            placeholder="message"
            className=" w-full rounded-2xl border border-gray-400 h-[200px] lg:h-[50%] p-6 outline-0"
          ></textarea>
          <button className=" m-4 py-4 px-7 text-white bg-red-500 rounded-2xl outline-0">
            send
          </button>
        </form>
      </section>
    );
}
 
export default ContactPage;