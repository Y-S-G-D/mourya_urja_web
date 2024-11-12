'use client'
import { motion } from 'framer-motion';
import CoupleImage from '@/app/assets/couple-image.png';

interface Testimonial {
    id: number;
    image: string;
    name: string;
    description: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        image: `${CoupleImage.src}`,
        name: 'John & Jane',
        description: 'We found our perfect match, thanks to this platform!',
    },
    {
        id: 2,
        image: `${CoupleImage.src}`,
        name: 'Alex & Sam',
        description: 'A truly wonderful experience.',
    },
    {
        id: 3,
        image: `${CoupleImage.src}`,
        name: 'Chris & Pat',
        description: 'Couldn’t have asked for a better service.',
    },
    {
        id: 4,
        image: `${CoupleImage.src}`,
        name: 'Jamie & Casey',
        description: 'Love blossomed through this wonderful platform.',
    },
    {
        id: 5,
        image: `${CoupleImage.src}`,
        name: 'Taylor & Morgan',
        description: 'Highly recommend to anyone looking for true love.',
    },
    {
        id: 6,
        image: `${CoupleImage.src}`,
        name: 'Jordan & Avery',
        description: 'This platform brought us together forever.',
    },
];

const TestimonialSection: React.FC = () => {
    return (
        <div className=" h-max w-full bg-gray-100 flex flex-wrap justify-center items-center gap-4 p-4">
            {testimonials.map((testimonial, index) => (
                <motion.div
                    key={testimonial.id}
                    className="p-4 bg-white shadow-lg rounded-lg w-60 border border-gray-200"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <img
                        src={testimonial.image}
                        alt={`${testimonial.name}`}
                        className="w-full h-32 object-cover rounded-md mb-2"
                    />
                    <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.description}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default TestimonialSection;