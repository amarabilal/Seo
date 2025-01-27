import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH

const Image = ({ src, alt, ...rest }: ImageProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <NextImage
        src={`${basePath || ''}${src}`}
        alt={alt || 'Image'}
        className="object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
        {...rest}
      />
    </div>
  )
}

export default Image
