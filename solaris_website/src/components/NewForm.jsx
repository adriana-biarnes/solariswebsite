
const NewForm = () => {
    return (

<section className="flex flex-col gap-5 md:grid ">
  
  <div className="flex flex-col gap-5">
  <div className="flex flex-col gap-5">
    <p className="text-2xl font-semibold text-blue-900">Contact us</p>
  </div>

  <label htmlFor="name">First Name</label>
  <input
    type="text"
    name="name"
    id="name"
    className="rounded-lg border-blue-900 h-10 border-4"
  />

  <label htmlFor="lastname">Last Name</label>
  <input
    type="text"
    name="lastname"
    id="lastname"
    className="rounded-lg border-blue-900 h-10 border-4"
  />
  <label htmlFor="email">Last Name</label>
  <input
    type="email"
    name="email"
    id="email"
    className="rounded-lg border-blue-900 h-10 border-4"
  />

  <label htmlFor="message">Last Name</label>
  <textarea
    name="message"
    id="message"
    className="rounded-lg border-blue-900 h-10 border-2"></textarea>

  <button className="p-2 rounded-lg text-white bg-blue-900">Send Message</button>
</div>
</section>

      
  
    );
  };
  
  export default NewForm;
  