import './styles.css';

interface Props {
    text: string,
    src: string,
    alt: string,
    isActive: boolean,
    onClick: () => void
}

export function RoleOption({ text, src, alt, isActive, onClick }: Props) {
    return (
        <button
            className={`role__option ${isActive ? 'active' : ''}`}
            onClick={onClick}>
            <p className='role__option-name'>{text}</p>
            <img
                className='role__option-image'
                src={src}
                alt={alt} />
        </button>
    );
}