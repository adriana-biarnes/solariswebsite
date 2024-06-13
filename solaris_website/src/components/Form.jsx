import Footer from "./Footer";

const Form = () => {
  return (

        <form className=" relative z-10 max-w-md sm:max-w-xl sm:w-[616px]  pt-40 sm:pr-0 xl:max-w-[1280px]">
          <div className="space-y-12">
            <div className="border-b border-primary/10 pb-12">
              <h3 className="font-lato font-black text-[22px] leading-8 text-primary pb-10">
                Contact us
              </h3>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
                {/* First name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium leading-6 text-primary"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="firstName"
                      className="block w-full bg-white p-2 rounded-md text-primary placeholder:text-gray-400 placeholder:text-sm focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
                      placeholder="Jane"
                    />
                  </div>
                </div>

                {/* Last name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium leading-6 text-primary"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      autoComplete="lastName"
                      className="block w-full bg-white p-2 rounded-md text-primary placeholder:text-gray-400 placeholder:text-sm focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium leading-6 text-primary"
                  >
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="block w-full bg-white p-2 rounded-md text-primary placeholder:text-gray-400 placeholder:text-sm focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
                      placeholder="Type your message here..."
                      defaultValue={""}
                    />
                  </div>
                </div>

                {/* Button */}
                <div>
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
    

  );
};

export default Form;
