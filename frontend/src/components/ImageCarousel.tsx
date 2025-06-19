import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface Props {
    images: string[];
}

export default function ImageCarousel({ images }: Props) {
    const [idx, setIdx] = useState(0);
    if (!images || images.length === 0) return null;

    const prev = () => setIdx((idx + images.length - 1) % images.length);
    const next = () => setIdx((idx + 1) % images.length);

    return (
        <div className="relative w-full max-w-xl mx-auto my-8">
            <img
                src={images[idx]}
                alt={`slide-${idx}`}
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow"
            />
            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full"
                        aria-label="上一张"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full"
                        aria-label="下一张"
                    >
                        <ChevronRightIcon className="w-6 h-6" />
                    </button>
                </>
            )}
        </div>
    );
}
