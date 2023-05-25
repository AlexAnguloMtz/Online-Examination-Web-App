import './styles.css';

interface Props {
    src: string,
    alt: string,
    isActive: boolean,
    onClick: () => void
}

export function RoleOption({ src, alt, isActive, onClick }: Props) {
    return (
        <button
            className={`role__option ${isActive ? 'active' : ''}`}
            onClick={onClick}>
            <img
                className='role__image'
                src={src}
                alt={alt} />
        </button>
    );
}