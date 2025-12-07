import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        making you feal the unexpected
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, i) => (
          <li
            key={i}
            className="flex items-center justify-center flex-1 h-[5rem]"
          >
            <img src={logo} width={90} height={20} alt={`Logo-${i}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
