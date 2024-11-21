import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <>
      <section className="py-24 bg-sky-100">
        <div className=" mx-auto px-10 md:px-28">
          <h1 className="text-4xl text-center tracking-wide font-bold text-gray-600 hover:text-indigo-600 mb-20">
            Contact Us
          </h1>
          <div className=" flex items-center flex-col justify-center ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85589.08862560935!2d73.90914417499638!3d18.549720560206215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1732123308218!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="mt-24">
              <div className="max-w-[50rem] m-auto">
                <form
                  action="https://formspree.io/f/mbljkanp"
                  method="POST"
                  className="flex flex-col gap-8"
                >
                  <input
                    type="text"
                    placeholder="username "
                    name="username"
                    required
                    autoComplete="off"
                    className="px-4 py-2 text-md  outline-none border-2 border-gray-500 rounded-md hover:border-gray-600 duration-200 peer focus:border-indigo-600  bg-inherit w-full"
                  />
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    autoComplete="Off"
                    required
                    className="px-4 py-2 text-md  outline-none border-2 border-gray-500 rounded-md hover:border-gray-600 duration-200 peer focus:border-indigo-600  bg-inherit w-full"
                  />
                  <textarea
                    name="Message"
                    placeholder="Enter your message"
                    cols={30}
                    rows={8}
                    autoComplete="off"
                    required
                    className="px-4 py-2 text-md  outline-none border-2 border-gray-500 rounded-md hover:border-gray-600 duration-200 peer focus:border-indigo-600  bg-inherit w-full"
                  ></textarea>
                  <input
                    type="submit"
                    value="Send"
                    className="mt-6 px-6 py-3 bg-gradient-to-r from-violet-700 to-pink-700 text-white uppercase tracking-wide font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-transform ease-in-out"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
