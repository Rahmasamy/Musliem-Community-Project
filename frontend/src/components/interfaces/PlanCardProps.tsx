export default interface PlanCardProps {
  title: string;
  subtitle: string;
  price: string;
  perMonth: string;
  features: string[];
  buttonColor: string;
  popular?: boolean;
}