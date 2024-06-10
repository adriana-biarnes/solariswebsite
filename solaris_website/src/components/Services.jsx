import { services } from "../constants";

console.log('aqui', services)


const Services = () => {
  return (
    <div className="bg-bgGray text-secondary rounded-3xl mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex items-center space-x-4 p-4"
          >
            <span className="">{service.icon}</span>
            <p className="text-lg">{service.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
