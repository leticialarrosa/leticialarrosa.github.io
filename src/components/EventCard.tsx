interface EventCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
}

export const EventCard = ({ title, date, description, image }: EventCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <p className="text-gaucho-secondary font-semibold mb-2">{date}</p>
        <h3 className="text-xl font-display font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};