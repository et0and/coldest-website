import Image from 'next/image';
import messageImage from '../public/message.png';

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <Image src={messageImage} alt="Message" />
    </div>
  );
}