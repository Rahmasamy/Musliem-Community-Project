export default function ConfirmBtn({
  onClick,
  title,
}: {
  onClick?: () => void;
  title?: string;
}) {
  return (
    <>
      {" "}
      <button
        className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600"
        onClick={onClick}
      >
        {title ? `${title}` : "+ Create"}
      </button>
    </>
  );
}
