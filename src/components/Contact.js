import React, { useState } from "react";

export const Contact = () => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });
  const sendEmail = () => {
    window.emailjs.send(
      "service_c6k6q0p",
      "template_qg77e38",
      {},
      "user_dfv7MwJYwpkXzNK9tSKXN"
    );
  };
  return (
    <div className="min-h-full grid grid-cols-1 container mx-auto">
      <div className="bg-gray-100 rounded-lg p-10 grid grid-cols-1 gap-4 lg:gap-1 max-w-md col-span-1 min-w-full">
        <div className="text-3xl font-extrabold text-gray-800">
          Get in touch
        </div>
        <div className="font-semibold text-gray-600">
        Please, do not hesitate to get in touch. You can contact me directly via any of the links below:
        </div>
        <div className="flex">
          <svg
            className="w-6 h-6 text-gray-600 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <div className="text-gray-600 font-medium">
            23 rue ariana soghra, Ariana, Tunis
          </div>
        </div>
        <div className="flex">
          <svg
            className="w-6 h-6 text-gray-600 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
            />
          </svg>
          <div className="text-gray-600 font-medium">(+216) 53235483</div>
        </div>
        <div className="flex overflow-hidden">
          <svg
            className="w-6 h-6 text-gray-600 mr-2 flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <div className="text-gray-600 font-medium">
            hanchaoui.youssef256@gmail.com
          </div>
        </div>
        <div className="flex">
          <svg
            className="w-6 h-6 text-gray-600 mr-2 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <div className="text-gray-600 font-medium">hanchaoui Youssef</div>
        </div>
        <div className="flex">
          <a
            href={"https://www.linkedin.com/in/youssef-hanchaoui-147996124/"}
            target="_blank"
            className="flex group"
          >
            <svg
              className="w-6 h-6 text-gray-600 group-hover:text-blue-500 mr-2 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <div className="text-gray-600 group-hover:text-blue-500 font-medium">hanchaoui Youssef</div>
          </a>
        </div>
      </div>
      {/* <div className="p-10 grid grid-cols-1 gap-2 col-span-2">
              <input value={form.fullname} onChange={(event)=>setForm({...form, fullname:event.target.value})} placeholder="Fullname" className="h-16 p-4 rounded-md border border-gray-400 text-gray-600 font-medium"/>
              <input value={form.email} onChange={(event)=>setForm({...form, email:event.target.value})} placeholder="Email"  className="h-16 p-4 rounded-md border border-gray-400 text-gray-600 font-medium"/>
              <input value={form.phone} onChange={(event)=>setForm({...form, phone:event.target.value})} placeholder="Phone"  className="h-16 p-4 rounded-md border border-gray-400 text-gray-600 font-medium"/>
              <textarea value={form.message} onChange={(event)=>setForm({...form, message:event.target.value})} placeholder="Message"  rows="5" className="p-4 rounded-md border border-gray-400 text-gray-600 font-medium"/>
              <div>
              <button onClick={sendEmail} className="h-12 md:w-24 w-full bg-gray-500 hover:bg-gray-800 rounded-md font-medium text-white">Submit</button>
              </div>
           </div> */}
    </div>
  );
};
