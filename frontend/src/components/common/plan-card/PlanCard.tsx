import { useNavigate } from "react-router-dom";
import PlanCardProps from "@/components/interfaces/PlanCardProps";

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  subtitle,
  price,
  perMonth,
  features,
  buttonColor,
  popular = false,
  plan_id,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`border rounded-lg shadow-md p-6 flex flex-col items-center w-full md:w-1/3 
        ${popular ? "relative border-teal-500" : ""}`}
    >
      {popular && (
        <span className="absolute -top-3 bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-500 mb-3">{subtitle}</p>
      <p className="text-3xl font-bold">${price}</p>
      <p className="text-sm text-gray-400 mb-5">{perMonth}</p>

      <button
        className={`w-full py-2 px-4 rounded-md text-white font-semibold transition hover:opacity-90 mb-5 ${buttonColor}`}
        onClick={() => {
          navigate("/checkout", {
            state: { title, price, plan_id }, // send data to checkout
          });
        }}
      >
        Get Started
      </button>

      <ul className="text-gray-700 text-sm text-left w-full">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 mb-2">
            <span className="text-green-500 font-bold">✔</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanCard;
