// Safe Image

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { getStorageUrl } from '@/lib/helpers';

type SafeImageProps = {
  src: string | null;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

// Skeleton Loader Component
const ImageSkeleton = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => (
  <Skeleton className="w-full h-full rounded-sm" style={{ width, height }} />
);

const SafeImage = ({ src, alt, width, height, className }: SafeImageProps) => {
  const placeholderImage =
    getStorageUrl('placeholder.png', 'image') || '/images/placeholder.png';
  const [imageSrc, setImageSrc] = useState(src || placeholderImage);
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* <Suspense fallback={<ImageSkeleton width={width} height={height} />}>
        {loading && <ImageSkeleton width={width} height={height} />}

        <Image
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          className={`${className} ${loading ? 'hidden' : ''}`} // Hide image until loaded
          onError={() => setImageSrc(placeholderImage)} // Fallback if loading fails
          onLoad={() => setLoading(false)}
        />
      </Suspense> */}

      {loading && <ImageSkeleton width={width} height={height} />}

      <Image
        src={imageSrc}
        alt={alt}
        width={loading ? 0 : width}
        height={loading ? 0 : height}
        className={`${className} ${loading ? 'invisible' : ''}`} // Hide image until loaded
        onError={() => {
          setLoading(false);
          setImageSrc(placeholderImage);
        }} // Fallback if loading fails
        onLoad={() => setLoading(false)}
      />
    </>
  );
};

export default SafeImage;
