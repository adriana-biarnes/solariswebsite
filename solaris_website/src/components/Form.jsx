import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ehvr9ta", "template_oujxm8k", form.current, {
        publicKey: "7l66IpQirpSnYC6gl",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  }

    return (
      <form
        ref={form}
        onSubmit={sendEmail}
        id="contact"
        className="relative z-10 max-w-md sm:max-w-xl sm:w-[616px] pt-10 sm:pr-0 xl:max-w-[1280px]"
      >
        <div className="space-y-12">
          <div className="pb-12">
            <h3 className="font-lato font-black text-[1.375rem] leading-8 text-primary pb-10">
              Contact us
            </h3>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-primary"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block w-full bg-white p-2 rounded-md text-primary placeholder:text-gray-400 placeholder:text-sm focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
                    placeholder="Jane Smith"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-primary"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full bg-white p-2 rounded-md text-primary placeholder:text-gray-400 placeholder:text-sm focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
                    placeholder="janesmith@email.com"
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
                  value="Send"
                  className="block w-full rounded-md bg-primary hover:bg-hoverPrimary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
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
