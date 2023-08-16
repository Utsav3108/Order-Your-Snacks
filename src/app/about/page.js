import React from "react";

const page = () => {
  return (
    <div className="p-4 rounded-md shadow-xl shadow-gray-700">
      <h1 className="font-bold text-xl md:text-3xl text-[#ee5f35]">
        About Order Your Snacks
      </h1>
      <div className="py-4 border-b-[1px] border-b-gray-600">
        <h2 className="font-semibold my-2 text-center text-lg md:text-left md:text-2xl">
          Why OYS
        </h2>
        <p className="text-center md:text-left text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloremque
          aut velit distinctio repellendus, reiciendis, nostrum libero autem,
          ipsam officia accusamus eligendi? Dolorem est sed architecto modi quam
          aliquam error! <br />
          <br />
        </p>
        <p className="text-center md:text-left text-sm text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, placeat.
          Saepe aliquam nemo minus ab! Blanditiis dolorem modi delectus debitis,
          quasi officia perspiciatis quibusdam! Officia suscipit obcaecati
          dolorem vitae error explicabo, pariatur distinctio perferendis
          quibusdam, modi ab impedit porro itaque praesentium corporis nihil id
          ipsam magni cumque assumenda maxime. Aperiam? <br />
          <br />
        </p>
        <p className="text-center md:text-left text-sm text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          cum impedit nulla ut at incidunt, quae vel pariatur a deleniti ipsa.
          Maiores placeat explicabo obcaecati. At qui voluptatem necessitatibus
          accusantium provident, laudantium in eveniet quod officiis ipsum,
          recusandae autem, sint iusto aliquam optio aut eos repudiandae. A ad
          beatae dolorum!
        </p>
      </div>
      <div className="mt-5">
        <h2 className="font-semibold my-2 text-center md:text-left text-lg">
          Developed By
        </h2>
        <ul className="text-sm text-center md:text-left">
          <li>
            Aditya Shinde <span className="text-gray-600">(Developer)</span>
          </li>
          <li>
            Smit Patel
            <span className="text-gray-600">(Leader & Developer)</span>
          </li>
          <li>
            Ved Panchal <span className="text-gray-600">(Developer)</span>
          </li>
          <li>
            Utsav Pandya <span className="text-gray-600">(Developer)</span>
          </li>
          <li>
            Kajal Tiwari <span className="text-gray-600">(Developer)</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
