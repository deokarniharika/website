import Image from 'next/image';
export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        width={30}
        height={30}
        className="w-5 h-5 rounded-full mr-4"
        alt={name}
      />
      <div className="text-sm ml-2 font-bold">{name}</div>
    </div>
  );
}
