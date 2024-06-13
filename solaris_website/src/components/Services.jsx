import { services } from "../constants";
import styles from "../styles";

const Services = () => {
  return (
    <div className="bg-bgGray rounded-3xl mt-16">
      <div className="py-8 px-12">
        <h3 className={`${styles.heading3} text-secondary pb-10`}>Our services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.id} className="flex items-center space-x-4">
              <img src={service.icon} className="" alt={service.id} />
              <p className={`${styles.listText}`}>{service.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
